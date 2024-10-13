
import { useState } from 'react'
import './App.css'
import EmployeeCard from './components/EmployeeCard'
import axios from 'axios'

const urlApi = 'https://randomuser.me/api/'

const sampleEmployee = {
  name: {
    first: 'Johann',
    last:'Lillejord'
  },
  email: 'johann.lillejord@example.co',
  picture: {
     medium : 'https://randomuser.me/api/portraits/med/men/23.jpg'
  }
}

function App() {

  const [employee, setEmployee] = useState(sampleEmployee)
  
  const getEmployee = async () => {
    try {
      const response = await axios.get(urlApi);
      console.log(response.data.results[0])
      // On utilise response.data.results[0] pour extraire le premier employé
      setEmployee(response.data.results[0]);
      
    } catch (error) {
      console.log("Error de connexion API",error)
    }
  }
  return (
    <>
      <EmployeeCard employee={employee} />
      <button type='button' onClick={getEmployee}>Contact API</button>
    </>
  )
}

export default App
