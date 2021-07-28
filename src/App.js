import useForm from "./hooks/useForm";
import { signupForm } from "./utils/formConfig";
import classes from "./App.module.css";

function App() {
  const { renderFormInputs, isFormValid } = useForm(signupForm);

  return (
    <form className={classes.signupForm}>
      <h1>Sign Up</h1>
      {renderFormInputs()}
      <button
        type="submit"
        disabled={!isFormValid()}
        className={classes.button}
      >
        Submit
      </button>
    </form>
  );
}

export default App;
