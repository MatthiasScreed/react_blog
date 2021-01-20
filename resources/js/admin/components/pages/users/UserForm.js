import React from 'react';
import Spinner from '../../partials/Spinner';
import SuccessAlert from '../../partials/SuccessAlert';
import ErrorAlert from '../../partials/ErrorAlert';

class Form extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <Spinner show={this.props.create_update_spinner}/>
                <SuccessAlert msg={this.props.success_message}/>
                <ErrorAlert msg={this.props.error_message}/>

                <section className="overflow-x-auto w-full">
                    <label className="block border-gray-300 border-solid p-4">
                        <span className="block text-grey-darker text-sm font-bold mb-2">Name</span>
                        <input type="text" className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" placeholder="User name" onChange={this.props.handleUserChange} value={this.props.user.name?this.props.user.name:''} name="name" />
                        {
                                    this.props.validation_errors.name!=null?(
                                    <div className="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2">
                                        <div class="text-red-500 rounded-full bg-white mr-3">
                                            <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                            </svg>
                                        </div>
                                        <div class="text-white max-w-xs ">
                                            {this.props.validation_errors.name[0]}
                                        </div>
                                    </div>):null
                        }
                    </label>
                    <label className="block border-gray-300 border-solid p-4">
                        <span className="block text-grey-darker text-sm font-bold mb-2">Email</span>
                        <input type="text" className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" placeholder="User email" onChange={this.props.handleUserChange} value={this.props.user.email?this.props.user.email:''} name="email" />
                        {
                                    this.props.validation_errors.email!=null?(
                                    <div className="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2">
                                        <div class="text-red-500 rounded-full bg-white mr-3">
                                            <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                            </svg>
                                        </div>
                                        <div class="text-white max-w-xs ">
                                            {this.props.validation_errors.email[0]}
                                        </div>
                                    </div>):null
                        }
                    </label>
                    <label className="block border-gray-300 border-solid p-4">
                        <span className="block text-grey-darker text-sm font-bold mb-2">Password</span>
                        <input type="password" className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" onChange={this.props.handleUserChange} value={this.props.user.password?this.props.user.password:''} name="password" />
                        {
                                    this.props.validation_errors.password!=null?(
                                    <div className="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2">
                                        <div class="text-red-500 rounded-full bg-white mr-3">
                                            <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                            </svg>
                                        </div>
                                        <div class="text-white max-w-xs ">
                                            {this.props.validation_errors.password[0]}
                                        </div>
                                    </div>):null
                        }
                    </label>
                    <label className="border-gray-300 border-solid p-4 inline-flex items-center">
                        <input type="checkbox" onChange={this.props.handleUserChange} value="1" checked={this.props.user.is_admin==1} name="is_admin" className="form-checkbox h-5 w-5 text-gray-600" />
                        Is Admin
                    </label>
                </section>
            </div>
        )
    }
}
export default Form;
