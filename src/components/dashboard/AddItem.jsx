import axios from "axios";

const pushChange = () => {
    const data = JSON.stringify({
        "userToken": localStorage.getItem("hThingToken")
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
            console.log("item added");
        })
        .catch(function (error) {
            console.log(error);
        });
};

const handelAddItem = () => {

};

const AddItem = () => {


    return (
        <li  className={"my-2 border-b-2 flex justify-between w-[600px]"}>
            <input placeholder={"new item"} className={"w-2/3 focus:outline-0"}></input>
            <button className={"ml-4 hover:bg-gray-600 hover:text-amber-50 rounded-md p-1"}>Add</button>
        </li>
    )
}

export default AddItem;