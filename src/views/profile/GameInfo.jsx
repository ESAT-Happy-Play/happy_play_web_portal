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
import { toast } from 'react-toastify';
import { GETFetch } from "../../api/ApiFetchBuilder";
import PageLoader from "../../components/widget/PageLoader";
import DefaultAddressWithData from "../../components/widget/address/DefaultAddressWithData";

import { GetStoreObject } from "../../helper/Helpers";

const GameInfo = () => {
  let loginObj = GetStoreObject("auth");
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
  return (
    <div className="divprofile">
      <div className="divleft">
        <br />
        <img src={require('../../assets/logo192.png')} className="ProfilePic" title="Your Profile PIC" />
        <br />
      </div>
      <div className="divright">
        <div className="div-r-content">
          <div className="GameInfo-details">
            <table>
              <tr>
                <td> Mobile Number</td>
                <td colSpan={2}>
                  {
                    (userdata !== null) ? <TextField disabled defaultValue={userdata.mobileNumber} variant="outlined" size="small" fullWidth /> : "..."
                  }
                </td>
              </tr>
              <tr>
                <td> Display Name</td>
                <td colSpan={2}>
                  { (userdata !== null) ? <TextField disabled defaultValue={userdata.firstname} variant="outlined" size="small" /> : "RUFF" }
                  { (userdata !== null) ? <TextField disabled defaultValue={userdata.lastname} variant="outlined" size="small" /> : "NOT" }
                </td>
              </tr>
              <tr>
                <td> Birthday </td>
                <td> <TextField disabled type="date" defaultValue={"MM-DD-YYYY"} variant="outlined" size="small" fullWidth /></td>
              </tr>
              <tr>
                <td> Branch Name </td>
                <td> { (userdata !== null) ? <TextField disabled defaultValue={userdata.branchName} variant="outlined" size="small" /> : "TESTBranch" } </td>
              </tr>
              <tr>
                <td> Registration Date</td>
                <td> { (userdata !== null) ? <TextField disabled type="date" defaultValue={"MM-DD-YYYY"} variant="outlined" size="small" fullWidth /> : "MM-DD-YYYY" } </td>
              </tr>
              <tr>
                <td> Role </td>
                <td> { (userdata !== null) ? <TextField disabled defaultValue={userdata.role} variant="outlined" size="small" /> : "TESTrole" } </td>
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