import React from 'react';
import Breadcrumb from '../../partials/Breadcrump';


class Edit extends React.Component
{
    render()
    {
        return(
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
                <Breadcrumb/>
            <section className="content">
                Edit tags
            </section>
        </section>
        )
    }
}

export default Edit;
