import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./list.css";
import { userColumns } from "./datatbale";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { auth, db } from "../../Utils/firbase";
import { useNavigate } from "react-router-dom";
import {  signOut } from "firebase/auth";
import toast from "react-hot-toast";


const columns = userColumns;

const List = () => {
  const [data, SetData] = useState([]);

  const navgate = useNavigate();

  const fetchData = async () => {
    let list = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
  
    });
    SetData(list);
  };

  const handelDelete = async (id) => {
    await deleteDoc(doc(db, "users", id));
    SetData(data.filter((item) => item.id !== id));
    toast.success('User Deleted')
  };

  const handelStatus = async (id) => {
    const userDocRef = doc(db, "users", id);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const currentuser = userDoc.data().status;
    
      const newStatus = currentuser === "active" ? "inactive" : "active";

      await updateDoc(userDocRef, {
        status: newStatus,
      });
    }
    toast.success('Status Chnage Reload to View')
  };


  const handelSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navgate("/")
    }).catch((error) => {
      // An error happened.
    });
    
  }
  useEffect(() => {
    fetchData();
  }, []);

  const statusColumn = {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  };

  const actioncolumn = {
    field: "action",
    headerName: "Action",
    width: 260,
    renderCell: (params) => {
      return (
        <div className="cellActions">
          <button
            onClick={() => handelStatus(params.row.id)}
            className="ChangeState"
          >
            Change Status
          </button>
          <button
            onClick={() => handelDelete(params.row.id)}
            className="delButton"
          >
            Delete
          </button>
        </div>
      );
    },
  };

  return (
    <div className="list">
      <div className="listContainer">
        <div className="header">
          <h1 className="heading">User List </h1>
          <div>
            <button onClick={handelSignOut}>LogOut</button>
            <button onClick={() => navgate("/users/new")}>Add New User</button>
          </div>
        </div>
        <div className="datatable">
          <DataGrid
            rows={data}
           
            columns={columns.concat(statusColumn, actioncolumn)}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            // checkboxSelection
            disableRowSelectionOnClick {...data} 
          />
        </div>
      </div>
    </div>
  );
};

export default List;
