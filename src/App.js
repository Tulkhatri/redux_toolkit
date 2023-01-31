import './App.css'
import { useDispatch, useSelector } from "react-redux";
import {decrement} from "./features/showSlice";
import Child from './component/child'
import Child1 from './component/child1'
function App() {
    const data =useSelector((e)=>e.show.value)
    const dispatch=useDispatch();
    return (
        <>
            <div><h1>I am from App.js page=getting value from child1: <span>{data}</span></h1></div>
            <Child/>
            <Child1/>
            <button onClick={(()=>dispatch(decrement()))}>Click: From App.js Page For decrement by 1</button>
        </>
    )
}
export default App;