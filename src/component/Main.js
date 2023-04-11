import React, { useEffect, useState } from 'react'
import video from '../assets/video1.mp4'
import Card from './Card';
import PokeInfo from './PokeInfo';
import "./Style.css";
import axios from "axios";
// import song from '../assets/pokesong.mp3';
const Main = () => {
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    // useEffect(()=>{
    //   play();
    // },[])

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        // console.log(res)
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
        
    }
    // const getPokemon=async(res)=>{
    //    res.map(async(item)=>{
    //       const result=await axios.get(item.url)
    //     //   console.log(result.data);
    //       setPokeData(state=>{
    //           state=[...state,result.data]
    //           state.sort((a,b)=>a.id>b.id?1:-1)
    //           return state;
    //       })
    //    }) 
         
    // }
    const getPokemon=async(res)=>{
      	res.map(async(item)=>{
          const result = await axios.get(item.url);
          // console.log(result.data)
          setPokeData((state)=>{
            const arr=[...state,result.data];
            // arr.sort((a,b)=>a.id>b.id?1:-1)
            return arr;
          })
          // console.log(pokeData)
        })
    }
    
    useEffect(()=>{
        pokeFun();
        // play();
    },[url])

    const informationHandler=(p)=>{
      setPokeDex(p)
    }
    // const changeImg=async(res)=>{
    //   res.map(async()=>{
    //     const result1= await axios.get(item.url)
    //     return(
    //       <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${data.id}.svg`} alt="" />
    //     )
    //   })
    // }
    const btn={
      color : "red",
      margin: "0 750px",
      right: "0",
      borderRadius: "50px"
    }
  return (
    <>
      <video src={video} autoPlay loop muted></video>
      
      <div className="container">
        <div className="left-content">
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={informationHandler}
            // {(poke) => setPokeDex(poke)}
          ></Card>
          <div className="btn">
            {prevUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                previous
              </button>
            )}
            {nextUrl && (
              <button
                onClick={() => {
                  console.log(pokeData)
                  setPokeData([]);
                  setUrl(nextUrl);
                  console.log(nextUrl)
                }}
              >
                next
              </button>
            )}
          </div>
        </div>
        <div className="right-content">
          <PokeInfo data={pokeDex} ></PokeInfo>
        </div>
      </div>
    </>
  );
}

export default Main
