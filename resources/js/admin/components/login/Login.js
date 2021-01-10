import React, { Component } from 'react';
import { withRouter } from "react-router";
import Auth from '../../apis/Auth';

class Login extends Component
{
    constructor(props)
    {
        super(props);

        document.body.classList.remove("skin-green");
        document.body.classList.add("login-page");

        this.state = {
            email: "",
            password:"",
            error_message: null,
            errors: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleEmail = this.handleEmail.bind(this);

        this.handlePassword = this.handlePassword.bind(this);

    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            error_message: null,
            errors: null
        });
        if(this.state.email == "" || this.state.password == "") {
            this.setState({
                error_message: "Please enter login credentials"
            });
            return false;
        }
        Auth.login({email: this.state.email, password: this.state.password}, (response) => {
            if(response.data.user.is_admin == 1) {
                for (var i in response.data.user) {
                    localStorage.setItem("user." + i, response.data.user[i]);
                    setTimeout(() => {
                        this.props.history.push("/");
                    }, 500);
                }
            } else {
                localStorage.clear();
                this.setState({
                    error_message: "Unauthorized"
                });
            }
        }, (err) => {
            this.setState({
                error_message: err.response.data.message,
                errors: err.response.data.errors
            });
        });
    }

    render() {
        return (

            <div className="max-w-xs w-full m-auto bg-indigo-100 rounded p-5 mt-5">
                <header>
                    <img className="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
                </header>
                <form action="#" method="post" onSubmit={this.handleSubmit}>
                    <div className={`form-group has-feedback ${this.state.errors && this.state.errors.email?'has-error':''}`}>
                        <label className="block mb-2 text-indigo-500" htmlFor="username">Email</label>
                        <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="email" name="email" onChange={this.handleEmail} value={this.state.email}/>
                        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                                {
                                    this.state.errors && this.state.errors.email?(<div className="help-block">{this.state.errors.email[0]}</div>):null
                                }
                    </div>
                    <div className={`form-group has-feedback ${this.state.errors && this.state.errors.password?'has-error':''}`}>
                        <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
                        <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" onChange={this.handlePassword} value={this.state.password}/>
                        <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                                {
                                    this.state.errors && this.state.errors.password?(<div className="help-block">{this.state.errors.password[0]}</div>):null
                                }
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded">
                        Sign In
                        </button>
                    </div>
                </form>
                <footer>
                    <a className="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</a>
                    <a className="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#">Create Account</a>
                </footer>
            </div>
        )
    }


}

export default withRouter(Login);
