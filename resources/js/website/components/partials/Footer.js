import React from 'react';
import {Link} from "react-router-dom";
import GlobalContext from '../../apis/GlobalContext';

class Footer extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <footer className="bg-gray-100  bottom-0">
                <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">

                    <div className="p-5 w-48">
                        <h3 className="text-xs uppercase text-gray-500 font-medium">Navigate</h3>
                        <ul className="flex">
                            <li className="m-3 block"><Link to="/">Home</Link></li>
                            {
                                this.context.categories.map(category => <li className="m-3 block" key={category.id}>
                                    <Link to={'/category/' + category.id + '/' + category.slug}>{category.title }</Link>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex w-full justify-around">
                    <small className="text-center p-4">&copy; Copyright 2021, TheFifthCircle.All Rights Reserved</small>
                    <div className="mx-2">
                        <a className=" text-2xl text-gray-500 mx-4" href="https://www.instagram.com/matthias_screed/" ><i className="fab fa-instagram"></i></a>
                        <a className=" text-2xl text-gray-500 mx-4" href="https://www.instagram.com/matthias_screed/" ><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.contextType = GlobalContext;

export default Footer;
