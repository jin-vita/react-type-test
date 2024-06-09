import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Store from "./Store.tsx";
import {Address, Restaurant} from "./model/Restaurant.ts";

const data: Restaurant = {
    name: '나의 식당',
    category: 'western',
    address: {
        city: 'seoul',
        detail: 'somewhere',
        zipCode: 23423423,
    },
    menu: [
        {
            name: 'rose pasta',
            price: 2000,
            category: 'pasta',
        },
        {
            name: 'galic steak',
            price: 3000,
            category: 'steak',
        }
    ]
}

const App: React.FC = () => {
    const [count, setCount] = useState(0)
    const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)
    const changeAddress = (address: Address) => {
        setMyRestaurant({...myRestaurant, address: address})
    }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>React Type Test</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <Store info={myRestaurant} changeAddress={changeAddress} />
        </>
    )
}

export default App
