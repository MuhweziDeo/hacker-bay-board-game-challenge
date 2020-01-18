import React from "react";
import { Rows as Table } from "./Row";
import KeyboardEventHandler from 'react-keyboard-event-handler';

export const Board = ({columns, rows, startPostion, handleKeyPress, sprites}) => {
   
    return (
        <div className="board__container">
            <KeyboardEventHandler
                handleKeys={['down', 'up', 'left', 'right']}
                onKeyEvent={handleKeyPress} />
            <Table sprites={sprites} startPosition={startPostion} rows={rows || 2} cols={columns}/>
        </div>
    )
}