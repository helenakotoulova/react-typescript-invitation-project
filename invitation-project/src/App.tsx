import React, {useState} from "react";
import List from "./components/List";
import "./App.css";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note? : string, // ten otaznik znamena, ze je to optional
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([{
    name: "LeBron James",
    url:'http://upload.wikimedia.org/wikipedia/commons/c/cf/LeBron_James_crop.jpg' ,
    age:32,
    note: 'Best player'
  },]);

  return (
    <div className="App">
      <h1>People invited to the party!</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;

/*
{
      name: "LeBron James",
      url:'' ,
      age:32,
      note: 'Best player'
    },
    {
      name: "Kobe Bryant",
      url: '',
      age: 42,

    }
*/