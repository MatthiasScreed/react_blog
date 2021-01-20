import React from 'react';
const disabledStyle = {
  color: '#ccc'
};

class PaginationItem extends React.Component {

    constructor(props)
    {
        super(props);
    }

    paginate(e) {
        e.preventDefault();

        this.props.onclick(this.props.page);
    }

    render () {
        <a href="#" rel={this.props.rel} onClick={this.paginate.bind(this) } className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" style={{color: !this.props.enabled?'#ccc':''}}>
          {this.props.title}
        </a>
    }
}
export default PaginationItem;
