import React, {useState, useRef} from 'react'
import Card from "../UI/Card"
import Button from "../UI/Button"
// import Wrapper from "../Helpers/Wrapper"
import ErrorModal from '../UI/ErrorModal';
import classes from "./UserForm.module.css"


function UserForm(props) {
    const nameInputRef=useRef();
    const ageInputRef=useRef();
    const collegeInputRef=useRef();
    // const [enteredUserName,setenteredUserName]=useState('');
    // const [enteredAge,setenteredAge]=useState('');
    const [error, setError]=useState()

    // const userNameChangeHandler=(event)=>{
    //     setenteredUserName(event.target.value)
    // }

    // const ageChangeHandler =(event)=>{
    //     setenteredAge(event.target.value)
    // }

    const addSubmitHandler=(event)=>{
        event.preventDefault();
        
        const enteredName=nameInputRef.current.value;
        const enteredUserAge=ageInputRef.current.value;
        const enteredUserCollege=collegeInputRef.current.value;
        if(enteredName.trim().length===0 ||enteredUserAge.trim().length===0 || enteredUserCollege.trim().length===0) {
          setError({
            title:"Invalid input",
            message:"Please enter a valid name ,age and college name (non-empty values)."
          })
         return; 
        }
        if(+enteredUserAge<1){
          setError({
            title:"Invalid age",
            message:"Please enter a valid age (>0)."
          })
         return;
        }

        props.onUserForm(enteredName,enteredUserAge,enteredUserCollege);
        nameInputRef.current.value="";
        ageInputRef.current.value="";
        collegeInputRef.current.value="";


        // setenteredUserName("");
        // setenteredAge("");
    }
    const errorHandler =()=>{
      setError(null)
    }
  return (
    <React.Fragment>
    { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addSubmitHandler}> 
      <label htmlFor='username'>UserName</label>
        <input 
        type='text' 
        id="username"
        // value={enteredUserName}
        // onChange={userNameChangeHandler}
        ref={nameInputRef}
        />
        <label htmlFor='collegeName'>College Name</label>
        <input 
        type='text' 
        id="collegeName"
        // value={enteredUserName}
        // onChange={userNameChangeHandler}
        ref={collegeInputRef}
        />
        <label htmlFor='age'>Age(Years)</label>
        <input
         type='number'
          id="age"
          // value={enteredAge}
          // onChange={ageChangeHandler}
          ref={ageInputRef}/>
          
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
    </React.Fragment>
  )
}

export default UserForm
