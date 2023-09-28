import './LoginForm.css';

const LoginForm = () => {
    return (
        <>
            <section className='login-form-section border border-secondary'>
                <div className='container'>
                    <div className='row'>
                        <h2>Login to ....!</h2>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <label className='form-label'>Email Address</label>
                            <input type='email' className='form-control' placeholder='Email Address'></input>
                        </div>
                        <div className='col-12'>
                            <label className='form-label'>Password</label>
                            <input type='password' className='form-control' placeholder='Password'></input>
                        </div>
                        <div className='col-12'>
                            <div className='form-check'>
                                <input id='loginFormCheck' className='form-check-input' type='checkbox'></input>
                                <label className='form-check-label' for='loginFormCheck'>Remember me</label>
                            </div>
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-success'>LOGIN</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default LoginForm;