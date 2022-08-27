import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './RowPosters.css'
import { API_KEY ,imageUrl} from '../../constants/constants'

function RowPosters(props) {
  const [originals, setOriginals]=useState([])
  useEffect(()=>{
    axios.get(props.url).then(response=>{
       //console.log(response.data.results)
       setOriginals(response.data.results)
    })
  },[])
  return (
    <div className='rowPost'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {originals.map((original,index)=>{
          return(
          <img className='poster' src={`${imageUrl+original.backdrop_path}`} alt="poster" />
          )
        })}
        
        
      </div>
    </div>
  )
}

export default RowPosters
