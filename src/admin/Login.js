import React from 'react';

const Login = () => {
    return (
        <>

        <div className='container'>
            <div className='row py-5'>
                <div className='col-md-6 offset-md-3 p-5 shadow'>
                    <h2>Login page</h2>
                <div class="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div class="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div></div>
        </div>
        </>
    )
}
export default Login;