import React, { useState } from "react";
import { Button, Input } from "@obras/util-obras";

export default function Root(props) {
  const [stateInput,setStateInput] = useState("teste");


  return (
    <>
      <section>{props.name} is mounted!</section>
      <Button onClick={()=>{alert("teste")}}></Button>
      <Input placeholder={"Teste"} onChange={(element)=>setStateInput(element.target.value)} value={stateInput}/>
      <section>digitou: {stateInput}</section>
    </>
  );
}
