import React from 'react';
import { connect } from 'react-redux';
import Breadcrumb from '../../partials/Breadcrumb';
import { listCategories, setCategoryDefaults } from '../../../store/actions/CategoryActions';
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
        super(props)
    }
    componentDidMount(){
        this.props.setCategoryDefaults();

        this.props.listCategories(1);
    }

    render()
    {
        return(
            <>
            <Breadcrumb/>
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">

            <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
                <h3>All categories</h3>
                <Link to='/categories/add' className="bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6">
                    Add<i className="fa fa-plus"></i>
                </Link>
            </header>
            <section className="overflow-x-auto w-full">
                <Spinner show={this.props.categories.list_spinner}/>
                <SuccessAlert msg={this.props.categories.success_message}/>
                <ErrorAlert msg={this.props.categories.error_message}/>
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
                                <span className="text-gray-300">Slug</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300" width="15%">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.categories.categories.data?(
                                this.props.categories.categories.data.map(item => <Row Key={item.id} category={item} />)
                            ): null
                        }
                    </tbody>
                </table>
            </section>
            <Pagination data={this.props.categories.categories} onclick={this.props.listCategories.bind(this)} />
        </section>
        </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        categories: state.category
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        listCategories: (page) => dispatch(listCategories(page)),
        setCategoryDefaults: () => dispatch(setCategoryDefaults())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
