/* let data = {
    name: '식당',
    category: 'western',
    address: {
      city: 'Seoul',
      detail: 'Somewhere',
      zipcode: 12345,
    },
    menu: [
      { name: 'rose pasta', price: 2000, category: 'PASTA' },
      { name: 'garlic steak', price: 3000, category: 'STEAK' },
    ],
  }; */

import { type } from 'os';

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipcode?: number;
};

export type Menu = { name: string; price: number; category: string };

export type AddressWithoutZip = Omit<Address, 'zipcode'>;

export type OnlyCategory = Pick<Restaurant, 'category'>;

export type ApiResponse<T> = { data: T[]; totalPage: number; page: number };

export type RestaurantResponse = ApiResponse<Restaurant>;
export type MenuResponse = ApiResponse<Menu>;
