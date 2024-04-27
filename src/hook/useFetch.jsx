
import { useEffect, useState } from "react"


const useFetch = (URL) => {
  const [data,setData] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:3000${URL}`)
       .then(resp => resp.json())
       .then(result=> setData(result))
       
    },[])
    
    return data;
}


export default  useFetch