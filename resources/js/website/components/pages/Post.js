import React from 'react';
import {Link} from "react-router-dom";
import Sidebar from '../partials/Sidebar';
import Comments from '../partials/Comments';
import CommentForm from '../partials/CommentForm';
import PostApi from '../../apis/Post';
import ReactHtmlParser from 'react-html-parser';

class Post extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            post: {},
            spinner: false,
            isLoaded: false
        };
    }

    componentDidMount()
    {
        this.setState({
            spinner: true,
            isLoaded: true
        });

        PostApi.getById(this.props.match.params.id).then(response => this.setState({post: response.data.data, spinner: false, isLoaded: false}));
    }

    componentDidUpdate(prevProps)
    {
        if(this.props != prevProps && this.state.isLoaded == false) {
            this.setState({
                spinner: true,
                isLoaded: true
            });

            PostApi.getById(this.props.match.params.id).then(response => this.setState({post: response.data.data, spinner: false, isLoaded: false}));
        }
    }

    render()
    {
        return (
            <div className="flex px-6 py-8 container">
                <div className="w-full lg:w-8/12">
                    <img src={process.env.MIX_APP_URL + 'assets/website/images/ajax-loader.gif'} style={{display: this.state.spinner==true?'block':'none'}} />
                    {

                        this.state.post.hasOwnProperty('title')?(
                            <>
                                <div className="mt-10">
                                <div className="mb-4 md:mb-0 w-full mx-auto relative">
                                    <div className="px-4 lg:px-0">
                                        <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                                            {this.state.post.title}
                                        </h2>
                                        <Link to={`/category/${this.state.post.category.id}/${this.state.post.category.slug}`} title="" rel="category tag"
                                        className="py-2 text-green-700 inline-flex items-center justify-center mb-2">{this.state.post.category.title}</Link>

                                    </div>
                                    <img src={process.env.MIX_APP_URL + `/uploads/${this.state.post.image}`} className="w-full object-cover lg:rounded"/>
                                    <div className="p-4 absolute bottom-0 left-0 z-20">

                                        <div className="flex mt-3">
                                            <img src={process.env.MIX_APP_URL + '/portrait/PbsbpWd7_400x400.jpg'} className="h-10 w-10 rounded-full mr-2 object-cover" />
                                            <div>
                                                <p className="font-semibold text-gray-200 text-sm">{this.state.post.user.name}</p>
                                                <p className="font-semibold text-gray-200 text-sm">{this.state.post.date_formatted}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                                    <div className="pb-6">
                                        { ReactHtmlParser(this.state.post.content) }
                                    </div>
                                </div>
                                {
                                    this.state.post.hasOwnProperty('tag') && this.state.post.tags.length > 0? (
                                        <div className="px-5 py-3">
                                            <h3 className="font-bold text-xs">TAGS</h3>
                                            <div className="my-3 flex flex-wrap -m-1">
                                                {
                                                this.state.post.tags.map((tag, index) => <span className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer"><Link key={tag.id} to={'/tag/' + tag.id + '/' + tag.title}>#{tag.title}</Link>{index!=this.state.post.tags.length-1?',':null} </span>)
                                                }
                                            </div>
                                        </div>
                                    ) : null
                                }

                                <div className="bg-white px-4 py-3 flex items-center max-w-screen-md mx-auto justify-between border-t border-gray-200 sm:px-6">
                                    {
                                        this.state.post.prev_post != null?(
                                            <Link className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500" to={'/p/' + this.state.post.prev_post.id + '/' + this.state.post.prev_post.slug}>
                                                <strong>Previous Article</strong> {this.state.post.prev_post.title}
                                            </Link>
                                        ): null
                                    }

                                    {
                                        this.state.post.next_post != null?(
                                            <Link className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500" to={'/p/' + this.state.post.next_post.id + '/' + this.state.post.next_post.slug}>
                                                <strong>Previous Article</strong> {this.state.post.next_post.title}
                                            </Link>
                                        ): null
                                    }
                                </div>
                            </div>
                        </>
                        ) : null
                    }

                    <div id="comments" className=" max-w-screen-md mx-auto">
                        {
                           this.state.post.hasOwnProperty('approved_comments') && this.state.post.approved_comments.length > 0?(
                               <div>
                                   <h3>{this.state.post.approved_comments.length} Comments</h3>

                                   <Comments comments={this.state.post.approved_comments} />

                               </div>
                           ): null
                        }
                        {
                            localStorage.getItem('user.api_token') != null?<CommentForm/>:(
                                <Link to='/login'>Login to comment</Link>
                            )
                        }
                    </div>

                </div>
                <div className= "w-4/12 hidden lg:block">
                    <div className="mt-6">
                        <Sidebar/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;
