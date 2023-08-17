import React from "react";

const SurveyBodyForMarketPricing = () => {
    return (
        <>
        <section className="border border-primary p-5">
            <div className="container border border-secondary">
                <form>
                    <div className="form-outline mb-4">
                        <input id="inputEmailOne" className="form-control" type="email"/>
                        <label className="form-label" for="inputEmailOne">Email address</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input id="inputPasswordOne" className="form-control" type="password"/>
                        <label className="form-label" for="inputPasswordOne">Password</label>
                    </div>
                    <div className="row border mb-4">
                        <div className="col">
                            <div className="form-check">
                                <input id="inputEmailTwo" className="form-check-input" type="checkbox" checked/>
                                <label className="form-check-label" for="inputEmailTwo"> Remember me</label>
                            </div>
                        </div>
                        <div className="col">
                            <a href="#/">Forgot password?</a>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">SIGN IN</button>
                </form>
            </div>
        </section>
        <section className="section">
            <div className="container border border-info">
                <form>
                    <div className="row border border-danger mb-3 p-3">
                        <label className="col-sm-2 col-form-label" for="inputEmail">Email</label>
                        <div className="col-sm-10">
                            <input id="inputEmail" className="form-control" type="email"></input>
                        </div>
                    </div>
                    <div className="row border border-danger mb-3 p-3">
                        <label className="col-sm-2 col-form-label" for="inputPassword">Password</label>
                        <div className="col-sm-10">
                            <input id="inputPassword" className="form-control" type="password"></input>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Sign in</button>
                </form>
            </div>
            <div className="container-fluid border border-warning p-5">
                <div className="row border border-primary">
                    <div className="col-sm-6 border">
                        <label id="" class="form-label" for="">Name</label>
                        <input id="" class="form-control form-control-lg" type="text" placeholder="First Name, Last Name"></input>
                    </div>
                    <div className="col-sm-6 border"></div>
                </div>
                <div className="row border border-secondary p-5"></div>
                <div className="row border border-secondary p-5"></div>
                <div className="row border border-secondary p-5"></div>
            </div>
        </section>
        </>
    )
}

export default SurveyBodyForMarketPricing;