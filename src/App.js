import React, {  useState, useEffect } from 'react';



const url = 'https://jsonplaceholder.typicode.com/comments'

function App() {
  const [names, setNames] = useState([])

  const fetchTours = async () => {

    try {
      const response = await fetch(url)
      const names = await response.json()
      setNames(names)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
const nameList = names.map((name) =>
<div className='center'>

  <li>{name.name}</li>
  <li>{name.email}</li>
</div>

)


  return(
    <ul>{nameList}</ul>
  )

}

export default App;
