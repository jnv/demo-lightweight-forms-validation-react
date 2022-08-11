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
          <Input
            type="email"
            name="email"
            minLength="4"
            required
            title="Use an e-mail with fully qualified domain."
            pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
          />
        </label>
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
