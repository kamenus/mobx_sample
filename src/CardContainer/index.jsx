import React from 'react';
import Card from '../Card/index';
import AddCard from '../AddCard/index';
import { useCardStore } from '../store/CardContext';
import './index.scss';
import { useObserver } from 'mobx-react';
import CardPaginator from '../CardPaginator';

const CardContainer = (props) => {
  const store = useCardStore();

  React.useEffect(() => {
    store.fetchCards();
  }, [store]);

  const handleCardClick = (id) => () => {
    store.setCardToEdit(id);
  }

  const handlePageChange = (page) => () => {
    store.setPage(page);
  }

  return useObserver(() => (
    <div className="cards">
      <div className="cards__container">
        {
          store.cards.map(card => (
            <Card
              key={ card.id }
              { ...card }
              onClick={ handleCardClick(card.id) }
            />
          ))
        }
        <AddCard onClick={ handleCardClick() } />
      </div>
      <CardPaginator
        page={ store.currentPage }
        pages={ store.pages }
        onPageChange={ handlePageChange }
      />
    </div>
  ))
}

export default CardContainer;
