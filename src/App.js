import React, {useState, useEffect} from "react"
import axios from 'axios'
import Header from './components/header'
import Card from './components/card'
import "./App.css";




function App() {
//hook state
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(( response => {
      setData(response.data)
    }))
    .catch((err=>{
    }))
    
  }, [])
  return (
    <div className="App">
        <Header/>
        <Card data={data}/>
    </div>
  );
}

export default App;
