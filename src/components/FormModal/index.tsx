import { useState } from 'react';
import { Container, Content } from './styles';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import { Item } from '../../interfaces/Item';

interface Iprops {
    addItem: (item: Item) => void;
}

export const FormModal = ({ addItem }: Iprops) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [inputTitle, setInputTitle] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputCategory, setInputCategory] = useState('');
    const [inputValue, setInputValue] = useState(0);

    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }

    const handleAddEvent = () => {
        addItem({
            title: inputTitle,
            date: new Date(inputDate),
            category: inputCategory,
            value: inputValue,
        });
        clearFields();
        handleCloseModal();
    };

    const clearFields = () => {
        setInputTitle('');
        setInputDate('');
        setInputCategory('');
        setInputValue(0);
    };

    return (
        <Container>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                className="react-modal"
                overlayClassName="overlayModal"
            >
                <button className="close" onClick={handleCloseModal}>
                    <IoMdClose />
                </button>
                <Content>
                    <h2>Cadastrar Transação</h2>

                    <div>
                        <input
                            type="text"
                            placeholder="Título"
                            name="titulo"
                            value={inputTitle}
                            onChange={(e) => setInputTitle(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            className="date-select"
                            type="date"
                            name="date"
                            placeholder="Data: &nbsp; "
                            value={inputDate}
                            onChange={(e) => setInputDate(e.target.value)}
                        />
                    </div>

                    <div>
                        <select
                            name="category"
                            value={inputCategory}
                            onChange={(e) => setInputCategory(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Categoria
                            </option>
                            <option value="food">Alimentação</option>
                            <option value="rent">Aluguel</option>
                            <option value="sale">Venda</option>
                        </select>
                    </div>

                    <div>
                        <input
                            type="number"
                            placeholder="Valor"
                            name="valor"
                            value={inputValue}
                            onChange={(e) =>
                                setInputValue(parseFloat(e.target.value))
                            }
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="registration"
                            onClick={handleAddEvent}
                            value="submit"
                        >
                            Cadastrar
                        </button>
                    </div>
                </Content>
            </Modal>
            <div onClick={handleOpenModal}>
                <button>Nova Transação</button>
            </div>
        </Container>
    );
};
