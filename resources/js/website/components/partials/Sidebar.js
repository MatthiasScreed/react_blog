import React from 'react';
import {Link} from "react-router-dom";
import GlobalContext from '../../apis/GlobalContext';
import TagApi from '../../apis/Tag';

class Sidebar extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            tags: []
        };
    }
    componentDidMount()
    {
        TagApi.getAll().then(response => {
            this.setState({
                tags: response.data.data
            });
         });
    }

    render()
    {
        return (


            <div id="sidebar" className=" max-w-sm  mx-auto  ">

                <div className="rounded-lg shadow-lg bg-white my-3">
                    <div className="flex justify-between border-b border-gray-100 px-5 py-4">

                        <div>
                            <i className="fas fa-th-list text-blue-500 mr-2"></i>
                            <span className="font-bold text-gray-700 text-lg">About me</span>
                        </div>

                    </div>
                    <div className="px-5 py-4">
                        <p className="text-gray-600 ">Welcome to <strong>TheFifthCircle</strong> , i wanted to create this blog to express myself and motivate me te create more content either  <strong>web</strong> related , <strong>motion</strong> related , <strong>design</strong> related or <strong>sport</strong> related and evantually become better.<br/> My name is Matthias Screed i hope you will appreciate don't hesitate to leave comments  </p>
                    </div>
                </div>

                <div className="rounded-lg shadow-lg bg-white my-3">
                    <div className="flex justify-between border-b border-gray-100 px-5 py-4">

                        <div>
                            <i className="fas fa-th-list text-blue-500 mr-2"></i>
                            <span className="font-bold text-gray-700 text-lg">Categories.</span>
                        </div>

                    </div>
                    <ul className="flex flex-col w-full">
                        {
                            this.context.categories.map(category => {
                                return category.num_posts > 0 ?(

                                    <li key={category.id} className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                                            <div className="mx-2 -mt-1">
                                                <Link to={'/category/' + category.id + '/' + category.slug}>
                                                    <span>{ category.title }</span>({category.num_posts})
                                                </Link>
                                            </div>
                                        </div>
                                    </li>

                                ) : null
                            })
                        }
                    </ul>
                </div>

                {
                    this.state.tags.length > 0 ? (
                <div className="rounded-lg shadow-lg bg-white my-3">
                    <div className="flex justify-between border-b border-gray-100 px-5 py-4">
                        <div>
                        <i className="fas fa-tags text-yellow-500 mr-2"></i>
                            <span className="font-bold text-gray-700 text-lg">Post Tags.</span>
                        </div>
                    </div>
                    <div className="flex flex-shrink-0 flex-wrap">
                        {
                            this.state.tags.map(tag => {
                                return (
                                    <div className="flex flex-shrink-0 text-sm items-center px-2 m-2">
                                        <Link key={tag.id} to={'/tag/' + tag.id + '/' + tag.title} className="bg-gray-300 text-gray-600 px-2 py-1 rounded">{tag.title}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                    ) : null
                }

            </div>

        );
    }
}

Sidebar.contextType = GlobalContext;
export default Sidebar;
