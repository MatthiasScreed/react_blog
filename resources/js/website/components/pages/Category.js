import React from 'react';
import Sidebar from '../partials/Sidebar';
import Article from '../partials/Article';
import { withRouter } from "react-router";
import PostApi from '../../apis/Post';
import CategoryApi from '../../apis/Category';
import Pagination from "../partials/Pagination";

class Category extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            posts: {},
            spinner: false,
            category_title: "",
            isLoaded: false
        };
    }

    componentDidMount()
    {
        this.setState({
            spinner: true,
            isLoaded: true
        });
        this.fetch();
    }

    componentDidUpdate(prevProps)
    {
        if (prevProps !== this.props && this.state.isLoaded == false) {
            this.setState({
                spinner: true,
                isLoaded: true
            });
            this.fetch();
        }
    }

    fetch() {
        CategoryApi.getById(this.props.match.params.id).then(response => this.setState({category_title: response.data.data.title}));
        PostApi.getByCategory(this.props.match.params.id).then(response => {
            this.setState({
                posts: response.data.data,
                spinner: false,
                isLoaded: false
            });
        });
    }

    onPaginate(page) {
        this.setState({
            spinner: true
        });
        PostApi.getByCategory(this.props.match.params.id, page).then(response => {
            this.setState({
                posts: response.data.data,
                spinner: false
            });
        });
    }

    render()
    {
        return (
            <div className="flex px-6 py-8 container">
                <div className="w-full lg:w-8/12">

                    <h1>Category: News</h1>
                    {
                       this.state.posts.data && this.state.posts.data.length > 0 ?(
                           this.state.posts.data.map(post => <Article key={post.id} post={post} />)
                       ) : (
                           <p>No posts found</p>
                       )
                    }
                    <Pagination data={this.state.posts} onclick={this.onPaginate.bind(this)} />
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

export default withRouter(Category);
