import React, { Component } from 'react';
import { MDBBtn, MDBDataTable, MDBTable} from 'mdbreact';

const DatatablePage = () => {
    const data = {
        columns: [
            {
                label: 'Container Id',
                field: 'id',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Number of items',
                field: 'number',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Manufacturer Name',
                field: 'manufacturer',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Item Details',
                field: 'items',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Address',
                field: 'address',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Status',
                field: 'status',
                sort: 'asc',
                width: 200
            }
        ],
        rows: [
            {
                id: 'C10M10',
                number: '2',
                manufacturer: 'Lorem',
                items: 'Lorem Ipsum',
                address: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
                // status: <MDBBtn color="blue" size="sm">More Info</MDBBtn>
            },
            {
                id: 'C20M20',
                number: '3',
                manufacturer: 'Lorem',
                items: 'Lorem Ipsum',
                address: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
                // status: <MDBBtn color="blue" size="sm">More Info</MDBBtn>
            },
            {
                id: 'C30M30',
                number: '1',
                manufacturer: 'Lorem',
                items: 'Lorem Ipsum',
                address: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
                // status: <MDBBtn color="blue" size="sm">More Info</MDBBtn>
            },
            {
                id: 'C40M40',
                number: '6',
                manufacturer: 'Lorem',
                items: 'Lorem Ipsum',
                address: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
                // status: <MDBBtn color="blue" size="sm">More Info</MDBBtn>
            },
            {
                id: 'C50M50',
                number: '5',
                manufacturer: 'Lorem',
                items: 'Lorem Ipsum',
                address: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
                // status: <MDBBtn color="blue" size="sm">More Info</MDBBtn>
            },
        ]
    };

    return (
        <div className="container pt-5 pb-5" >
            <MDBTable btn>
                <MDBDataTable
                    striped
                    bordered
                    small
                    data={data}
                />
            </MDBTable>
        </div >
    );
}


export default DatatablePage;