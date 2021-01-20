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
                <Spinner show={this.props.categories.create_update_spinner}/>
                <SuccessAlert msg={this.props.categories.success_message}/>
                <ErrorAlert msg={this.props.categories.error_message}/>

                <label htmlFor="title" className="block text-xs font-semibold text-gray-600 uppercase">Category title</label>
                <input id="title" type="text" name="title" placeholder="Category title"
                    className="block w-full py-3 px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    onChange={this.props.onchange}
                    value={this.props.categories.category.title?this.props.categories.category.title:''} />

                        {
                            this.props.categories.validation_errors!=null?(<div className="help-block">{this.props.categories.validation_errors.title[0]}</div>):null
                        }
            </div>
        )
    }
}

export default Form;
