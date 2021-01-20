import React from 'react';
import Sidebar from '../partials/Sidebar';
import {Link} from "react-router-dom";
import Auth from '../../apis/Auth';
import { withRouter } from "react-router";
class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email: "",
            password: "",
            error_message: null,
            errors: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
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
            for (var i in response.data.user) {
                localStorage.setItem("user." + i, response.data.user[i]);
                setTimeout(() => {
                    this.props.history.push("/");
                }, 500);
            }
        }, (err) => {
            this.setState({
                error_message: err.response.data.message,
                errors: err.response.data.errors
            });
        });
    }

    render()
    {
        return (
            <div className="flex px-6 py-8 container">
                <div className="w-full lg:w-8/12">
                    <div id="main" className="bg-gray-100 mb-12 sm:w-full md:max-w-md lg:max-w-lg mx-auto p-8 md:p-12 my-5 rounded-lg shadow-2xl">
                    <div className="xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-5">
                            <h2 className="font-bold text-2xl">Login</h2>
                    </div>
                    <section className="xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-5">
                        {
                            this.state.error_message?(
                            <div className="bg-red-lightest border border-red-light text-red-dark pl-4 pr-8 py-3 rounded relative">
                                <strong className="font-bold">Arfff!</strong>
                                <span className="block sm:inline">{this.state.error_message}</span>
                            </div>):null
                        }
                    </section>
                    <section className="bg-gray-800 rounded-lg py-5 mx-auto">
                            <form className="text-sm m-8 xs:p-4 sm:p-4 md:p-8 lg:p-8" method="post" onSubmit={this.handleSubmit}>
                                    <div className="relative border rounded mb-4 shadow appearance-none label-floating">
                                        <input name="email" type="text" onChange={this.handleInput} value={this.state.email} className="w-full py-2 px-3 text-black leading-normal rounded" placeholder="Email" />
                                        {/* <label className="absolute block text-black top-0 left-0 w-full px-3 py-2 leading-normal">Email</label> */}
                                        {
                                            this.state.errors && this.state.errors.email?(
                                            <div className="bg-red-lightest border border-red-light text-red-dark pl-4 pr-8 py-3 rounded relative">
                                                <strong className="font-bold">Arfff!</strong>
                                                <span className="block sm:inline">{this.state.errors.email[0]}</span>
                                            </div>):null
                                        }
                                    </div>
                                    <div className="relative border rounded mb-4 shadow appearance-none label-floating">
                                        <input name="password" type="password" onChange={this.handleInput} value={this.state.password} className="w-full py-2 px-3 text-black leading-normal rounded" placeholder="Password" onChange={this.handleInput} />
                                        {/* <label className="absolute block text-black top-0 left-0 w-full px-3 py-2 leading-normal">Password</label> */}
                                        {
                                            this.state.errors && this.state.errors.password?(
                                            <div className="bg-red-lightest border border-red-light text-red-dark pl-4 pr-8 py-3 rounded relative">
                                                <strong className="font-bold">Arfff!</strong>
                                                <span className="block sm:inline">{this.state.errors.password[0]}</span>
                                            </div>):null
                                        }
                                    </div>
                                    <input type="submit" className="bg-black hover:bg-white hover:text-black text-white w-full py-2 px-4 rounded" value="Login" />
                            </form>
                        </section>
                        <div className="xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-5 my-5">
                            <Link className="text-black font-bold hover:underline" to="/register">Already have account ?</Link>
                        </div>
                    </div>
                </div>
                    <div className="w-4/12 hidden lg:block">
                        <div className="mt-6">
                            <Sidebar/>
                        </div>
                    </div>
            </div>
        )
    }
}
export default withRouter(Login);
