import React from 'react';
import { withRouter } from "react-router";
import CommentApi from '../../apis/Comment';


class CommentForm extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            comment: "",
            error_message: null,
            errors: null,
            success_message: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            comment: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            error_message: null,
            errors: null
        });

        CommentApi.store({comment: this.state.comment, post_id: this.props.match.params.id}).then(response => {

            this.setState({
                success_message: response.data.message
            });

        }).catch(err => {
            this.setState({
                error_message: err.response.data.message,
                errors: err.response.data.errors
            });
        });
    }


    render()
    {
        return (
                <div>

                    <h3>Leave a Comment</h3>

                    {
                        this.state.error_message?(
                        <div className="bg-red-lightest border border-red-light text-red-dark pl-4 pr-8 py-3 rounded relative">
                            <strong className="font-bold">Arfff!</strong>
                            <span className="block sm:inline">{this.state.error_message}</span>
                        </div>):null
                    }
                    {
                        this.state.success_message?(
                            <div className="bg-green-lightest border border-green-light text-red-dark pl-4 pr-8 py-3 rounded relative">
                                <strong className="font-bold">Hell yeah!</strong>
                                <span className="block sm:inline">{this.state.success_message}</span>
                            </div>):null
                    }

                    <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2 mt-4" id="contactForm" method="post" onSubmit={this.handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Leave a Comment</h2>
                            <div className="w-full md:w-full px-3 mb-2 mt-2">
                                <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="comment" id="cMessage" rows="10" cols="50" onChange={this.handleInput} value={this.state.comment}></textarea>

                                {
                                    this.state.errors && this.state.errors.comment?(
                                    <div className="bg-red-lightest border border-red-light text-red-dark pl-4 pr-8 py-3 rounded relative">
                                        <strong className="font-bold">Hell yeah!</strong>
                                        <span className="block sm:inline">{this.state.errors.comment[0]}</span>
                                    </div>):null
                                }
                            </div>
                            <div className="w-full md:w-full flex items-start px-3 py-4">
                                <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                                    <svg fill="none" className="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <p className="text-xs md:text-sm pt-px">Some HTML is okay.</p>
                                </div>
                                <div className="-mr-1">
                                    <input type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Submit'/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
        );
    }
}

export default withRouter(CommentForm);
