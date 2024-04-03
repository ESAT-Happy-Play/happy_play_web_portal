import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import { TextField, MenuItem } from "@mui/material";
import Link from '@mui/material/Link';
import './ProfileInfo.scss';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Button from '@mui/material/Button';
import Select from 'react-select'
import { toast } from 'react-toastify';
import { GETFetch } from "../../api/ApiFetchBuilder";
import PageLoader from "../../components/widget/PageLoader";

// import { GetStoreObject } from "../../helper/Helpers/";

const GameInfo = () => {
  // let loginObj = GetStoreObject("auth");
  const [pageLoader, setPageLoader] = useState(false);

  const [birthPlaceOpen, setbirthPlaceOpen] = React.useState(true);
  const [userdata, setuserdata] = useState(null);

  const handleCurrentUserData = async () => {
    setPageLoader(true);
    let url = `${process.env.REACT_APP_API_URL}/users/currentuserdata`;
    let response = await GETFetch(url);
    setPageLoader(false);
    if(response.status) {
      setuserdata(response.data.loggedInUserData);
      console.log(response.data.loggedInUserData)
    }

    if(!response.status) {
      toast.error(response.data.errorMessage);
    }
  }

  // trigger call API endpoint if state change
  useEffect(() => {
    handleCurrentUserData();
  }, []);

  const handleBirthPlaceClick = () => {
    setbirthPlaceOpen(!birthPlaceOpen);
  };

  const [presentAddrOpen, setpresentAddrOpen] = React.useState(true);
  const handlePresentClick = () => {
    setpresentAddrOpen(!presentAddrOpen);
  };
  
  const [permanentAddrOpen, setpermanentAddrOpen] = React.useState(true);
  const handlePermanentClick = () => {
    setpermanentAddrOpen(!permanentAddrOpen);
  };

  const [validIdOpen, setvalidIdOpen] = React.useState(true);
  const handleValidIDClick = () => {
    setvalidIdOpen(!validIdOpen);
  };

  const [signatureOpen, setsignatureOpen] = React.useState(true);
  const handleSignatureClick = () => {
    setsignatureOpen(!signatureOpen);
  };

  const [profileImageOpen, setprofileImageOpen] = React.useState(true);
  const handleProfileImageClick = () => {
    setprofileImageOpen(!profileImageOpen);
  };

  const genders = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Others', label: 'Others' }
  ]
  const civilStatuses = [
    { value: 'Single', label: 'Single' },
    { value: 'Married', label: 'Married' },
    { value: 'Divorced', label: 'Divorced' },
    { value: 'Separated', label: 'Separated' }
  ]
  const nationalities = [
    { value: 'Local', label: 'Local' },
    { value: 'Foreign', label: 'Foreign' }
  ]
  const bloodTypes = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" }, 
    { value: "B+", label: "B+" },
    { value: "A-", label: "A-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" }
  ]


  return (
    <div className="divprofile">
      <div className="divright">
        <div className="div-r-content">
          <div className="GameInfo-details">
            <table>
              <tr>
                <td> FirstName</td>
                <td >
                  { 
                    (userdata !== null) ? <TextField disabled defaultValue={userdata.firstname} variant="outlined" size="small" /> :
                     <TextField disabled defaultValue="testFirstname" variant="outlined" size="small" />
                  }
                </td>
              </tr>
              <tr><td colSpan={2}><hr/></td></tr>
              <tr>
                <td> Middlename</td>
                <td >
                  { 
                    (userdata !== null) ? <TextField disabled defaultValue={userdata.middlename} variant="outlined" size="small" /> :
                     <TextField disabled defaultValue="testMiddlename" variant="outlined" size="small" />
                  }
                </td>
              </tr>
              <tr><td colSpan={2}><hr/></td></tr>
              <tr>
                <td> Lastname</td>
                <td >
                  { 
                    (userdata !== null) ? <TextField disabled defaultValue={userdata.middlename} variant="outlined" size="small" /> :
                     <TextField disabled defaultValue="testLastname" variant="outlined" size="small" />
                  }
                </td>
              </tr>
              <tr><td colSpan={2}><hr/></td></tr>
              <tr>
                <td> Birthday </td>
                <td> <TextField disabled type="date" defaultValue={"MM-DD-YYYY"} variant="outlined" size="small" fullWidth /></td>
                <hr/>
              </tr>
              <tr><td colSpan={2}><hr/></td></tr>
              <tr>
                <td> Gender </td>
                <td> <Select options={genders} /> </td>
              </tr>
              <tr><td colSpan={2}><hr/></td></tr>
              <tr>
                <td> Civil Status</td>
                <td> <Select options={civilStatuses} /> </td>
              </tr>
              <tr>
                <td> Blood type</td>
                <td> <Select options={bloodTypes} /> </td>
              </tr>
              <tr>
                <td> Nationality </td>
                <td> <Select options={nationalities} /> </td> 
              </tr>
            </table>            
          </div>
        </div>
      </div>
      <PageLoader isLoadingPage={ pageLoader } />
    </div>
  )
}

export default GameInfo