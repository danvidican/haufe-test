import React, { Component } from 'react';

class DynamicSelect extends Component {
    constructor(props) {
        super(props)
    }

    handleChange = (event) => {
        let selectedValue = event.target.value;
        this.props.onSelectChange(selectedValue);
    }

    render() {
        let arrayOfData = this.props.arrayOfData;
        let options = arrayOfData.map((data) =>
            <option
                key={data._id}
                value={data._id}
            >
                {data.username}
            </option>
        );

        return (
            <select className="browser-default custom-select" onChange={this.handleChange}>
                <option>Select Item</option>
                {options}
            </select>

        )
    }
}

export default DynamicSelect;