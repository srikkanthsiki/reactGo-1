import React, { Component } from 'react';
import { Label } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import axios from 'axios';


// const products = [{
//     id: 1,
//     name: 'Product1',
//     price: 120
// }, {
//     id: 2,
//     name: 'Product2',
//     price: 80
// }, {
//     id: 3,
//     name: 'Product1',
//     price: 120
// }, {
//     id: 4,
//     name: 'sds',
//     price: 80
// }];

const columns = [{
    dataField: 'node',
    text: 'Node',
    filter: textFilter()
}, {
    dataField: 'stepctx',
    text: 'Steps',
    filter: textFilter()
}, {
    dataField: 'time',
    text: 'Times',
    filter: textFilter()
}, {
    dataField: 'log',
    text: 'Log',
    filter: textFilter()
}];

class AccessList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: {},
            entries: []
        };
    }

    componentDidMount() {
        // const settings = {
        //     mode: "no-cors",
        //     headers: new Headers({
        //         "x-rundeck-auth-token": "nRnrwaGyW62q26H2YqpHj0vl4v22UqYY",
        //         "Cache-Control": "no-cache",
        //         "Postman-Token": "18599a2e-4ea8-42df-acdb-0f859ca4127f"
        //     })
        // }
        axios({
            crossdomain: true,
            method: 'get',
            url: 'https://rundeck.apple.com/api/17/execution/396913/output?format=json&authtoken=9bdd2b73de65',
            headers: {
                'x-rundeck-auth-token': '9bdd2b73de65'
            }
        })
            .then(
            (res) => {
                console.log(res);
                this.setState({
                    isLoaded: true,
                    items: res.data,
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }


    render() {
        const { error, isLoaded,entries,items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div >
                    <h2>
                        <div><Label>{items.id}</Label><Label bsStyle="danger">{items.execState}</Label></div>
                    </h2>
                    <link rel="stylesheet"
                          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"/>
                    <BootstrapTable keyField="id" data={items.entries} columns={columns} filter={filterFactory()}/>
                </div>

            );
        }
    }

}
module.exports = AccessList;
