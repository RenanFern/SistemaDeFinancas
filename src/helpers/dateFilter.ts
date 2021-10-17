import { Item } from '../interfaces/Item';

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterTableMonth = (table: Item[], date: string): Item[] => {
    let newTable: Item[] = [];
    let [year, month] = date.split('-');

    for (let i in table) {
        if (
            table[i].date.getFullYear() === parseInt(year) &&
            table[i].date.getMonth() + 1 === parseInt(month)
        ) {
            newTable.push(table[i]);
        }
    }

    return newTable;
};

export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${AddZeroDate(day)}/${AddZeroDate(month)}/${year}`;
};
const AddZeroDate = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const infoSoma = () => {};

export const FormatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');
    let months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];

    return `${months[parseInt(month) - 1]} de ${year}`;
};
