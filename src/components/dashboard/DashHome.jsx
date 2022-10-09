import axios from "axios";
import {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const DashHome = () => {
    const sampleData = ["the first thing", "the second thing", "The third thing"];
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
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        fetchTodoList();
    }, []);

    return(
        <div>
            <h1 className={"text-center mt-2 text-4xl font-aboreto"}>
                H-Thing
            </h1>
            <hr className={"mt-2"}></hr>
            <div className={"flex justify-center list-none font-quicksand mt-8"}>
                <ul>
                    {sampleData.map(eachEntry => {
                        return(
                            <li
                                className={"my-2"}
                                key={uuidv4()}
                            >
                                {eachEntry}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default DashHome;