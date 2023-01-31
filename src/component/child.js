import { useSelector } from "react-redux";

function Child(){
    const data =useSelector((e)=>e.show.value)

    return(
        <>
        <h1>I am from Child = getting value from child1: <span>{data}</span></h1>
        </>
    )
}
export default Child;