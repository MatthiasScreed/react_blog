import React from 'react';
import { connect } from 'react-redux';
import Breadcrumb from '../../partials/Breadcrump';
import { listUsers, setUserDefaults } from '../../../store/actions/UserActions';
import Spinner from '../../partials/Spinner';
import Row from './Row';
import { Link } from 'react-router-dom';
import Pagination from '../../partials/Pagination';
import SuccessAlert from '../../partials/SuccessAlert';
import ErrorAlert from '../../partials/ErrorAlert';


class Index extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    componentDidMount() {
        this.props.setUserDefaults();
        this.props.listUsers(1);
    }

    render()
    {
        return(
            <>
                <Breadcrumb/>
                <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
                <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium flex justify-between">
                    <h3>list Users</h3>
                    <Link to='/users/add' className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Add <i className="fa fa-plus"></i></Link>
                </header>
                <section className="overflow-x-auto w-full">
                    <Spinner show={this.props.user.list_spinner}/>
                    <SuccessAlert msg={this.props.user.success_message}/>
                    <ErrorAlert msg={this.props.user.error_message}/>
                    <table className="min-w-full table-auto">
                        <thead className="justify-between">
                            <tr className="bg-gray-800">
                                <th className="px-16 py-2">
                                    <span className="text-gray-300">#</span>
                                </th>
                                <th className="px-16 py-2">
                                    <span className="text-gray-300">Name</span>
                                </th>
                                <th className="px-16 py-2">
                                    <span className="text-gray-300">Email</span>
                                </th>
                                <th className="px-16 py-2">
                                    <span className="text-gray-300">Admin</span>
                                </th>
                                <th className="px-16 py-2">
                                    <span className="text-gray-300">Created date</span>
                                </th>
                                <th className="px-16 py-2" width="15%">
                                    <span className="text-gray-300">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.user.users.data?(
                                    this.props.user.users.data.map(item => <Row key={item.id} user={item} />)
                                ):null
                            }
                        </tbody>
                    </table>
                </section>
                <Pagination data={this.props.user.users} onclick={this.props.listUsers.bind(this)} />
        </section>
        </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        listUsers: (page) => dispatch(listUsers(page)),
        setUserDefaults: () => dispatch(setUserDefaults())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
