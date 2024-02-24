import  { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom';

function Logout() {
  const {setCurrentUser} = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(()=>{
    setCurrentUser(null);
    navigate("/login");
  })
  return (
    <></>
  )
}

export default Logout