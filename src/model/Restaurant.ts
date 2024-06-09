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
}

export type Menu = {
    name: string;
    price: number;
    category: string;
}

export type MenuWithoutPrice = Omit<Menu, 'price'>
export type MenuOnlyCategory = Pick<Menu, 'category'>

// api common part
export type ApiResponse<T> = {
    data: T[],
    totalPage: number,
    page: number,
}

export type RestaurantResponse = ApiResponse<Restaurant>
export type AddressResponse = ApiResponse<Address>
export type MenuResponse = ApiResponse<Menu>
