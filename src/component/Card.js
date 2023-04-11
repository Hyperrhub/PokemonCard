import React from 'react'

const Card = ({pokemon,loading,infoPokemon}) => {
    // console.log(props.pokemon);
  return (
    <>
      {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    // console.log(item);
                    return (
                        <>
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)} 
                            >
                                <h3>{item.id}</h3>
                                <img src={item.sprites.front_default} alt="" />
                                <h3>{item.name}</h3>
                            </div>
                        </>
                    )
                })
        }

    </>
  );
}

export default Card
