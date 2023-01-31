import { useDispatch, useSelector } from "react-redux";
import {increment,incrementbyv} from "../features/showSlice";
function Child1(){
const data=useSelector((e)=>e.show.value)
    const dispatch=useDispatch();
    return(
        <>
        <h1>I am from Child1 ={data}</h1>
        <button onClick={(()=>dispatch(increment()))}>Click: From Child1 Component increment by 1</button>
        <button onClick={(()=>dispatch(incrementbyv(10)))}>Click: from Child1 component increment By payload value </button>
        </>
    )
}
export default Child1;