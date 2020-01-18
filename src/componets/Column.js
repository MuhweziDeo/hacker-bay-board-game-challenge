import React from "react";
import mario from "../assets/mario.jpg";
import sprite from "../assets/food.jpeg";

export const Column = ({rowAt, playerPosition, sprites, columns}) => {
    const render = () => {
        const cols = [];
        for(let i = 0; i < columns; i++) {
            cols.push(
                <td key={i}>
                    { rowAt === playerPosition[0] && playerPosition[1] === i 
                        ?  <img width="20" src={mario} alt="mario-img" /> : null}
                    {
                        sprites[JSON.stringify([rowAt, i])] ? 
                        <img width={20} src={sprite} key={i} alt="sprite-img"/> : null
                    }    
                </td>);
        }
        return cols;
    }
    return (
        <>
            {render()}
        </>
    )
}