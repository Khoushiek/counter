import {React, useEffect, useRef, useState} from "react";
import {Button, Typography} from "@material-ui/core"
import {increment, decrement, reset} from "./actions";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
  const counter = useSelector(state => state );
  const dispatch = useDispatch();
  return(
    <div>
      {counter}
      <Button variant="outlined" color="primary" onClick={() => {dispatch(increment())}}>Increment</Button>
      <Button variant="outlined" color="secondary" onClick={() => {dispatch(decrement())}}>Decrement</Button>
      <Button variant="outlined" color="default" onClick={() => {dispatch(reset())}}>Reset</Button>
    </div>
  )
}

export default App