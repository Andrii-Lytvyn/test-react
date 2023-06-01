import { ChangeEvent, FC, FormEvent, useState } from 'react'
import './App.css'
import css from "./App.module.css";
interface Field {
  name: string;
  password: string;
}
const initFormField: Field = {
  name: "",
  password: ""
}

const App: FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [fields, setFields] = useState(initFormField);
  const getInputData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "name") {
      setName(value);
    } else if (name === "password") {
      setPassword(value)
    }
    setFields((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("fields",fields);
    resetForm();
  };

  const resetForm = () =>{
    setName("");
    setPassword("");
  }

  return (
    <>
      <div className={css.div_wrapper}>
        <form onSubmit={submitForm}>
          <label> Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={getInputData}
            autoComplete='off' />
          <input type="password"
            name="password"
            value={password}
            onChange={getInputData}
            autoComplete='off'
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  )
}

export default App
