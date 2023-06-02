import React, {useState,Fragment} from 'react'
import UserForm from './Compoents/Users/UserForm';
import UserList from './Compoents/Users/UserList';

function App() {
  const [userList, setUsersList]=useState([])
  const addUserHandler=((userName,userAge,userCollege)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:userName,age:userAge,id:Math.random().toString(),college:userCollege}]
    })
  })
  return (
    <Fragment>
      <UserForm onUserForm={addUserHandler}/>
      <UserList users={userList}/>
    </Fragment>
  );
}

export default App;
