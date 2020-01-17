import React from "react";
import { Column } from "./Column";

export const Rows = (props) => {

    const render = () => {
        const rows = []
        for(let i = 0; i < props.rows; i++) {
            rows.push(
                <tr key={i}>
                    <Column row={i} startPosition={props.startPosition} cols={props.cols}/>
                </tr>
            )
        }
        return rows;
    }
    return (
        <>
        <table>
            <tbody>{render()}</tbody>
        </table>
        </>
    )
}