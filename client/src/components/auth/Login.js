import React,{ useState,useEffect,useContext } from 'react'
import AuthContext from '../../context/auth/authContext'
import AlertContext from '../../context/alert/alertContext'
export const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { error,clearErrors,isAuthenticated,login } = authContext;
    const { setAlert } = alertContext;

    useEffect(() => {
        if(isAuthenticated){
            props.history.push('/');
        }

        if(error === 'Invalid Credentials'){
            setAlert(error,'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    },[error,isAuthenticated,props.history])

    const [user,setUser] = useState({
        email:'',
        password:'',
    })

    const { email,password} = user;
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(email === '' || password === ''){
            setAlert('Please fill all fields','danger');
        }else{
            login({
                email,
                password
            })
        }
    }
    return (
        <div style={{marginTop:'40px'}}>
            <div className="card mx-auto" style={{width:'500px'}}>
                <div className="card-header" style={{textAlign:'center'}}>
                    Account Login
                </div>
                <div className="card-body">
                <form onSubmit={onSubmit}>
                 <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" className="form-control" value={email} onChange={onChange} />
                  </div>
                  <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={onChange} />
                  </div>
                 <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form> 
                </div>
            </div>
        </div>
       )
}
