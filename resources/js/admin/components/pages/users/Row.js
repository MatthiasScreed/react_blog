import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser } from '../../../store/actions/UserActions';

class Row extends React.Component {
    constructor(props)
    {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(e) {
        e.preventDefault();
        if(confirm("Are you sure?")) {
            this.props.deleteUser(this.props.user.id);
        }
    }

    render()
    {
        return (
            <tr>
               <td className="px-16 py-2">{this.props.user.id}</td>
               <td className="px-16 py-2">{this.props.user.name}</td>
               <td className="px-16 py-2">{this.props.user.email}</td>
               <td className="px-16 py-2">{this.props.user.is_admin==1?'Yes':'No'}</td>
               <td className="px-16 py-2">{this.props.user.created_at}</td>
               <td className="px-16 py-2 flex justify-between">
                    <Link to={'/users/edit/' + this.props.user.id} className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"><i
                        className="fa fa-edit"></i>
                    </Link>
                    <a href="#" className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={this.handleDelete}><i
                        className="far fa-trash-alt"></i></a>
                </td>
            </tr>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (id) => dispatch(deleteUser(id))
    }
};
export default connect(null, mapDispatchToProps)(Row);
