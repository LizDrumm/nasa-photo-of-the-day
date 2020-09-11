import React, {useState, useEffect} from "react"
import axios from 'axios'
import Card from './components/Card'
import "./App.css";
import Header from './components/Header';


import { BASE_URL, API_KEY } from './constants/index.js'



function App() {
//hook state
  const [data, setData] = useState([]);
  const [date, setDate] = useState();

  const [filtered, setFiltered] = useState(data)

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
   //axios.get ('https://api.nasa.gov/planetary/apod?api_key=B9bFEkAnXmyB5VOr3WeKhHuaXmmIhMd0WrXYmOxy')
    .then(( response => {
      setData(response.data)
    }))
    .catch((err=>{
    }))
    
  }, [])


  // useEffect(() => {

  //   //can't filter bc not an array ?
  //   filtered(data.filter(post => {
  //    post.date.includes(date)

  //   }))
  
  // }, [setDate, data])
  

  return (
    <div className="App">
          <Header  date={date}/> {/*//setDate={setDate}/>*/}
        <Card data={data}/> 
    </div>
  );
}

export default App;
