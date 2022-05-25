import React from 'react';
import "./list.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DatetableRoom from '../../components/datatable/DatetableRoom';

const ListRoom = () => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <DatetableRoom />
            </div>
        </div>
    )
}

export default ListRoom