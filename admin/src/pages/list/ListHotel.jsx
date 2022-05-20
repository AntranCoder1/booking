import React from 'react';
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableHotel from '../../components/datatable/DatatableHotel';

const ListHotel = ({ columns }) => {
    return (
        <div className="list">
          <Sidebar/>
          <div className="listContainer">
            <Navbar/>
            <DatatableHotel columns={columns} />
          </div>
        </div>
    )
}

export default ListHotel