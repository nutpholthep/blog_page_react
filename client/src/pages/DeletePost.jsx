import {useEffect,useContext} from 'react'
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
    <Link className='btn sm danger'>Delete</Link>
  )
}

export default DeletePost