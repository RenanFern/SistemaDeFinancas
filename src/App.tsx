import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { items } from './data/items';
import { GlobalStyle } from './styles/global';
import { getCurrentMonth, filterTableMonth } from './helpers/dateFilter';
import { Item } from './interfaces/Item';
import { TableArea } from './components/TableArea';
import { AbstractTable } from './components/AbstractTable';
import { InfoArea } from './components/infoArea';
import { category } from './data/category';

const App = () => {
    const [table, setTable] = useState(items);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [filterList, setFilterList] = useState<Item[]>([]);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    useEffect(() => {
        setFilterList(filterTableMonth(table, currentMonth));
    }, [table, currentMonth]);

    useEffect(() => {
        let incomeCount = 0;
        let expense = 0;

        for (let i in filterList) {
            if (category[filterList[i].category].expense) {
                expense += filterList[i].value;
            } else {
                incomeCount += filterList[i].value;
            }
        }

        setIncome(incomeCount);
        setExpense(expense);
    }, [filterList]);

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth);
    };

    const handleAddItem = (item: Item) => {
        let newList = [...table];
        newList.push(item);
        setTable(newList);
    };

    return (
        <>
            <Header />
            <AbstractTable
                entry={income}
                exits={expense}
                balance={income - expense}
            />
            <InfoArea
                currentMonth={currentMonth}
                onMonthChange={handleMonthChange}
                addItem={handleAddItem}
            />
            <TableArea table={filterList} />
            <GlobalStyle />
        </>
    );
};

export default App;
