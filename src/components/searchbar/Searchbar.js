import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

export default function Searchbar ({ onGetRequest }) {
  const [input, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (input.trim() === '') {
      return toast.error('search cannot be an empty string');
    }
    onGetRequest(input.trim().toLowerCase());
    setInput('');
  };

    return (
      <header className={s.header}>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={input}
            onChange={event => setInput(event.currentTarget.value)}
          ></input>
          
        </form>
      </header>
    );
  }


Searchbar.propTypes = {
  onGetRequest: PropTypes.func.isRequired,
};