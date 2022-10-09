const AddItem = () => {
    return (
        <li  className={"my-2 border-b-2 flex justify-between w-[600px]"}>
            <input placeholder={"new item"}></input>
            <button className={"ml-4 hover:bg-gray-600 hover:text-amber-50 rounded-md p-1"}>Add</button>
        </li>
    )
}

export default AddItem;