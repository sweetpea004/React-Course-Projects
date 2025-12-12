import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  // const [enteredValues, setEnteredValues] = useState({
  //   email: '',
  //   password: '',
  // });

  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false
  // });

  const {
    value: emailValue, 
    handleInputChange: handleEmailChange, 
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput('', (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    value: passwordValue, 
    handleInputChange: handlePasswordChange, 
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', (value) => {
    return !hasMinLength(value, 8) && !isNotEmpty(value)
  });
  
  function handleSubmit(event) {
    event.preventDefault();

    
  }

  // function handleInputChange(identifier, value) {
  //   setEnteredValues(prevValues => ({
  //     ...prevValues,
  //     [identifier]: value
  //   }))

  //   setDidEdit(prevValue => ({
  //     ...prevValue,
  //     [identifier]: false
  //   }))
  // }

  // function handleInputBlur(identifier) {
  //   setDidEdit(prevValue => ({
  //     ...prevValue,
  //     [identifier]: true
  //   }))
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label="Email" 
          id="email" 
          type="email" 
          name="email" 
          onBlur={handleEmailBlur} 
          onChange={handleEmailChange} 
          value={emailValue} 
          error={emailHasError && 'Please enter valid email!'}
        />

        <Input 
          label="Password" 
          id="password" 
          type="password" 
          name="password" 
          onBlur={handlePasswordBlur} 
          onChange={handlePasswordChange} 
          value={passwordValue} 
          error={passwordHasError && 'Please enter valid password!'}
        />
        
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
