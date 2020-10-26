import React from 'react';
import './index.scss';

const AddCard = (props) => {

  return (
    <div className="add-card" onClick={ props.onClick }>
      <div className="add-card__icon">
        +
      </div>
    </div>
  )
}

export default AddCard;
