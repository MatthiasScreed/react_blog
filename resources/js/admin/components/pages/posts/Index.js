import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// actions
import { listPosts, setPostDefaults } from '../../../store/actions/PostActions';
import Breadcrumb from '../../partials/Breadcrump';
import Spinner from '../../partials/Spinner';
import Pagination from '../../partials/Pagination';
import SuccessAlert from '../../partials/SuccessAlert';
import ErrorAlert from '../../partials/ErrorAlert';
import Row from './Row';


class Index extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    {
        this.props.setPostDefaults();
        this.props.listPosts(1);
    }

    render()
    {
        return (
            <>
                <Breadcrumb/>
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
                <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium flex justify-between">
                    <h3>list posts</h3>
                    <Link to='/posts/add' className="bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6">
                        Add <i className="fa fa-plus"></i>
                    </Link>
                </header>
                <section className="overflow-x-auto w-full">
                        <Spinner show={this.props.post.list_spinner}/>
                        <SuccessAlert msg={this.props.post.success_message}/>
                        <ErrorAlert msg={this.props.post.error_message}/>
                        <table className="min-w-full table-auto">
                            <thead className="justify-between">
                                <tr className="bg-gray-800">
                                    <th className="px-16 py-2">
                                        <span className="text-gray-300">#</span>
                                    </th>
                                    <th className="px-16 py-2">
                                        <span className="text-gray-300">Title</span>
                                    </th>
                                    <th className="px-16 py-2">
                                        <span className="text-gray-300">Image</span>
                                    </th>
                                    <th className="px-16 py-2">
                                        <span className="text-gray-300">Published</span>
                                    </th>
                                    <th className="px-16 py-2">
                                        <span className="text-gray-300">Category</span>
                                    </th>
                                    <th className="px-16 py-2">
                                        <span className="text-gray-300">User</span>
                                    </th>
                                    <th className="px-16 py-2">
                                        <span className="text-gray-300" width="15%">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.post.posts.data? (
                                        this.props.post.posts.data.map(item => <Row key={item.id} post={item} />)
                                    ) : null
                                }
                            </tbody>
                        </table>
                </section>
                <Pagination data={this.props.post.posts} onclick={this.props.listPosts.bind(this)}/>
            </section>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.post
    };
  };
  const mapDispatchToProps = (dispatch) => {
      return {
         listPosts: (page) => dispatch(listPosts(page)),
          setPostDefaults: () => dispatch(setPostDefaults())
      };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Index);
