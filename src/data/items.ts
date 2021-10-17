import { Item } from '../interfaces/Item';

export const items: Item[] = [
    {
        date: new Date(2021, 9, 5),
        category: 'food',
        title: 'Hamburguer',
        value: 30,
    },
    {
        date: new Date(2021, 9, 10),
        category: 'rent',
        title: 'Aluguel',
        value: 1500,
    },
    {
        date: new Date(2021, 9, 12),
        category: 'sale',
        title: 'Desenvolvimento de Site',
        value: 2000,
    },
];
