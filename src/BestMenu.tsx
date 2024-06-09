import React from "react";
import {Menu} from "./model/Restaurant.ts";

interface OwnProps extends Omit<Menu, 'category'> {
    showBestMenuName(name: string): string,
}

const BestMenu: React.FC<OwnProps> = ({name, price}) => {
    return (
        <div>
            <span>{name} </span>
            <span>${price}</span>
        </div>
    )
}

export default BestMenu