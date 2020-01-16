import React from "react";

export const Column = (props) => {
    const render = () => {
        const cols = [];
        for(let i = 0; i < props.cols; i++) {
        cols.push(<td key={i}></td>);
        }
        return cols;
    }
    return (
        <>
            {render()}
        </>
    )
}