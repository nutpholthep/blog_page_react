import {useEffect,useContext} from 'react'
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

function DeletePost() {
  const {currentUser} = useContext(UserContext);
  const token = currentUser?.id;
const navigate = useNavigate();
useEffect(()=>{
  if(!token){
    navigate('/login');
  }
},[])
  return (
    <div>DeletePost</div>
  )
}

export default DeletePost