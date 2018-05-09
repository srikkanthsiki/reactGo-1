import React from 'react';
import '../css/components/Logs.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
},{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "sds",
    price: 80
}];
class AccessList extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <BootstrapTable data={ products } striped hover condensed>
                    <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }

}
module.exports = AccessList;