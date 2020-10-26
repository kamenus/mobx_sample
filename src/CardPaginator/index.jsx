import React from 'react';
import { useObserver } from 'mobx-react';
import './index.scss';

const CardPaginator = (props) => {
  const renderPages = () => {
    const items = [];
    for(let i = 0; i < props.pages; i++) {
      items.push(
        <div 
          className={`paginator__item ${ props.page === i + 1 ? 'paginator__item_active' : '' }`} 
          onClick={ props.onPageChange(i + 1) }
        >
          { i + 1 }
        </div>
      );
    }
    return items;
  }
  return useObserver(() => (
    <div className="paginator">
      { renderPages() }
    </div>
  ))
}

export default CardPaginator;
