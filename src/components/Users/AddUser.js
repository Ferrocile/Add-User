import React, {useState} from "react";
import Card from "../UI/Card";
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = () => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        return;
    }
    if(+enteredAge < 1){
        return;
    }
    console.log(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="age" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
