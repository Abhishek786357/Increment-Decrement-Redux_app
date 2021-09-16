
import './App.css';
import {useSelector , useDispatch} from "react-redux";
import {incNumber, decNumber} from "./actions/index"

 const App=()=>{
const myState = useSelector((state) =>state.changeTheNumber)
const  dispatch = useDispatch()
  return (
    <>
  {/* <div className="main-div">
          <div className="center_div">
              <h1>0</h1>
              <div className="btn_div"> 
              <button value ={myState}>Increment</button>
              <button>Decrement</button>
              </div>
          </div>

      </div> */}
<div> <h1>Hello Redux</h1>
<div>
  <a onClick={()=> dispatch (decNumber())}><button><span>- </span></button></a>
  <input  value={myState}></input>
  <a onClick={()=> dispatch (incNumber())} ><button><span>+ </span></button></a>
</div>
</div>
    </>
  );
}

export default App;
