// let data = {
//   name: 'shop-shop',
//   category: 'goods',
//   address: {
//     city: 'seoul',
//     detail: 'mapo',
//     zipCode: 10192109212,
//   },
//   menu: [
//     { name: 'lip', price: 5000, category: 'cosmetics' },
//     { name: 'character cup', price: 10000, category: 'life' },
//     { name: 'phone case', price: 20000, category: 'life' },
//   ],
// };

export type Shop = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

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

export type AddressWithoutZip = Omit<Address, 'zipCode'>;
export type ShopOnlyCategory = Pick<Shop, 'category'>;

export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};

export type ShopResponse = ApiResponse<Shop>;
export type MenuResponse = ApiResponse<Menu>;
