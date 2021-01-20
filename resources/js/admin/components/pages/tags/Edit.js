import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import Breadcrumb from '../../partials/Breadcrump';
import TagForm from './TagForm';

// actions
import {showTag, setTagDefaults, handleTagTitle, editTag} from '../../../store/actions/TagAction';


class Edit extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount()
    {
        this.props.setTagDefaults();
        this.props.showTag(this.props.match.params.id);
    }
    handleChange(e) {
        e.preventDefault();
        this.props.handleTitleChange(e.target.value);
    }
    handleSubmit(e) {
        e.preventDefault();
        let self = this;
        this.props.editTag(this.props.tag.tag.title,
            this.props.match.params.id, function () {
                // reset title
                self.props.handleTitleChange('');
                // redirect
                setTimeout(() => self.props.history.push('/tags'), 2000);
            });
    }

    render()
    {
        return(
            <>
            <Breadcrumb/>
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
                <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium flex justify-between">
                    <h3>Edit tags</h3>
                    <Link to='/tags' className="uppercase px-8 py-2 rounded bg-yellow-300 text-yellow-600 max-w-max shadow-sm hover:shadow-lg"><i className="fa fa-arrow-left"></i> Return back</Link>
                </header>
                <section className="overflow-x-auto w-full">
                    <form role="form" method="post" onSubmit={this.handleSubmit}>
                        <TagForm tag={this.props.tag} onchange={this.handleChange}/>
                        <button type="submit"
                            class="w-full py-3 mt-10 bg-gray-800 rounded-sm
                            font-medium text-white uppercase
                            focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            Update
                        </button>
                    </form>
                </section>
            </section>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        tag: state.tag
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        showTag: (id) => dispatch(showTag(id)),
        handleTitleChange: (title) => dispatch(handleTagTitle(title)),
        editTag: (title, id, cb) => dispatch(editTag(title, id, cb)),
        setTagDefaults: () => dispatch(setTagDefaults())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
