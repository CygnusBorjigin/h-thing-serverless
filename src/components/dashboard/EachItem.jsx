import {v4 as uuidv4} from "uuid";
import axios from "axios";

const pushChange = (itemId) => {
    const data = JSON.stringify({
        "userToken": localStorage.getItem("hThingToken"),
        "action": "delete",
        "modifyItem": itemId
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

const EachItem = (props) => {
    const handelRemoveItem = () => {
        props.removeFunction(props.message.id);
        pushChange(props.message.id);
    }
    return(
        <li
            className={"my-2 border-b-2 flex justify-between w-[600px]"}
            key={uuidv4()}
        >
            {props.message.item}
            <button className={"ml-4 hover:bg-gray-600 hover:text-amber-50 rounded-md p-1"} onClick={handelRemoveItem}> finish</button>
        </li>
    )
}

export default EachItem;