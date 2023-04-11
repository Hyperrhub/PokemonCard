import React, { useState } from 'react'
import "./Style.css";

const PokeInfo = ({data}) => {
    // console.log(data);
    function hover(img){
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${data.id}.png`} />
    }
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h1>{data.name}</h1>
        
            
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} onMouseOver={hover}
            />

          
          <div className="abilities">
            {data.abilities.map((poke) => {
              return (
                <div className="group">
                  <h2>{poke.ability.name}</h2>
                </div>
              );
            })}
          </div>
          <div className="base-stat">
           {
            data.stats.map(poke=>{
                return(
                    <>
                    <h3>
                        {poke.stat.name} : {poke.base_stat}
                    </h3>
                    </>
                )
            })
           }
          </div>
        </>
      )}
    </>
  );
}

export default PokeInfo
