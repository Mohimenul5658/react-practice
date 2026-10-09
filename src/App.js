import React from "react";
import Card from "./components/Card";
import Data from "./data.json";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import State from './state';
import Rendering from "./Conditional_Rendering/index";
import Index from "./event_hadler";
import EventBinding from "./event_binding";
import Hook1 from "./HOOK_USESTATE/hook1";
import HOOK_USESTATE2 from "./HOOK_USESTATE/hook2";
import Form from "./components/form/form";
import Child from "./components/STATE_LIFTING/Child";
import Todo from "./Todo";
import NewTodo from "./NewTodo";
import Toggle from "./toggle/Toggle";
import FAQS from "./components/FAQ/FAQS";
import UseEffectExample from "./components/useEffect/UseEffectExample";
import DataFetch from "./components/useEffect/DataFetch";

function App() {
  const data = "I'm from parent(app.js)";
  const handleChildData = (childData)=>{
    console.log(childData);
  }
  const handleNewTodo = (newTodo)=>{
    console.log(newTodo);
  }
  let items = [];
  // for(let x=0; x<Data.length; x++){
  //   items.push(<Card titleText={Data[x].title} descText={Data[x].desc}/>)
  // }
  items=Data.map((item, index)=> <Card key={index} titleText={item.title} descText={item.desc}/> );
  return <div>
    <h1 class="heading">ToDo App</h1>
    {items}
    <div>
      <Card1 name="Card1" desc="this is a description"/>
      <Card2 name="Rahat"/>
    </div>
    <State />
    <Rendering />
    <Index/>
    <EventBinding/>
    <Hook1/>
    <HOOK_USESTATE2/>
    <Form/>
    <Child Data={data} onData={handleChildData}/>
    <Todo title="learn Reactjs"/>
    <NewTodo onTodo={handleNewTodo}/>
    <Toggle/>
    <FAQS/>
    <UseEffectExample/>
    <DataFetch/>
  </div>;
}

export default App;
