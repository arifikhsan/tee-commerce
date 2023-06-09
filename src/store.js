import { create } from 'zustand';
import { sortBy, intersection } from 'lodash';

// dari api
// const items = [
//   {
//     nama: 'Kaus Satu',
//     harga: 78000,
//     kategori: [
//       {
//         name: 'katun',
//       },
//       {
//         name: 'kaus',
//       },
//       {
//         name: 'lengan pendek',
//       },
//     ],
//     stok: 20,
//     warna: 'merah',
//     created_date: '2023-05-03',
//     id: '1',
//   },
//   {
//     nama: 'Kemeja Satu',
//     harga: 160000,
//     kategori: [
//       {
//         name: 'katun',
//       },
//       {
//         name: 'kemeja',
//       },
//       {
//         name: 'lengan panjang',
//       },
//     ],
//     stok: 30,
//     warna: 'hitam',
//     created_date: '2023-05-11',
//     id: '2',
//   },
//   {
//     nama: 'Kemeja Dua',
//     harga: 190000,
//     kategori: [
//       {
//         name: 'chambray',
//       },
//       {
//         name: 'kemeja',
//       },
//       {
//         name: 'lengan panjang',
//       },
//     ],
//     stok: 11,
//     warna: 'biru',
//     created_date: '2023-05-08',
//     id: '3',
//   },
//   {
//     nama: 'Kaus Dua',
//     harga: 50000,
//     kategori: [
//       {
//         name: 'denim',
//       },
//       {
//         name: 'kaus',
//       },
//       {
//         name: 'lengan pendek',
//       },
//     ],
//     stok: 45,
//     warna: 'kuning',
//     created_date: '2023-05-13',
//     id: '4',
//   },
//   {
//     nama: 'Kaus Tiga',
//     harga: 52000,
//     kategori: [
//       {
//         name: 'baby canvas',
//       },
//       {
//         name: 'kaus',
//       },
//       {
//         name: 'Lengan Pendek',
//       },
//     ],
//     stok: 13,
//     warna: 'cream',
//     created_date: '2023-05-14',
//     id: '5',
//   },
//   {
//     nama: 'Kaus Empat',
//     harga: 56000,
//     kategori: [
//       {
//         name: 'drill',
//       },
//       {
//         name: 'kaus',
//       },
//       {
//         name: 'lengan panjang',
//       },
//     ],
//     stok: 53,
//     warna: 'abu abu',
//     created_date: '2023-05-14',
//     id: '6',
//   },
//   {
//     nama: 'Celana Satu',
//     harga: 200000,
//     kategori: [
//       {
//         name: 'denim',
//       },
//       {
//         name: 'celana',
//       },
//       {
//         name: 'celana panjang',
//       },
//     ],
//     stok: 49,
//     warna: 'Hitam',
//     created_date: '2023-05-20',
//     id: '7',
//   },
//   {
//     nama: 'Celana Dua',
//     harga: 175000,
//     kategori: [
//       {
//         name: 'kanvas',
//       },
//       {
//         name: 'celana',
//       },
//       {
//         name: 'celana pendek',
//       },
//     ],
//     stok: 57,
//     warna: 'biru',
//     created_date: '2023-05-21',
//     id: '8',
//   },
//   {
//     nama: 'Celana Tiga',
//     harga: 210000,
//     kategori: [
//       {
//         name: 'lotto',
//       },
//       {
//         name: 'celana',
//       },
//       {
//         name: 'celana panjang',
//       },
//     ],
//     stok: 34,
//     warna: 'cream',
//     created_date: '2023-05-21',
//     id: '9',
//   },
// ];

const items = [
  {
    nama: 'Kaus Satu',
    harga: 78000,
    kategori: [
      {
        name: 'katun',
      },
      {
        name: 'kaus',
      },
      {
        name: 'lengan pendek',
      },
    ],
    stok: 20,
    warna: 'merah',
    created_date: '2023-05-03',
    id: '1',
  },
  {
    nama: 'Kemeja Satu',
    harga: 160000,
    kategori: [
      {
        name: 'katun',
      },
      {
        name: 'kemeja',
      },
      {
        name: 'lengan panjang',
      },
    ],
    stok: 30,
    warna: 'hitam',
    created_date: '2023-05-11',
    id: '2',
  },
  {
    nama: 'Kemeja Dua',
    harga: 190000,
    kategori: [
      {
        name: 'chambray',
      },
      {
        name: 'kemeja',
      },
      {
        name: 'lengan panjang',
      },
    ],
    stok: 11,
    warna: 'biru',
    created_date: '2023-05-08',
    id: '3',
  },
  {
    nama: 'Kaus Dua',
    harga: 50000,
    kategori: [
      {
        name: 'denim',
      },
      {
        name: 'kaus',
      },
      {
        name: 'lengan pendek',
      },
    ],
    stok: 45,
    warna: 'kuning',
    created_date: '2023-05-13',
    id: '4',
  },
  {
    nama: 'Kaus Tiga',
    harga: 52000,
    kategori: [
      {
        name: 'baby canvas',
      },
      {
        name: 'kaus',
      },
      {
        name: 'Lengan Pendek',
      },
    ],
    stok: 13,
    warna: 'cream',
    created_date: '2023-05-14',
    id: '5',
  },
  {
    nama: 'Kaus Empat',
    harga: 56000,
    kategori: [
      {
        name: 'drill',
      },
      {
        name: 'kaus',
      },
      {
        name: 'lengan panjang',
      },
    ],
    stok: 53,
    warna: 'abu abu',
    created_date: '2023-05-14',
    id: '6',
  },
  {
    nama: 'Celana Satu',
    harga: 200000,
    kategori: [
      {
        name: 'denim',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 49,
    warna: 'Hitam',
    created_date: '2023-05-20',
    id: '7',
  },
  {
    nama: 'Celana Dua',
    harga: 175000,
    kategori: [
      {
        name: 'kanvas',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana pendek',
      },
    ],
    stok: 57,
    warna: 'biru',
    created_date: '2023-05-21',
    id: '8',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '9',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '10',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '11',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '12',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '13',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '14',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '15',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '16',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '17',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '18',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '19',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '20',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '21',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '22',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '23',
  },
  {
    nama: 'Celana Tiga',
    harga: 210000,
    kategori: [
      {
        name: 'lotto',
      },
      {
        name: 'celana',
      },
      {
        name: 'celana panjang',
      },
    ],
    stok: 34,
    warna: 'cream',
    created_date: '2023-05-21',
    id: '24',
  },
];


const useItemStore = create((set) => ({
  items,
  resetItems: () => {
    return set((state) => ({ items }));
  },
  sortByCreatedDateAsc: () => {
    return set((state) => ({ items: sortBy(state.items, 'created_date') }));
  },
  sortByCreatedDateDesc: () => {
    return set((state) => ({
      items: sortBy(state.items, 'created_date').reverse(),
    }));
  },
  filterBy: ({ categories, colors }) => {
    return set((state) => ({
      items: state.items.filter((item) => {
        const itemCategories = item.kategori.map((k) => k.name);
        const intersectionArray = intersection(itemCategories, categories);
        const isColorMatch = colors.includes(item.warna);

        return intersectionArray.length > 0 || isColorMatch;
      }),
    }));
  },
  removeAllBears: () => set({ items: 0 }),
}));

const usePaginationStore = create((set) => ({
  page: 1,
  item: 9,
  setPage: (newPage) => {
    return set((state) => ({ page: newPage }));
  },
  resetPagination: () => {
    return set((state) => ({
      page: 1,
      item: 9,
    }))
  }
}));

export { useItemStore, usePaginationStore };
