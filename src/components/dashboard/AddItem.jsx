import axios from "axios";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

const pushChange = (newItem) => {
    const data = JSON.stringify({
        "userToken": localStorage.getItem("hThingToken"),
        "action": "add",
        "modifyItem": newItem
    });

    const config = {
        method: 'post',
        url: 'https://l3bzsklp86.execute-api.us-east-1.amazonaws.com/test/modifylist',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};


const AddItem = (props) => {
    const [newItem, setNewItem] = useState("");

    const handelChange = (event) => {
        setNewItem(event.target.value);
    };

    const handelAddItem = () => {
        const itemToAdd = {
            id: uuidv4(),
            item: newItem
        };

        props.addFunction(itemToAdd);
        pushChange(itemToAdd);
        setNewItem("");
    };

    return (
        <li  className={"my-2 border-b-2 flex justify-between w-[600px]"}>
            <input placeholder={"new item"} className={"w-2/3 focus:outline-0"} onChange={handelChange} value={newItem}></input>
            <button className={"ml-4 hover:bg-gray-600 hover:text-amber-50 rounded-md p-1"} onClick={handelAddItem}>Add</button>
        </li>
    )
}

export default AddItem;