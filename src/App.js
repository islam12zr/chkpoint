import logo from './logo.svg';
import './App.css';
import Header from './COMPOENT/Header';
import Person from './COMPOENT/Person';
import axios from 'axios';
import { useState} from 'react';
import { useEffect } from 'react';


function App() {
const [Persons, setPerson] = useState([]);
useEffect(() => {
  try {
    let result =  axios.get("https://jsonplaceholder.typicode.com/users").then((res)=> setPerson(res.data));
  } catch (error) {
    console.log(error)
  }

}, []);

  return (
    <div className="App">


<Header/>
<div className="list ">
{Persons.length?Persons.map(el => <Person user = {el}/>):<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" /> }

</div>

    </div>
  );
}

export default App;
