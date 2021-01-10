import React from 'react';
class Breadcrumb extends React.Component
{
    render()
    {
        return (
                <ol className="breadcrumb m-4">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                    <li className="active">Dashboard</li>
                </ol>
        )
    }
}
export default Breadcrumb;
