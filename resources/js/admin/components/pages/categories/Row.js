import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCategory } from '../../../store/actions/CategoryActions';

class Row extends React.Component {

    constructor(props)
    {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();

        if(confirm("Are you sure?")) {
            this.props.deleteCategory(this.props.category.id);
        }
    }

    render()
    {
        return (
            <tr className="bg-white border-4 border-gray-200">
                <td className="px-16 py-2 flex flex-row items-center">
                    {this.props.category.id}
                </td>
                <td className="px-16 py-2">
                    <span className="text-center ml-2 font-semibold">{this.props.category.title}</span>
                </td>
                <td className="px-16 py-2">
                    <span className="text-center ml-2 font-semibold">{this.props.category.slug}</span>
                </td>
                <td className="px-16 py-2 flex justify-between">
                    <Link to={'/categories/edit/' + this.props.category.id} className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"><i
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
        deleteCategory: (id) => dispatch(deleteCategory(id))
    }
};

export default connect(null, mapDispatchToProps)(Row);
