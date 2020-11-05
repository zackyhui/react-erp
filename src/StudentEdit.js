import React, { useState, useEffect } from "react";

import ReturnButton from "./ReturnButton";
import { CircularProgress, Button } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import axios from "axios";

export default function StudentEdit(props) {
  const [studentInfo, updateStudentInfo] = useState({
    id: '',
    name: '',
    age: '',
    class: '',
  });
  // Student Info

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    /*
    fetch("http://laravel-erp/api/student/sid/" + props.sid)
      .then((response) => response.json())
      .then(([studentInfo]) => {
        updateStudentInfo(studentInfo);
        console.log(studentInfo);
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      });
      */
    axios({
      method: "GET",
      url: "http://laravel-erp/api/student/sid/" + props.sid,
    })
      .then((response) => {
        const api = response.data;
        console.log(api.data);

        const studentInfo = api.data;
        updateStudentInfo(studentInfo);

        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [props.sid]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(studentInfo);
    axios({
      method: 'PUT',
      url: 'http://laravel-erp/api/student/' + props.sid,
      params: {
        name: studentInfo.name,
        age: studentInfo.age,
        class: studentInfo.class,
      },

    })
      .then((response) => {
        alert('SID: '+studentInfo.id + ' is updated success!');
      })
  };

  const handleFormChange = (event) => {
    const { name, value} = event.target;
    updateStudentInfo({
      ...studentInfo,
      [name]: value
    });
  }

  useEffect(() => {
    console.log(studentInfo);
  }, [studentInfo]);

  return (
    <>
      <h1>Student Edit for SID: {props.sid} </h1>
      <ReturnButton location="/students" />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                id="student-id"
                name="id"
                label="SID (cannot be changed)"
                value={studentInfo.id}
                disabled
              />
            </div>
            <div>
              <TextField
                id="student-name"
                name="name"
                label="Name"
                defaultValue={studentInfo.name}
                onChange={handleFormChange}
              />
            </div>
            <div>
              <TextField
                id="student-age"
                name="age"
                label="Age"
                defaultValue={studentInfo.age}
                onChange={handleFormChange}
              />
            </div>
            <div>
              <TextField
                id="student-class"
                name="class"
                label="Class"
                defaultValue={studentInfo.class}
                onChange={handleFormChange}
              />
            </div>
          

          <Button type="submit" variant="contained" color="primary">
            提交
          </Button>
          </form>
        </>
      )}
    </>
  );
}
