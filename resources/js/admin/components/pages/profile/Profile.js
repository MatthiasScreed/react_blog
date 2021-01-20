import React from 'react';
import Breadcrumb from '../../partials/Breadcrump';
import SuccessAlert from '../../partials/SuccessAlert';
import ErrorAlert from '../../partials/ErrorAlert';
import User from '../../../apis/User';

class Profile extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            success: "",
            error: "",
            validation_errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount()
    {
        let self = this;
        User.profile().then(response => {
            self.setState({
               name: response.data.data.name,
               email: response.data.data.email
            });
        });
    }

    handleChange(e) {
        let inputName = e.target.name;
        this.setState({
            [inputName]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let self = this;
        User.updateProfile({name: this.state.name,
            email: this.state.email,
            password: this.state.password}).then(response => {
            localStorage.removeItem("user.email");
            localStorage.removeItem("user.name");
            for (let i in response.data.data) {
                localStorage.setItem("user." + i, response.data.data[i]);
            }
            self.setState({
               success: response.data.message,
                error: "",
                validation_errors: {}
            });
        }).catch(error => {
            self.setState({
                success: "",
                error: error.response.data.message,
                validation_errors: error.response.data.errors
            });
        });
    }

    render()
    {
        return(
            <>
             <Breadcrumb/>
             <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
                    <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium flex justify-between">
                        <h3>My profile</h3>

                    </header>
                    <section className="overflow-x-auto w-full">
                    <div className="w-3/12 m-4 bg-white border border-gray-300 border-solid rounded shadow">
                        <img
                            className="rounded-full h-10"
                            src="https://2.gravatar.com/avatar/2efcd2bced3b094973e38898c50cd14f?s=400&d=mm"/>
                        <div className="flex flex-col p-2">
                            <h2 className="ttext-white pb-1">{localStorage.getItem("user.name")}</h2>
                            <h3 className="text-xs text-gray-500">{localStorage.getItem("user.created_at")}</h3>
                            <p>Member since {localStorage.getItem("user.created_at")}</p>
                        </div>
                        <ul className="p-2 py-4 border-b border-solid border-gray-300">
                            <li className="pl-4 flex flex-wrap flex-row items-center">
                                <p className="text-gray-700">Name</p>
                                <a className="pull-right">{localStorage.getItem("user.name")}</a>
                            </li>
                            <li className="pl-4 flex flex-wrap flex-row items-center">
                                <p className="text-gray-700">Email</p>
                                <a className="pull-right">{localStorage.getItem("user.email")}</a>
                            </li>
                            <li className="pl-4 flex flex-wrap flex-row items-center">
                                <p className="text-gray-700">Created</p>
                                <a className="pull-right">{localStorage.getItem("user.created_at")}</a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-9/12 m-4 bg-white border border-gray-300 border-solid rounded shadow">
                        <SuccessAlert msg={this.state.success} />
                        <ErrorAlert msg={this.state.error} />
                        <form method="post" role="form" onSubmit={this.handleSubmit}>
                        <label className="block border-gray-300 border-solid p-4">
                            <span className="block text-grey-darker text-sm font-bold mb-2">Name</span>
                            <input type="text" className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" placeholder="Name" onChange={this.handleChange} value={this.state.name} name="name" />
                            {
                                    this.state.validation_errors.name!=null?(
                                    <div className="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2">
                                        <div className="text-red-500 rounded-full bg-white mr-3">
                                            <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                            </svg>
                                        </div>
                                        <div className="text-white max-w-xs ">
                                            {this.state.validation_errors.name!=null[0]}
                                        </div>
                                    </div>):null
                            }
                        </label>
                        <label className="block border-gray-300 border-solid p-4">
                            <span className="block text-grey-darker text-sm font-bold mb-2">Email</span>
                            <input type="email" className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" onChange={this.handleChange} value={this.state.email} name="email" />
                            {
                                    this.state.validation_errors.email!=null?(
                                    <div className="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2">
                                        <div className="text-red-500 rounded-full bg-white mr-3">
                                            <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                            </svg>
                                        </div>
                                        <div class="text-white max-w-xs ">
                                            {this.state.validation_errors.email!=null[0]}
                                        </div>
                                    </div>):null
                            }
                        </label>
                        <label className="block border-gray-300 border-solid p-4">
                            <span className="block text-grey-darker text-sm font-bold mb-2">Password</span>
                            <input type="password" className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" onChange={this.handleChange} value={this.state.password} name="password" />
                            {
                                    this.state.validation_errors.password!=null?(
                                    <div className="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2">
                                        <div className="text-red-500 rounded-full bg-white mr-3">
                                            <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                            </svg>
                                        </div>
                                        <div className="text-white max-w-xs ">
                                            {this.state.validation_errors.password!=null[0]}
                                        </div>
                                    </div>):null
                            }
                        </label>
                        <button type="submit"
                            className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                            font-medium text-white uppercase
                            focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            Submit
                        </button>
                        </form>
                    </div>

                    </section>
            </section>
            </>
        );
    }
}

export default Profile;
