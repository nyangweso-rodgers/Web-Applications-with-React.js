import './RegistrationForm.css'

const RegistrationForm = () => {
    return (
        <>
            <section className='registration-form-section border border-primary'>
                <form className='container border'>
                    <div className='row'>
                        <div className='col-md-6 border border-primary'>
                            <label className='form-label'>Full Name</label>
                            <input id='' className='form-control' type='text' placeholder='Full Name'></input>
                        </div>
                        <div className='col-md-6 border border-secondary'>
                            <label className='form-label'>Mobile Number</label>
                            <input id='' className='form-control' type='' placeholder='Mobile Number'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 border border-primary'>
                            <label className='form-label'>Email</label>
                            <input id='' className='form-control' type='email' placeholder='Email'></input>
                        </div>
                        <div className='col-sm-6 border border-secondary'>
                            <label className='form-label'>County of Residence</label>
                            <select id='' className='form-select'>
                                <option selected>Choose...</option>
                                <option>Nairobi</option>
                                <option>Kisumu</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 border border-primary'>
                            <label className='form-label' for='employmentStatus'>Employment Status</label>
                            <select id='employmentStatus' className='form-select'>
                                <option selected>Choose...</option>
                                <option>Employed</option>
                                <option>Self Employed</option>
                                <option>Student</option>
                                <option>Not Employed</option>
                            </select>
                        </div>
                        <div className='col-sm-6 border border-secondary'>
                            <label className='form-label'>Date Of Birth</label>
                            <input id='' className='form-control' type=''></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 border'>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' id='formCheck'></input>
                                <label className='form-check-label' for="formCheck">By clicking 'SUBMIT', you agree to terms and conditions.</label>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 border'>
                            <button className='btn btn-lg btn-primary'>SUBMIT</button>
                        </div>
                    </div>
                    <button className='btn btn-success'>SUBMIT</button>
                </form>
            </section>
        </>
    )
};

export default RegistrationForm;