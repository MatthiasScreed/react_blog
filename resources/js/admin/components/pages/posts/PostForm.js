import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
import { Link } from 'react-router-dom';

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
            <>
             <Spinner show={this.props.create_update_spinner}/>
             <SuccessAlert msg={this.props.success_message}/>
             <ErrorAlert msg={this.props.error_message}/>

             <div className="flex w-full">
                 <div className="w-8/12 m-4 bg-white border border-gray-300 border-solid rounded shadow">
                    <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium flex justify-between">
                        <h3>{this.props.post.id!=""?'Edit post #'+this.props.post.id:'Add post'}</h3>
                        <Link to='/posts' className="uppercase px-8 py-2 rounded bg-yellow-500 text-blue-50 max-w-max shadow-sm hover:shadow-lg"><i className="fa fa-arrow-left"></i> Return back</Link>
                    </header>
                    <section className="overflow-x-auto w-full">
                    <label className="block border-gray-300 border-solid p-4">
                        <span className="block text-grey-darker text-sm font-bold mb-2">Post title</span>
                        <input type="text" className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" placeholder="Post title" onChange={this.props.handleFieldChange} value={this.props.post.title?this.props.post.title:''} name="title" />
                        {
                                    this.props.validation_errors.title!=null?(
                                    <div className="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2">
                                        <div class="text-red-500 rounded-full bg-white mr-3">
                                            <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                            </svg>
                                        </div>
                                        <div class="text-white max-w-xs ">
                                            {this.props.validation_errors.title[0]}
                                        </div>
                                    </div>):null
                        }
                    </label>
                    <label className="block border-gray-300 border-solid p-4">
                        <span className="block text-grey-darker text-sm font-bold mb-2">Content</span>
                        <CKEditor
                            name="content"
                            editor={ ClassicEditor }
                            data={this.props.post.content?this.props.post.content:''}
                            onReady={(editor) => { editor.setData(this.props.post.content?this.props.post.content:'') }}
                            onChange={this.props.handleCkeditorChange}
                        />
                        {
                                    this.props.validation_errors.content!=null?(
                                    <div className="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2">
                                        <div class="text-red-500 rounded-full bg-white mr-3">
                                            <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                            </svg>
                                        </div>
                                        <div class="text-white max-w-xs ">
                                            {this.props.validation_errors.content[0]}
                                        </div>
                                    </div>):null
                        }
                    </label>
                    </section>
                 </div>
                 <div className="w-4/12 m-4 bg-white border border-gray-300 border-solid rounded shadow">
                    <label className=" border-gray-300 border-solid p-4 flex justify-between">
                        <select name="category_id" id="cateory_id" type="text" className="shadow appearance-none border rounded h-12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"  onChange={this.props.handleFieldChange} value={this.props.post.category_id}>
                            <option value="">select category</option>
                                {
                                    this.props.all_categories.map(cat => {
                                        return (
                                            <option key={cat.id} value={cat.id}>{cat.title}</option>
                                        )
                                    })
                                }
                        </select>
                        <span className="input-group-btn">
                            <button type="button" className="bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6" onClick={this.props.openAddCategoryModal.bind(this)}><i className="fa fa-plus"></i> Add new category</button>
                        </span>
                                {
                                    this.props.validation_errors.category_id!=null?(
                                    <div className="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2">
                                        <div class="text-red-500 rounded-full bg-white mr-3">
                                            <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                            </svg>
                                        </div>
                                        <div class="text-white max-w-xs ">
                                            {this.props.validation_errors.category_id[0]}
                                        </div>
                                    </div>):null
                                }
                    </label>
                    <br/>
                    <label className="block border-gray-300 border-solid p-4">
                        <span className="block text-grey-darker text-sm font-bold mb-2">Tags</span>
                        <div>
                            {
                                this.props.all_tags.map(tag => {
                                    return (
                                        <div className="flex flex-col" key={tag.id}>
                                            <label className="inline-flex items-center mt-3">
                                                <input type="checkbox" name="tag[]" value={tag.id} onChange={this.props.handleFieldChange} checked={this.props.post.tags.includes(tag.id)} className="form-checkbox h-5 w-5 text-gray-600" />
                                                    <span className="ml-2 text-gray-700">{ tag.title }</span>
                                            </label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button type="button" className="bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6" onClick={this.props.openAddTagModal.bind(this)}><i className="fa fa-plus"></i> Add new tag</button>
                    </label>
                        {
                            this.props.post.image_url?(
                                <img src={this.props.post.image_url} width="100" height="80" />
                            ): null
                        }
                    <label className="block border-gray-300 border-solid p-4">
                        <span className="block text-grey-darker text-sm font-bold mb-2">Image</span>
                        <input type="file" name="image" id="image" className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" onChange={this.props.handleFieldChange} accept="image/*"/>
                        {
                                    this.props.validation_errors.image_url!=null?(
                                    <div className="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2">
                                        <div className="text-red-500 rounded-full bg-white mr-3">
                                            <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                            </svg>
                                        </div>
                                        <div class="text-white max-w-xs ">
                                            {this.props.validation_errors.image_url[0]}
                                        </div>
                                    </div>):null
                        }
                    </label>
                    <div className="flex justify-between p-4">
                        <div className="w-1/2">
                            <input type="button" name="publish" value="Publish" onClick={this.props.handleSave} className="bg-green-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-green-600 mr-6" />
                        </div>
                        <div className="w-1/2">
                            <input type="button" name="savedraft" value="Save draft" onClick={this.props.handleSave} className="bg-gray-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-600 mr-6" />
                        </div>
                        <input type="submit" ref={this.props.submitRef} style={{display: 'none'}} />
                    </div>
                 </div>
             </div>
            </>
        )
    }
}

export default Form;
