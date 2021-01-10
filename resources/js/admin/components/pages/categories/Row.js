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
                <td >
                    <span className="text-center ml-2 font-semibold">{this.props.category.title}</span>
                </td>
                <td>
                    <span className="text-center ml-2 font-semibold">{this.props.category.slug}</span>
                </td>
                <td className="px-16 py-2">
                    <Link to={'/categories/edit/' + this.props.category.id} className="btn btn-info btn-sm"><i
                        className="fa fa-edit"></i></Link>
                    <a href="#" className="btn btn-danger btn-sm" onClick={this.handleDelete}><i
                        className="fa fa-remove"></i></a>
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
