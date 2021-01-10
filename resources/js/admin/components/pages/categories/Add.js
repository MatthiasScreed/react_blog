import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// partials
import Breadcrumb from '../../partials/Breadcrumb';
import CategoryForm from './CategoryForm';
// actions
import { addCategory, setCategoryDefaults, handleCategoryTitle } from '../../../store/actions/CategoryActions';


class Add extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount()
    {
        this.props.setCategoryDefaults();
    }

    handleChange(e) {
        e.preventDefault();
        this.props.handleTitleChange(e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        let self = this;
        this.props.addCategory(this.props.categories.category.title, function () {
            // reset title
            self.props.handleTitleChange('');
            // redirect
            setTimeout(() => self.props.history.push('/categories'), 2000);
        });
    }

    render()
    {
        return(
            <>
            <Breadcrumb/>
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">

            <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
                <h3>Add categories</h3>
                <Link to='/categories' className="uppercase px-8 py-2 rounded bg-yellow-300 text-yellow-600 max-w-max shadow-sm hover:shadow-lg"><i className="fa fa-arrow-left"></i> Return back</Link>
            </header>
                <section className="overflow-x-auto w-full">
                    <form role="form" method="post" onSubmit={this.handleSubmit}>

                        <CategoryForm categories={this.props.categories} onchange={this.handleChange}/>
                        <button type="submit"
                            class="w-full py-3 mt-10 bg-gray-800 rounded-sm
                            font-medium text-white uppercase
                            focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            Login
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
        categories: state.category
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleTitleChange: (title) => dispatch(handleCategoryTitle(title)),
        addCategory: (title, cb) => dispatch(addCategory(title, cb)),
        setCategoryDefaults: () => dispatch(setCategoryDefaults())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Add);
