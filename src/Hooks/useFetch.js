//custom hook creation 

import { useEffect, useState } from "react"




const useFetch = (url)=>{
    const [data , setData] = useState([])
        //return state 
    useEffect(()=>{
        fetch(url).then((response)=>{
            response.json().then((result)=>{
                setData(result)

            })

        })
    },[])
    return data
}

export default useFetch