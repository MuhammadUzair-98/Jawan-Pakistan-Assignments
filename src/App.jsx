import React from "react"
import Button from './components/Button/Button'
import Student from "./components/Student/Student"
import { data } from './data'

function App() {

  return (
    <>
      <Button name="Back"/>
      <Button name="Cancel"/>
      <Button name="Next"/>
      {
              data.map((e,i) => {
                return <Student key={e.id} id={e.id} name={e.name} age={e.age} profession={e.profession} imgSrc={e.imgSrc}/>
              })

      }
    </>
  )
}

export default App
