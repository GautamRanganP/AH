import { useState } from "react";

export default function Login(){
    const [ data , setData] = useState()

    return (
        <div className="ekart-login">
            <h3 style={{textAlign:'center'}}>Login</h3>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="text" name="email"></input>
            </div >
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password"></input>
            </div>
            <div className="login-button">
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    )
}