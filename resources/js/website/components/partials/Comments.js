import React from 'react';
const Comments = (props) => {
    return (
        <div>
            {
                props.comments.map(comment =>
                <div key={comment.id} className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start  mb-4">
                    <div className="flex flex-row justify-center mr-2">
                        <img alt="avatar" width="48" height="48" className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"/>
                        <div>
                            <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">{comment.user.name}</h3>
                            <span>{comment.created_at}</span>
                        </div>
                        <p style={{ width: 90 +'%' }} className="text-gray-600 text-lg text-center md:text-left ">{comment.comment}</p>
                    </div>
                </div>)
            }
        </div>


    )
};
export default Comments;
