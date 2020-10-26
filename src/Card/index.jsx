import React from 'react';
import './index.scss';

const Card = (props) => {
  const { first_name, last_name, avatar } = props;
  const title = `${first_name} ${last_name}`;
  return (
    <div className="card" style={{ backgroundImage: avatar ? `url(${avatar})` : '' }} onClick={ props.onClick }>
      <div className="card__title">
        { title }
      </div>
    </div>
  )
}

export default Card;
