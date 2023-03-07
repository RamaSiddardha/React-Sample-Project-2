import React from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = React.useState('');

  const [isValid,inValid] =React.useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) inValid(true)
    setEnteredValue(event.target.value);

  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length == 0) return inValid(false)
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" style={{borderColor : !isValid ? 'red' : 'Black'}} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" >Add Goal</Button>
    </form>
  );
};

export default CourseInput;
