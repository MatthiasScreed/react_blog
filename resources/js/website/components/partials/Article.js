import React from "react";
import {Link} from "react-router-dom";
const Article = (props) => {
    return (
        <div className="mt-6">
        <div className="bg-white  rounded-lg mb-6 tracking-wide">
            <div className="md:flex-shrink-0">
                <div className="">
                    <img src={process.env.MIX_APP_URL + `/uploads/${props.post.image}`} alt=""
                            className="w-full object-cover h-64 rounded-lg rounded-b-none"/>
                </div>
            </div>
            <div className="px-4 py-4 md:px-10">
                <div className="flex justify-between items-center">
                    <span className="font-light text-gray-600">{props.post.date_formatted}</span>
                    <Link to={`/category/${props.post.category.id}/${props.post.category.slug}`} className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">{props.post.category.title}</Link>
                </div>
                <h2 className="font-bold text-lg">{props.post.title}</h2>
                <p className="text-sm text-gray-700 px-2 py-4 mr-1">{props.post.excerpt}</p>
                <div className="flex items-center justify-between mt-2 mx-6">
                    <Link to={`/p/${props.post.id}/${props.post.slug}` } className="text-blue-500 hover:underline">Show More</Link>
                </div>
            </div>
        </div>
        </div>
    );
};
export default Article;
