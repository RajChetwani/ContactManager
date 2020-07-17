import React,{ useState,useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'
import { useContext } from 'react'
import { Alerts } from '../layout/Alerts';

export const Register = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { register,error,clearErrors,isAuthenticated } = authContext;
    const { setAlert } = alertContext;

    useEffect(() => {
        if(isAuthenticated){
            props.history.push('/');
        }

        if(error === 'User already exists'){
            setAlert(error,'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    },[error,isAuthenticated,props.history])

    const [user,setUser] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const { name,email,password2,password} = user;
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(name==='' || email==='' || password===''){
            setAlert('Please enter all fields','danger');
        }else if(password !== password2){
            setAlert('Passwords do not match','danger');
        }else{
            register({
                name,
                email,
                password
            });
        }
    }
    return (
        <div style={{marginTop:'40px'}}>
            <Alerts />
            <div className="card mx-auto" style={{width:'500px'}}>
                <div className="card-header" style={{textAlign:'center'}}>
                    Account Register
                </div>
                <div className="card-body">
                <form onSubmit={onSubmit}>
                 <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" value={name} onChange={onChange} />
                 </div>
                 <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" className="form-control" value={email} onChange={onChange} />
                  </div>
                  <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={onChange} minLength="6" />
                  </div>
                  <div className="form-group">
                        <label htmlFor="password2">Confirm Password:</label>
                        <input type="password" className="form-control" name="password2" value={password2} onChange={onChange} minLength="6" />
                  </div>
                 <button type="submit" className="btn btn-primary btn-block">Register</button>
                </form> 
                </div>
            </div>
        </div>
       )
}
