import React from 'react';
import PaginationItem from './PaginationItem';

class Pagination extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return this.props.data && this.props.data.total > this.props.data.per_page?(
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                    <PaginationItem title="Prev" page={this.props.data.current_page-1} enabled={this.props.data.current_page > 1} onclick={this.props.onclick} rel="prev" />
                    <PaginationItem title="Next" page={this.props.data.current_page+1} enabled={this.props.data.current_page < this.props.data.last_page} onclick={this.props.onclick} rel="next" />
                </div>
            </div>
        ) : null
    }
}

export default Pagination;
