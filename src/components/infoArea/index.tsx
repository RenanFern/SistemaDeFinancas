import { Container, ContainerAreaDate, AreaDate } from './styles';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { FormatCurrentMonth } from '../../helpers/dateFilter';
import { FormModal } from '../FormModal';
import { Item } from '../../interfaces/Item';

interface Iprops {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    addItem: (item: Item) => void;
}

export const InfoArea = ({ currentMonth, onMonthChange, addItem }: Iprops) => {
    const handlePrev = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(
            `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`
        );
    };
    const handleNext = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(
            `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`
        );
    };

    return (
        <Container>
            <ContainerAreaDate>
                <span className="arrowDate" onClick={handlePrev}>
                    <AiOutlineArrowLeft />
                </span>

                <AreaDate>{FormatCurrentMonth(currentMonth)}</AreaDate>
                <span className="arrowDate" onClick={handleNext}>
                    <AiOutlineArrowRight />
                </span>
            </ContainerAreaDate>

            <FormModal addItem={addItem} />
        </Container>
    );
};
