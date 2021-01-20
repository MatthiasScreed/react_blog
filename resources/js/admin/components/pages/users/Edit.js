import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import Breadcrumb from '../../partials/Breadcrump';
import UserForm from './UserForm';

// actions
import { handleUserChange, showUser, editUser, setUserDefaults, resetUserFields } from '../../../store/actions/UserActions';


class Edit extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount()
    {
        this.props.setUserDefaults();
        this.props.resetUserFields();
        this.props.showUser(this.props.match.params.id);
    }
    handleUserChange(e) {
        if(e.target.name == 'is_admin') {
            this.props.handleUserChange(e.target.name, e.target.value, e.target.checked);
        } else {
            this.props.handleUserChange(e.target.name, e.target.value);
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        let self = this;
        this.props.editUser(this.props.user.user, this.props.match.params.id, function () {
            // reset fields
            self.props.resetUserFields();
            // redirect
            setTimeout(() => self.props.history.push('/users'), 2000);
        });
    }


    render()
    {
        return(
            <>
            <Breadcrumb/>
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
                <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium flex justify-between">
                    <h3>Edit users</h3>
                    <Link to='/users' className="uppercase px-8 py-2 rounded bg-yellow-300 text-yellow-600 max-w-max shadow-sm hover:shadow-lg"><i className="fa fa-arrow-left"></i> Return back</Link>
                </header>
                <section className="overflow-x-auto w-full">
                    <form role="form" method="post" onSubmit={this.handleSubmit}>
                            <UserForm user={this.props.user.user} create_update_spinner={this.props.user.create_update_spinner}
                                success_message={this.props.user.success_message} error_message={this.props.user.error_message}
                                handleUserChange={this.handleUserChange}
                                validation_errors={this.props.user.validation_errors}
                            />
                            <button type="submit"
                            className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                            font-medium text-white uppercase
                            focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            Update
                        </button>
                    </form>
                </section>
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
        showUser: (id) => dispatch(showUser(id)),
        handleUserChange: (field, value, checked = null) => dispatch(handleUserChange(field, value, checked)),
        editUser: (payload, id, cb) => dispatch(editUser(payload, id, cb)),
        setUserDefaults: () => dispatch(setUserDefaults()),
        resetUserFields: () => dispatch(resetUserFields())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
