import React from 'react';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Auth from '../../apis/Auth';

class Header extends React.Component  {

    constructor(props)
    {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();

        Auth.logout((response) => {
            this.props.history.push("/login");
        }, (err) => {
            alert(err.response.data.message);
        });
    }

    componentDidMount()
    {
        const checkauth = setInterval(() => {
            Auth.checkAuth((response) => {}, (err) => {
                clearInterval(checkauth);

                localStorage.clear();

                this.props.history.push("/login");
            });
        }, 2000);
    }

    render(){

        return this.props.location.pathname != '/login' ? (

            <header className="border-b border-solid border-gray-300 bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
                <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                    <div>
                        <img className="h-8" src=''/>
                    </div>
                    <div className="sm:hidden">
                        <button type="button" className="text-gray-500 focus:text-white">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <nav className="relative z-20 flex-col flex-grow hidden px-2 pt-2 pb-4  md:pb-0 md:flex md:justify-end md:flex-row sm:flex sm:p-0">

                        <div className=" z-10 bg-grey-200 group-hover:block">
                            <div className="px-2 pt-2 pb-4 bg-white bg-gray-200 flex justify-between ">
                                <div className="flex flex-col flex-initial">
                                    <p>
                                        {localStorage.getItem("user.name")}
                                    </p>
                                    <small>Member since {localStorage.getItem("user.created_at")} </small>
                                </div>
                                <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                    <li className="nav-item">
                                        <Link to='/profile' className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug active:bg-blue-200">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" onClick={this.handleLogout} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug active:bg-blue-200">Sign out</a>
                                    </li>
                                </div>
                            </div>
                        </div>

                </nav>
            </header>
        ): null
    }
}

export default withRouter(Header)
