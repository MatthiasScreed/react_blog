import React from 'react';
import {connect} from 'react-redux';
import {
    addTag, setTagDefaults, handleTagTitle,
    listAllTags
} from '../../../store/actions/TagAction';
import TagForm from './TagForm';

class AddModal extends React.Component
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
    }
    handleChange(e) {
        e.preventDefault();
        this.props.handleTitleChange(e.target.value);
    }
    handleSubmit(e) {
        e.preventDefault();
        let self = this;
        this.props.addTag(this.props.tag.tag.title, function () {
            // reset title
            self.props.handleTitleChange('');
            setTimeout(() => {
                // close modal
                self.props.close_modal();
                // reset defaults
                self.props.setTagDefaults();
                // refetch tags
                self.props.listAllTags();
            }, 2000);
        });


    }

    render()
    {
        return(
            <div className={`modal fade` + (this.props.show_modal==true?' in':'')} style={{display: (this.props.show_modal==true?'block':'none')}} id="modal-default">
            <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3">
                <form role="form" method="post" onSubmit={this.handleSubmit}>
                    <div className="flex justify-between border-b border-gray-100 px-5 py-4">
                        <div>
                            <i className="fa fa-exclamation-triangle text-orange-500"></i>
                            <span className="font-bold text-gray-700 text-lg">Add new tag</span>
                          </div>
                          <div>
                            <button><i className="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150" onClick={this.props.close_modal}></i></button>
                          </div>
                    </div>
                    <div className="px-10 py-5 text-gray-600">
                        <TagForm tag={this.props.tag} onchange={this.handleChange}/>
                    </div>
                    <div className="px-5 py-4 flex justify-end">
                        <button type="button" className="bg-orange-500 mr-1 rounded text-sm py-2 px-3 text-white hover:bg-orange-600 transition duration-150" onClick={this.props.close_modal}>Close</button>
                        <button type="submit" className="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150">Save</button>
                      </div>
                </form>
            </div>
        </div>
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
        handleTitleChange: (title) => dispatch(handleTagTitle(title)),
        addTag: (title, cb) => dispatch(addTag(title, cb)),
        setTagDefaults: () => dispatch(setTagDefaults()),
        listAllTags: () => dispatch(listAllTags()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
