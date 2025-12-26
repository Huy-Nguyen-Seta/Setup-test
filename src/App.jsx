import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.restful-api.dev/objects');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    // fetch('https://api.restful-api.dev/objects')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));
    fetchData();

  }, [])

  return (
    <>

    </>
  )
}

export default App
