import React from 'react';

class EditForm extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return this.props.edit_mode?(
            <form method="post" role="form" className="edit-form" onSubmit={this.props.onSubmit}>
                <textarea className={`form-control ${this.props.validation_errors!=null?'has-error':''}`} value={this.props.comment_text} onChange={this.props.onChangeEdit}></textarea>
                {
                    this.props.validation_errors!=null?(
                    <div className="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2">
                        <div class="text-red-500 rounded-full bg-white mr-3">
                            <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                            </svg>
                        </div>
                        <div class="text-white max-w-xs ">
                            {this.props.validation_errors[0]}
                        </div>
                    </div>):null
                }
                <button type="submit" className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Update</button>
                <button type="button" className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline" onClick={this.props.onDisableEdit}>Cancel</button>
            </form>
        ): null;
    }
}
export default EditForm;
