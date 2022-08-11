import {onSubmit} from './utils.js';

export default function Form() {
  return (
    <form onSubmit={onSubmit}>
      <p>
        <label>
          Your e-mail
          <input type="email" name="email" required />
        </label>
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
