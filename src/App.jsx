import React from "react";
import "./App.scss";
import { useCardStore } from './store/CardContext';
import CardContainer from './CardContainer';
import CardModal from './CardModal';
import { useObserver } from "mobx-react";

function App() {
  const store = useCardStore();

  const handleModalClose = () => {
    store.resetCardToEdit();
  }

  const handleSave = (id, info) => () => {
    store.cardToEdit = { ...store.cardToEdit, ...info };
    if (id === undefined) {
      store.createCard();
    } else {
      store.updateCard(id);
    }
  }

  const handleRemove = (id) => () => {
    if (id === undefined) {
      handleModalClose();
    } else {
      store.removeCard(id);
    }
  }

  return useObserver(() => (
    <div className="container">
      <CardContainer />
      { 
        store.cardToEdit && 
        <CardModal
          { ...store.cardToEdit }
          onClose={ handleModalClose }
          onRemove={ handleRemove }
          onSave={ handleSave }
        /> 
      }
    </div>
  ));
}

export default App;
