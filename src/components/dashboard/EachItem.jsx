import {v4 as uuidv4} from "uuid";

const EachItem = (props) => {
    const handelRemoveItem = () => {
        props.removeFunction(props.message.id);
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