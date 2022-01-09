import { useState } from "react";
import {IState as Props} from '../App';

interface IProps {
    people:Props["people"],
    setPeople:React.Dispatch<React.SetStateAction<Props["people"]>>
}


const AddToList: React.FC<IProps> = ({people,setPeople}) => {
  const [input, setInput] = useState({
    name: "",
    url: "",
    age: "",
    note: "",
  });

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value, 
        })
  }

  const clickHandler = ():void => {
        if (!input.name || !input.age || !input.url) {
            return;
        }
        setPeople([
            ...people,
            {
                name:input.name,
                age:+input.age, // musime tu dat +, aby to bylo cislo a ne String!  Z inputu vzdy dostaneme string.
                url:input.url,
                note:input.note,
            }
        ])

        setInput({
            name:'',
            age:'',
            url: '',
            note: '',
        })
  }

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={changeHandler}
        name='name'
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={changeHandler}
        name='age'
      />
      <input
        type="text"
        placeholder="Image URL"
        className="AddToList-input"
        value={input.url}
        onChange={changeHandler}
        name='url'
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={changeHandler}
        name='note'
      />
      <button className='AddToList-btn' onClick={clickHandler}>Add to List</button>
    </div>
  );
};

export default AddToList;
