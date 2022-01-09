import {IState as IProps} from '../App';

/* pred importem Istate as IProps
interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string; // ten otaznik znamena, ze je to optional
  }[];
}
*/
const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => { // budeme specifikovat ze vracime JSX element
        return people.map(person => {
            return(
            <li className='List'>
                <div className='List-header'>
                    <img className='List-img' src={person.url}/>
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
         ) })
    }

  return (
    <ul>
     {renderList()}
    </ul>
  );
};

export default List;
