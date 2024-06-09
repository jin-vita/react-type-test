// let data = {
//     name: '나의 식당',
//     category: 'western',
//     address: {
//         city: 'seoul',
//         detail: 'somewhere',
//         zipCode: 23423423,
//     },
//     menu: [
//         {
//             name: 'rose pasta',
//             price: 2000,
//             category: 'pasta',
//         },
//         {
//             name: 'galic steak',
//             price: 3000,
//             category: 'steak',
//         }
//     ]
// }

export type Restaurant = {
    name: string;
    category: string;
    address: Address;
    menu: Menu[];
}

export type Address = {
    city: string;
    detail: string;
    zipCode: number;
};

export type Menu = {
    name: string;
    price: number;
    category: string;
};