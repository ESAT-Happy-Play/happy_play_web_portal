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

  return (
    <div className="divprofile">
      <div className="divright">
        <div className="div-cont">
          <p>Source of Income</p>
          <TextField disabled defaultValue="Employee" variant="outlined" size="small" fullWidth />
        </div>
        <div className="div-cont">
          <p>Nature of Work</p>
          <TextField disabled defaultValue="Infomation Technology" variant="outlined" size="small" fullWidth />
        </div>
        <div className="div-cont">
            <List component="nav" style={{marginTop:'10px'}}>
              <ListItemButton onClick={handleValidIDClick}>
                <ListItemText primary="Valid ID" />
                {validIdOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={validIdOpen} timeout="auto" unmountOnExit>
                <List component="div" style={{ paddingLeft: '15px', textAlign:'left', marginRight:'25px'}}>
                  <div style={{display:'flex',gap:'5px',justifyContent:'center'}}>
                    <div style={{width:'100%'}}>
                      <div className="div-imgUpload">
                          <img className="imgFiles" src={require('../../assets/logo192.png')} salt="" />
                      </div>
                    </div>                    
                  </div>
                  <div style={{display:'flex',gap:'5px',justifyContent:'center'}}>
                    <div style={{width:'100%'}}>
                      <div className="div-imgUpload">
                          <img className="imgFiles" src={require('../../assets/logo192.png')} salt="" />
                      </div>
                    </div>                    
                  </div>
                </List>
              </Collapse>
            </List>
          </div>
      </div>
      <PageLoader isLoadingPage={ pageLoader } />
    </div>
  )
}

export default GameInfo