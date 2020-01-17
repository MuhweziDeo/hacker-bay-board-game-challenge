import React from "react";
import mario from "../assets/mario.jpg";

export const Column = (props) => {
    const render = () => {
        const cols = [];
        for(let i = 0; i < props.cols; i++) {
            cols.push(
                <td key={i}>
                { props.row === props.startPosition[0] && 
                    props.startPosition[1] === i 
                    &&  <img width="30" src={mario}/>
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