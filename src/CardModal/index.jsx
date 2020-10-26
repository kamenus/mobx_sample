import React from 'react';
import { useObserver } from 'mobx-react';
import './index.scss';

const CardModal = (props) => {
  const [info, setInfo] = React.useState({
    first_name: props.first_name || '',
    last_name: props.last_name || '',
    email: props.email || '',
    avatar: props.avatar || '',
  });

  const inputHandler = (type) => (event) => {
    const newInfo = { ...info };
    newInfo[type] = event.target.value;
    setInfo(newInfo);
  }

  return useObserver(() => (
    <div className="modal">
      <div className="modal__body">
        <div className="modal__body__close" onClick={ props.onClose }/>
        <div className="modal__body__preview" style={{ backgroundImage: `url(${info.avatar})` }} />
        <div className="modal__body__info">
          <input className="modal__body__info__input" placeholder="first name" onChange={inputHandler('first_name')} value={info.first_name} />
          <input className="modal__body__info__input" placeholder="last name" onChange={inputHandler('last_name')} value={info.last_name} />
          <input className="modal__body__info__input" placeholder="email" onChange={inputHandler('email')} value={info.email} />
        </div>
        <div className="modal__body__settings">
          <div className="modal__body__settings__action" onClick={ props.onRemove(props.id) }>
            Удалить
          </div>
          <div className="modal__body__settings__action" onClick={ props.onSave(props.id, info) }>
            Сохранить
          </div>
        </div>
      </div>
    </div>
  ))
}

export default CardModal;
