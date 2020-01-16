import React from "react";
import { Column } from "./Column";

export const Rows = (props) => {

    const render = () => {
        const rows = []
        for(let i = 0; i < props.rows; i++) {
            rows.push(
                <tr>
                    <Column cols={props.cols || 2}/>
                </tr>
            )
        }
        return rows;
    }
    return (
        <>
        <table>
            {render()}
        </table>
        </>
    )
}