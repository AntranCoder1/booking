import React, { useEffect, useState } from 'react';
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getHotels, deleteHotel } from '../../context/redux/hotel/ApiHotelCall';

const DatatableHotel = ({ columns }) => {

    const hotels = useSelector(state => state.hotels.hotels);

    const dispatch = useDispatch();

    useEffect(() => {
        getHotels(dispatch)
    }, [dispatch]);

    const [data, setData] = useState(hotels);

    const handleDelete = async (id) => {
        deleteHotel(dispatch, id);
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={"/hotels/" + params.row._id} style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row._id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={columns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                getRowId={row => row._id}
            />
        </div>
    )
}

export default DatatableHotel