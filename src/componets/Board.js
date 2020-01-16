import React from "react";
import { Rows as Table } from "./Row";

export const Board = ({columns, rows}) => {
   
    return (
        <div className="board__container">
            <Table rows={rows || 2} cols={columns}/>
        </div>
    )
}