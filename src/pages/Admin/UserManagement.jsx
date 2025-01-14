import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Layouts/AdminLayout";
import Table from "../../components/shared/Table";
import { Avatar } from "@mui/material";
import { dashboardData } from "../../../constants/SampleData";
import {transformImage} from '../../lib/features.js'
const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell:(params)=>(
        <Avatar alt={params.row.name} src={params.row.avatar}></Avatar>
    )
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "username",
    headerName: "UserName",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "friends",
    headerName: "Friends",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "groups",
    headerName: "Groups",
    headerClassName: "table-header",
    width: 200,
  },
];
const UserManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(()=>{
    setRows(dashboardData.users.map((i)=> ({...i , id: i._id , avatar : transformImage(i.avatar,50),})));
  },[])

  return (
    <AdminLayout>
      <Table heading={"All Users"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};
export default UserManagement;
