import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
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
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
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

export default () =>
    <BootstrapTable keyField='id' data={ products } columns={ columns } />