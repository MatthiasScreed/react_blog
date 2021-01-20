import React from 'react';
import {Link} from "react-router-dom";
import { withRouter } from "react-router";
import GlobalContext from '../../apis/GlobalContext';
import Auth from '../../apis/Auth';

 class Header extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            category_id: "",
            clicked: 'false'
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.handleCLick = this.handleCLick.bind(this);
    }

    handleCLick () {
        this.setState({ clicked: !this.state.clicked })
    }



    handleLogout(e) {
        e.preventDefault();
        Auth.logout((response) => {
            this.props.history.push("/");
        }, (err) => {
            alert(err.response.data.message);
        });
    }

    componentDidMount()
    {
        if(this.props.location.pathname.indexOf("category") !== -1) {
            let path_parts = this.props.location.pathname.split("/");
            // category_id is at index 2
            this.setState({
                category_id: path_parts[2]
            });
        } else {
            this.setState({
                category_id: ""
            });
        }
    }

    componentDidUpdate(prevProps)
    {
        if (prevProps !== this.props) {
            if (this.props.location.pathname.indexOf("category") !== -1) {
                let path_parts = this.props.location.pathname.split("/");
                // category_id is at index 2
                this.setState({
                    category_id: path_parts[2]
                });
            } else {
                this.setState({
                    category_id: ""
                });
            }
        }
    }

        render(){
            return (
                <header id="top" className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                            <Link to="/" className="flex items-center">
                                <img className="md:pl-6 block lg:block h-10 w-auto" src={process.env.MIX_APP_URL + `/images/Fichier1.png`}/>
                                <span className="hidden sm:block md:pl-6  font-extralight tracking-tighter">Enter the fifth circle</span>
                            </Link>
                        <button
                            className="text-gray-600 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={this.handleCLick}
                        >
                      <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </button>
                        </div>
                        <div className={
                            "lg:flex flex-grow items-center" + (this.state.clicked ? " flex" : " hidden")
                        }


                 id="example-navbar-danger">
                                <ul className="flex flex-col mt-2 lg:flex-row list-none lg:ml-auto lg:mt-0" id="menu">
                                    <li className="hidden sm:block nav-item"><a className={this.props.location.pathname=='/'?'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug active:bg-blue-200':'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75'}>Home</a></li>
                                    {
                                        this.context.categories.map(category => <li className="nav-item">
                                            <Link to={'/category/' + category.id + '/' + category.slug} className={this.state.category_id==category.id?'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug active:bg-blue-200':'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75'} key={category.id}>{ category.title }</Link></li>)
                                    }

                                    {
                                        localStorage.getItem("user.api_token") !=null?(
                                            <li className="nav-item">
                                                <a href="#" onClick={this.handleLogout} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug active:bg-blue-200">logout</a>
                                            </li>
                                        ) : (
                                            <>
                                            <li className="nav-item">
                                                <Link to='/login' className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug active:bg-blue-200">Login</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to='/register' className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug active:bg-blue-200">Register</Link>
                                            </li>
                                            </>
                                        )
                                    }
                                </ul>
                        </div>
                    </div>

                </header>
            )
        }

}

Header.contextType = GlobalContext;

export default withRouter(Header);

