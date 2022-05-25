import React, { useEffect, useState } from 'react';
import "./datatable.scss";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getRoom } from "../../context/redux/room/ApiRoomCall";

const DatetableRoom = () => {

    const rooms = useSelector(state => state.rooms.rooms);
    const dispatch = useDispatch();

    useEffect(() => {
        getRoom(dispatch);
    }, [dispatch]);

    const columns = [
        { field: "_id", headerName: "ID", width: 70 },
        {
            field: "title",
            headerName: "Title",
            width: 230,
        },
        {
            field: "desc",
            headerName: "Description",
            width: 200,
        },
        {
            field: "price",
            headerName: "Price",
            width: 100,
        },
        {
            field: "maxPeople",
            headerName: "Max People",
            width: 100,
        },
    ];

    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New Room
                <Link to="/rooms/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={rooms}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                getRowId={row => row._id}
            />
        </div>
    )
}

export default DatetableRoom