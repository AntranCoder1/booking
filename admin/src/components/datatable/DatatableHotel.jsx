import React, { useEffect, useState } from 'react';
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getHotel } from "../../context/redux/hotel/ApiHotelCall";

const DatatableHotel = () => {

    const hotels = useSelector(state => state.hotels.hotels);
    const dispatch = useDispatch();

    useEffect(() => {
        getHotel(dispatch);
    }, [dispatch]);

    const columns = [
        { field: "_id", headerName: "ID", width: 250 },
        {
            field: "name",
            headerName: "Name",
            width: 150,
        },
        {
            field: "type",
            headerName: "Type",
            width: 100,
        },
        {
            field: "title",
            headerName: "Title",
            width: 230,
        },
        {
            field: "city",
            headerName: "City",
            width: 100,
        },
    ];

    useEffect(() => {
        document.title = "Booking - Admin - Hotels"
    })

    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New Hotel
                <Link to="/hotels/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={hotels}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                getRowId={row => row._id}
            />
        </div>
    )
}

export default DatatableHotel