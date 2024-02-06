import React, { useEffect, useState } from "react";
import "./New.css";
import { DriveFolderUpload } from "@mui/icons-material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../Utils/firbase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const New = () => {
  const [file, Setfile] = useState("");
  const [data, Setdata] = useState({});
  const navigate=useNavigate()

  const handelChange = (e) => {
    const { name, value, files } = e.target;
    Setdata((prevData) => ({
      ...prevData,
      [name]: name === "file" ? files[0] : value,
    }));
   
  };

  const uploadFile = () => {
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    
          Setdata((prev)=>({...prev, img:downloadURL}))
        });
      }
    );
  };

  const handelAdd = async (e) => {
    e.preventDefault();
    const res = await addDoc(collection(db, "users"), {
      ...data,
      status: "active",
      timeStamp: serverTimestamp(),
    });
    toast.success('User Added ')
    navigate("/users")
   
  };

  useEffect(() => {
    file && uploadFile();
  }, [file]);

  return (
    <div className="newContainer">
      <div className="top">
        <h1>Add new User</h1>
      </div>
      <div className="container">
        <div className="left">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://placehold.co/800?text=Image&font=roboto"
            }
          />
        </div>
        <div className="right">
          <form onSubmit={handelAdd}>
            <div className="formInput">
              <label htmlFor="file">
                Image:{" "}
                <DriveFolderUpload
                  className="icon"
                  style={{ cursor: "pointer" }}
                />
              </label>
              <input
                onChange={(e) => Setfile(e.target.files[0])}
                type="file"
                name="file"
                id="file"
                style={{ display: "none" }}
              />
            </div>
            <div className="formInput">
              <label> Username</label>
              <input
                type="text"
                name="Username"
                placeholder="it's jon123"
                onChange={handelChange}
              />
            </div>
            <div className="formInput">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder=""
                onChange={handelChange}
              />
            </div>
            <div className="formInput">
              <label>Email</label>
              <input
                type="text"
                name="Email"
                placeholder="it's jon123"
                onChange={handelChange}
              />
            </div>
            <div className="formInput">
              <label>Date</label>
              <input name="date" type="date" onChange={handelChange} />
            </div>
            <button type="submit" className="save">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
