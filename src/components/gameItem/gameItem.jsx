import { titleCase } from "../../utils";
import React from "react";
import './gameItem.scss';

const GameItem = ({title, type}) => {
    return (
        <div className={`gi ${type}`}>
            {titleCase(title)}
        </div>
    )
};

export default GameItem;