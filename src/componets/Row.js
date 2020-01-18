import React from "react";
import { Column } from "./Column";

export const Rows = ({sprites, rows, playerPosition, columns}) => {

    const render = () => {
        const renderedRows = []
        for(let i = 0; i < rows; i++) {
            renderedRows.push(
                <tr key={i}>
                    <Column sprites={sprites} 
                        rowAt={i} playerPosition={playerPosition} columns={columns}/>
                </tr>
            )
        }
        return renderedRows;
    }
    return (
        <>
        <table>
            <tbody>{render()}</tbody>
        </table>
        </>
    )
}