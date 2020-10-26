import React from 'react';
import { useLocalStore } from 'mobx-react';
import CardStore from './CardStore';

const StoreContext = React.createContext(null);

const CardProvider = ({ children }) => {
  const store = useLocalStore(CardStore);

  return (
    <StoreContext.Provider value={ store }>
      { children }
    </StoreContext.Provider>
  )
}

export const useCardStore = () => React.useContext(StoreContext);

export default CardProvider;
