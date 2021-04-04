import React from "react";

function Signin(props) {
    const {onSignin, error} = props;


    return (
        <div>
            <h3>Please sign in</h3>
            <form onSubmit={onSignin} className="form">
                <div className="form-group">
                    <label htmlFor="InputEmail">Email address</label>
                    <input type="email" className="form-control" id="InputEmail" name="email" placeholder="unique email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else!</small>
                </div>
                <div className="form-group">
                    <label htmlFor="InputPassword">Password</label>
                    <input name="password" type="password" className="form-control" id="InputPassword" placeholder="password"/>
                    <small id="passworkHelp" className="form-text text-muted">Please use a capitals, numbers and special caracters</small>
                </div>
                {  
                                  
                error && <p>{error.error}</p>        
                }
                <button type="submit" className="btn btn-primary">Lets go!</button>
            </form>
        </div>
    )
}

export default Signin;