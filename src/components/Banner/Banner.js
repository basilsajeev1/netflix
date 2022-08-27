
import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants'
import './Banner.css'
import  axios from '../../axios'



function Banner() {
  let x = Math.floor((Math.random() * 19));
  useEffect(()=>{
    
    axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
      //console.log(response.data)
      setTrending(response.data.results[x])
    })
  },[])
  const [trending, setTrending] = useState()
  return (
    <div className='banner' style={{backgroundImage: `url(${trending ?imageUrl+trending.backdrop_path:""})`}}>
      <div className='bannerContent'>
        <h2>{trending ? trending.title : ""}</h2>
        <div className="bannerButtons">
        <button className='bannerButton'>Play</button>
        <button className='bannerButton'>My List</button>
        </div>
        <h5 className='bannerDescription'>{trending ? trending.overview : ""}</h5>
      </div>
      
    </div>
  )
}

export default Banner
