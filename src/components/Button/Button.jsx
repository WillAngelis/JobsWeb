import React from 'react';
import './styles.scss';
function Button({ setParams, search }) {
  return (
    <>
      <button
        type="button"
        value={search}
        onClick={(ev) => setParams(ev.target.value)}
      >
        Search
      </button>
    </>
  );
}

export default Button;
