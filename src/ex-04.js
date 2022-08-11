import {useState} from 'react';
import {onSubmit} from './utils.js';
import './form-style.css';

function Input(props) {
  const [validationMessage, setValidationMessage] = useState();
  const validationHandler = (e) => {
    setValidationMessage(e.target.validationMessage);
    e.preventDefault();
  };
  return (
    <>
      <input
        onInvalid={validationHandler}
        onChange={validationHandler}
        {...props}
      />
      <span className="validation-message">{validationMessage}</span>
    </>
  );
}

export default function Form() {
  return (
    <form onSubmit={onSubmit}>
      <p>
        <label>
          Your e-mail
          <Input type="email" name="email" required />
        </label>
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
