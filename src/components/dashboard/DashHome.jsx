import {list} from "postcss";

const DashHome = () => {
    const sampleData = ["the first thing", "the second thing", "The third thing"];
    return(
        <div>
            <h1 className={"text-center mt-2 text-4xl font-aboreto"}>
                H-Thing
            </h1>
            <hr className={"mt-2"}></hr>
            <div className={"flex justify-center list-none font-quicksand mt-8"}>
                <ls>
                    {sampleData.map(eachEntry => {
                        return <li className={"my-2"}>{eachEntry}</li>
                    })}
                </ls>
            </div>
        </div>
    )
}

export default DashHome;