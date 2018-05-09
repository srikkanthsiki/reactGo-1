import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

var products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
},{
    id: 3,
    name: "Product1",
    price: 120
}, {
    id: 4,
    name: "sds",
    price: 80
}];

const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];

class AccessList extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div >
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"></link>
                <BootstrapTable keyField='id' data={ products } columns={ columns } />
            </div>
        );
    }

}
module.exports = AccessList;