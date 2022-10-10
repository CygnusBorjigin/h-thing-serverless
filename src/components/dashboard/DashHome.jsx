import axios from "axios";
import {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import AddItem from "./AddItem";
import EachItem from "./EachItem";
import addItem from "./AddItem";

const DashHome = () => {
    const [listItem, setListitem] = useState([]);

    const fetchTodoList = () => {
        const userToken = localStorage.getItem("hThingToken");
        const data = JSON.stringify({
            "userToken": userToken
        });

        const config = {
            method: 'post',
            url: 'https://l3bzsklp86.execute-api.us-east-1.amazonaws.com/test/fetchlist',
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                setListitem(response.data.content);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        fetchTodoList();
    }, []);

   const addItemToList = () => {

   }

    return(
        <div>
            <h1 className={"text-center mt-2 text-4xl font-aboreto"}>
                H-Thing
            </h1>
            <hr className={"mt-2"}></hr>
            <div className={"flex justify-center list-none font-quicksand mt-8"}>
                <ul>
                    {listItem.map(eachEntry => {
                        return <EachItem key={uuidv4()} message={eachEntry}></EachItem>
                    })}
                    <AddItem addFunction={addItemToList()}></AddItem>
                </ul>
            </div>
        </div>
    )
}

export default DashHome;