import { Container } from './styles';
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';

interface Iprops {
    entry: number;
    exits: number;
    balance: number;
}

export const AbstractTable = ({ entry, exits, balance }: Iprops) => {
    return (
        <Container>
            <div className="abstract-table ">
                <div>
                    <span>Entradas</span>
                    <span className="iconTable entry">
                        {<BsArrowUpCircle />}
                    </span>
                </div>
                <strong>R$ {entry}</strong>
            </div>
            <div className="abstract-table ">
                <div>
                    <span>Saídas</span>
                    <span className="iconTable exits">
                        {<BsArrowDownCircle />}
                    </span>
                </div>
                <strong>R$ {exits}</strong>
            </div>
            <div className="abstract-table total">
                <div>
                    <span>Total</span>
                    <span className="iconTable">
                        {<MdOutlineAttachMoney />}
                    </span>
                </div>
                <strong>R$ {balance}</strong>
            </div>
        </Container>
    );
};
