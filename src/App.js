import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUser } from './features/Users';
import { useState } from 'react';

function App() {
  const userList = useSelector(state=>state.users.value)
  const dispatch = useDispatch();
  console.log(userList)
  const [userDetail, setuserDetail] = useState({id: '', name: '', username: ''})
  const [update, setUpdate] = useState('')
  return (
    <div className="App">
      {" "}
      <div className="addUser">
        <input type="text" placeholder='Name ...' value={userDetail.name} onChange={(e)=>setuserDetail({...userDetail, name: e.target.value})}/>
        <input type="text" placeholder='Username ...' value={userDetail.username} onChange={(e)=>setuserDetail({...userDetail, username: e.target.value})}/>
        <button onClick={()=>{dispatch(addUser({id: userList.length+1, name: userDetail.name, username: userDetail.username}))}}>Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map((user, idx)=>{
          return <div key={idx}>
            <h1>{user.name}</h1>
            <h3>{user.username}</h3>
            <div className="update">
              <input id={'userId'+user.id} type="text" placeholder='update username' onChange={e=>setUpdate(e.target.value)}/>
              <div>
              <button onClick={()=>{
                dispatch(updateUser({id:user.id, username: update}))
              }}>Save Changes</button><br />
              <button onClick={()=>{
                dispatch(deleteUser({id:user.id}))
              }}>Delete User</button>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
