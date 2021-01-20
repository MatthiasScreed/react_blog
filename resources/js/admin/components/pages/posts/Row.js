import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../../../store/actions/PostActions';

class Row extends React.Component {

    constructor(props)
    {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        if(confirm("Are you sure?")) {
            this.props.deletePost(this.props.post.id);
        }
    }

    render()
    {
        return (
            <tr>
                <td className="px-16 py-2">{this.props.post.id}</td>
                <td className="px-16 py-2">{this.props.post.title}</td>
                <td className="px-16 py-2">
                    <img src={this.props.post.image_url} width="50" height="40" />
                </td>
                <td className="px-16 py-2">
                    {this.props.post.published == 1?(<span className="badge bg-green">published</span>):(<span className="badge bg-gray">draft</span>)}
                </td>
                <td className="px-16 py-2">{this.props.post.category?this.props.post.category.title:""}</td>
                <td className="px-16 py-2">{this.props.post.user?this.props.post.user.name:""}</td>
                <td className="px-16 py-2 flex justify-between">
                    <Link to={'/posts/edit/' + this.props.post.id} className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"><i
                        className="fa fa-edit"></i></Link>
                    <a href="#" className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={this.handleDelete}><i
                        className="far fa-trash-alt"></i></a>
                </td>
            </tr>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
};
export default connect(null, mapDispatchToProps)(Row);
