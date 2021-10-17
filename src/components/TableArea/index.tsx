import { Item } from '../../interfaces/Item';
import { Container } from './styles';
import { formatDate } from '../../helpers/dateFilter';
import { category } from '../../data/category';

interface Iprops {
    table: Item[];
}

export const TableArea = ({ table }: Iprops) => {
    return (
        <Container>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Preço</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                {table.map((item, key) => (
                    <tr key={key}>
                        <td>{item.title}</td>
                        <td
                            className="colorValue"
                            style={{
                                color: category[item.category].expense
                                    ? 'red'
                                    : 'green',
                            }}
                        >
                            R$ {item.value}
                        </td>
                        <td>{category[item.category].title}</td>
                        <td>{formatDate(item.date)}</td>
                    </tr>
                ))}
            </tbody>
        </Container>
    );
};
