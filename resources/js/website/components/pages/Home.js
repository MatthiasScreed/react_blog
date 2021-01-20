import React from 'react';
import Sidebar from '../partials/Sidebar';
import Article from '../partials/Article';
import Post from '../../apis/Post';

class Home extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
          posts: [],
          spinner: false
        };
    }

    componentDidMount()
    {
        this.setState({
            spinner: true
        });

        Post.getRecent().then(response => {
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
                <div className= "w-full lg:w-8/12">

                    <img src={process.env.MIX_APP_URL + '/images/ajax-loader.gif'} style={{display: this.state.spinner==true?'block':'none'}} />
                    {
                        this.state.posts.map(post => <Article key={post.id} post={post} />)
                    }
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

export default Home;
