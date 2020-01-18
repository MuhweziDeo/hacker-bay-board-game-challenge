import React from "react";
import mario from "../assets/mario.jpg";
import sprite from "../assets/food.jpeg";

export const Column = (props) => {
    const render = () => {
        const cols = [];
        for(let i = 0; i < props.cols; i++) {
            cols.push(
                <td key={i}>
                    { props.rowAt === props.startPosition[0] && props.startPosition[1] === i 
                        ?  <img width="30" src={mario} /> : null}
                    {
                        props.sprites[JSON.stringify([props.rowAt, i])] ? 
                        <img width={30} src={sprite} key={i} alt=""/> : null
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