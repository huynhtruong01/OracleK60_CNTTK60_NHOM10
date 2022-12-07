import React,{useRef} from 'react'
import { loginStart, loginFailure, loginSuccess } from '../../feature/slice';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'
function Login() {
  const nameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch()
  // const userSelect = useSelector((state)=>state.context)

  const handleSubmit= async (e)=>{
      e.preventDefault()
      dispatch(loginStart());
      try{
        const res = await axios.post("/auth/login", {
          username: nameRef.current.value,
          password: passwordRef.current.value,
        });
        
        console.log(res.data)
        dispatch(loginSuccess(res.data))
  
        localStorage.setItem("user",JSON.stringify(res.data))
        localStorage.setItem("userpart",JSON.stringify(res.data))
        // res.data && window.location.replace("/");

      }catch(err){
        dispatch(loginFailure())
      }
  }
  return (
    <div className='wrapper'>
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='login-form' action="">
        <div className="form-control">
          <label>Username</label>
          <input ref={nameRef} type="text" placeholder='Your name...' />
        </div>
       
        <div className="form-control">
          <label>Password</label>
          <input ref={passwordRef} type="password" placeholder='Your password...' />
        </div>
        <Button type='submit'>Login</Button>
        <Link to='/register'>Register</Link>
      </form>
    </div>
  </div>
  )
}


export default Login