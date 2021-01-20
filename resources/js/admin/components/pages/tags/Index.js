import React from 'react';
import Breadcrumb from '../../partials/Breadcrump';
import {connect} from 'react-redux';
import { listTags, setTagDefaults } from '../../../store/actions/TagAction';
import Spinner from '../../partials/Spinner';
import { Link } from 'react-router-dom';
import Row from './Row';
import Pagination from '../../partials/Pagination';
import SuccessAlert from '../../partials/SuccessAlert';
import ErrorAlert from '../../partials/ErrorAlert';

class Index extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    {
        this.props.setTagDefaults();
        this.props.listTags(1);
    }


    render()
    {
        return(
            <>
            <Breadcrumb/>
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
            <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium flex justify-between">
                <h3>list tags</h3>
                <Link to='tags/add' className="bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6">
                    Add<i className="fa fa-plus"></i>
                </Link>
            </header>
            <section className="overflow-x-auto w-full">
                <Spinner show={this.props.tag.list_spinner}/>
                <SuccessAlert msg={this.props.tag.success_message}/>
                <ErrorAlert msg={this.props.tag.error_message}/>
                <table className="min-w-full table-auto" >
                <thead className="justify-between">
                        <tr className="bg-gray-800">
                            <th className="px-16 py-2">
                                <span className="text-gray-300">#</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Title</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300" width="15%">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.tag.tags.data?(
                                this.props.tag.tags.data.map(item => <Row key={item.id} tag={item} />)
                            ) : null
                        }
                    </tbody>
                </table>
            </section>
            <Pagination data={this.props.tag.tags} onclick={this.props.listTags.bind(this)} />
            </section>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        tag: state.tag
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        listTags: (page) => dispatch(listTags(page)),
        setTagDefaults: () => dispatch(setTagDefaults())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
