import React from "react";
import {Address, Restaurant} from "./model/Restaurant.ts";

interface OwnProps {
    info: Restaurant,

    changeAddress(address: Address): void,
}

const Store: React.FC<OwnProps> = ({info}) => {
    return (
        <>
            <h3>식당이름</h3>
            <p>{info.name}</p>
            <br />
            <h3>주소</h3>
            <span>{info.address.city}</span>
            <span>, </span>
            <span>{info.address.detail}</span>
            <span>, </span>
            <span>{info.address.zipCode}</span>
            <br />
            <br />
            <h3>메뉴</h3>
            <div>
                <span>{info.menu[0].name} </span>
                <span>${info.menu[0].price}</span>
            </div>
            <div>
                <span>{info.menu[1].name} </span>
                <span>${info.menu[1].price}</span>
            </div>

        </>
    )
}

export default Store