import React from 'react';
import {connect} from 'react-redux';

// actions
import { listComments } from '../../../store/actions/CommentActions';

// partials
import Spinner from '../../partials/Spinner';
import Breadcrumb from '../../partials/Breadcrump';
import Pagination from '../../partials/Pagination';
import SuccessAlert from '../../partials/SuccessAlert';
import ErrorAlert from '../../partials/ErrorAlert';
import Row from './Row';

class Index extends React.Component
{

    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    {
        this.props.listComments(1);
    }

    render()
    {
        return(
            <>
                <Breadcrumb/>
                <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">

                <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium flex justify-between">
                    <h1>list comments</h1>
                </header>
                <section className="overflow-x-auto w-full">
                    <Spinner show={this.props.comments.list_spinner}/>
                    <SuccessAlert msg={this.props.comments.success_message}/>
                    <ErrorAlert msg={this.props.comments.error_message}/>
                    <table className="min-w-full table-auto">
                        <thead className="justify-between">
                            <tr className="bg-gray-800">
                                <th className="px-16 py-2">
                                    <span className="text-gray-300">#</span>
                                </th>
                                <th className="px-16 py-2">
                                    <span className="text-gray-300">Author</span>
                                </th>
                                <th className="px-16 py-2" width="53%">
                                    <span className="text-gray-300">Comment</span>
                                </th>
                                <th className="px-16 py-2">
                                    <span className="text-gray-300">In Response To</span>
                                </th>
                                <th className="px-16 py-2">
                                    <span className="text-gray-300">Submitted on</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.comments.comments.data?(
                                    this.props.comments.comments.data.map(item => <Row key={item.id} comment={item} validation_errors={this.props.comments.validation_errors} />)
                                ):null
                            }
                        </tbody>
                    </table>
                </section>
                <Pagination data={this.props.comments.comments} onclick={this.props.listComments.bind(this)} />
            </section>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        comments: state.comment
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
      listComments: (page) => dispatch(listComments(page))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
