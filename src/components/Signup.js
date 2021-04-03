import React from "react";

function Signup(props) {
    const {onSignup, error} = props;
    // console.log('erroress: ', error.errorMessage)

    return (
        <div>
            <h3>New here? Signup here if you want to have extra features of the app</h3>
            <form onSubmit={onSignup} className="form">
                <div className="form-group">
                    <label htmlFor="InputUsername">Username</label>
                    <input type="text" className="form-control" id="InputUsername" name="username" placeholder="username"/>
                    <small id="usernameHelp" className="form-text text-muted">Give here your unique username</small>
                </div>
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
                error && <p>{error.errorMessage}</p>        
                }
                <button type="submit" className="btn btn-primary">Join the cooking-club!</button>
            </form>
        </div>
    )
}

export default Signup;