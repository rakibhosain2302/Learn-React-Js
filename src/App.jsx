// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "./components/card.jsx";
import Data from "./data.json";
import List from "./components/mapping/uuid_list.jsx";
import NestedList from "./components/mapping/nested.jsx";
import Card from "./components/card2.jsx";
import Card2 from "./components/class/card.jsx";
import State from "./components/State/state.jsx";
import Text from "./components/State/pactice/Text.jsx";
import Conditional_Rendering from "./components/conditional/index.jsx";
import Event from "./components/Event/event.jsx";
import Binding from "./components/binding/index.jsx";
import UseStateExample from "./components/hooks/useState.jsx";
import StateUpdate from "./components/hooks/stateUpdate.jsx";
import EventBubbling from "./components/Event/eventBubbling.jsx";
import React_form from "./components/Form/form.jsx";
import Child from "./components/state_lifting/child.jsx";
import { FaReact } from "react-icons/fa";
import ReactBootstrap from "./components/ReactBootstrap/ReactBootstrap.jsx";
import Home from "./components/state_lifting/home.jsx";
import Toggle from "./components/toggle/toggle.jsx";
import Faq from "./components/faq/Faqs.jsx";
import UseEffectExample from "./components/hooks/useEffect.jsx";
import DataFetch from "./components/hooks/UseEffact/DataFetch.jsx";
import CutomHookUsers from "./components/hooks/Custom/Custom.jsx";
import CutomHookTodos from "./components/hooks/Custom/Todos.jsx";
import NotifyToastify from "./components/Toastify/NewData.jsx";
import DynamicStyle from "./components/dynamic-styling/index.jsx";








function Welcome(){
  return React.createElement('div', {},
    React.createElement('h1', {}, 'Welcome to React'),
    React.createElement('p', {}, 'This is a simple React application.')
  );
}




function App() {
  // const [count, setCount] = useState(0)

  // const css = {
  //   color: 'red',
  //   backgroundColor: '#fff',
  // }

  
  // Using for loop to iterate over Data array
  
  // let items = [];
  // for (let i = 0; i < Data.length; i++) {
  //   items.push(
  //     <Card
  //       title={Data[i].title}
  //       description={Data[i].description}
  //       date={new Date()}
  //       year={new Date().getFullYear()}
  //     />,
  //   );
  // }

  // Using map to iterate over Data array

  // items = Data.map((item, index) => (
  //   <Card
  //     key={index}
  //     title={item.title}
  //     description={item.description}
  //     date={new Date()}
  //     year={new Date().getFullYear()}
  //   />
  // ));

  const Data = "Data from parent component";
  const sendDataToParent = (childData) => {
    console.log(childData);
  };


  return (
    <>
    
      {/* <div className="container">
        <div>{items}</div>
      </div> */}
      {/* <List />   */}
      {/* <NestedList /> */}
      {/* <Card title="Card Title" content="Card Content" /> */}
      {/* <Card2 name="Card 2 Title" /> */}

      {Welcome()}
      {/* <FaReact size={100} color="#61DBFB" />

      <ReactBootstrap /> */}
      {/* <State /> */}

      {/* <Text /> */}

      <Conditional_Rendering />

      <Event />

      <Binding />

      <UseStateExample />

      <StateUpdate />

      <EventBubbling />

      <React_form />

      <Child  data={Data}  sendDataToParent={sendDataToParent} />

      <Home />

      <Toggle />

      <Faq />

      <UseEffectExample />

      {/* <DataFetch /> */}

      <CutomHookUsers />

      <CutomHookTodos />

      <NotifyToastify />

      <DynamicStyle />

    </>
  );
}

export default App;
