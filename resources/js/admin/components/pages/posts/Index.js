import React from 'react';
import Breadcrumb from '../../partials/Breadcrump';


class Index extends React.Component
{
    render()
    {
        return (
            <>
                <Breadcrumb/>
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
                <section className="content">
                    list posts
                </section>
            </section>
            </>
        );
    }
}

export default Index;
