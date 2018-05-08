import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../css/components/Logs.css';


const products = [];

const qualityType = {
    0: 'good',
    1: 'bad',
    2: 'unknown'
};

function addProducts(quantity) {
    const startId = products.length;
    const startDate = new Date(2015, 0, 1);
    const endDate = new Date();
    for (let i = 0; i < quantity; i++) {
        const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
        const id = startId + i;
        products.push({
            id: id,
            name: 'Item name ' + id,
            quality: i % 3,
            price: Math.floor((Math.random() * 100) + 1),
            satisfaction: Math.floor(Math.random() * 6),
            inStockDate: date
        });
    }
}

addProducts(5);

function enumFormatter(cell, row, enumObject) {
    return enumObject[cell];
}

function dateFormatter(cell, row) {
    if (typeof cell !== 'object') {
        cell = new Date(cell);
    }

    return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
}

const satisfaction = [ 0, 1, 2, 3, 4, 5 ];

export default class Table extends React.Component {
    render() {
        return (
            <BootstrapTable data={ products }>
                <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}