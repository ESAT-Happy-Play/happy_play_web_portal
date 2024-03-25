import React, { useState, useEffect } from 'react';
import { TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'; // Grid version 1
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
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
import './ProfileInfo.scss';
import Select from 'react-select'
import { toast } from 'react-toastify';
import { GETFetch } from "../../api/ApiFetchBuilder";
import PageLoader from "../../components/widget/PageLoader";

import { UserProfileService } from '../../services/UserProfileService';

const WorkInfo = () => {
  // let loginObj = GetStoreObject("auth");
  const [pageLoader, setPageLoader] = useState(false);
  const [workInfo, setWorkInfoState] = useState([]);
  // const dispatch = useDispatch();
  const WorkInfoHandler = async (data) => {
    UserProfileService.getProfileInfo(data).then((response) => {
    if(response) {
      setWorkInfoState(response.data.account);
      console.log(response.data.account);
    }
  });
  }

  useEffect(() => {
    WorkInfoHandler();
  }, []);

  const [isEditing, setIsEditing] = React.useState(true);
  const toggleEdit = () => {
    setIsEditing(!isEditing)
  };

  const validIDs = [
    { value: 'Passport', label: 'Passport'},
    { value: '(SSS) Social Security System', label: '(SSS) Social Security System'},
    { value: '(GSIS) Government Service Insurance System', label: '(GSIS) Government Service Insurance System'},
    { value: '(UMID) Unified Multi-Purpose Identification', label: '(UMID) Unified Multi-Purpose Identification'},
    { value: '(LTO) Drivers License', label: '(LTO) Drivers License'},
    { value: '(PRC) Professional Regulatory Commission', label: '(PRC) Professional Regulatory Commission'},
    { value: '(OWWA) Overseas Workers Welfare Administration', label: '(OWWA) Overseas Workers Welfare Administration'},
    { value: '(PNP) Philippine National Police', label: '(PNP) Philippine National Police'},
    { value: 'Airman License', label: 'Airman License'},
    { value: 'Postal ID', label: 'Postal ID' },
    { value: 'Seafarers Record Book', label: 'Seafarers Record Book'},
    { value: 'Senior Citizen', label: 'Senior Citizen'},
    { value: 'PWD', label: 'PWD'},
    { value: 'Solo Parent', label: 'Solo Parent'},
    { value: 'School ID', label: 'School ID'},
    { value: 'Others', label: 'Others'}
  ];

  return (
    <div className="divprofile">
      <div className="divright">
        <div className="div-cont">
          <p>Source of Income</p>
          <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
            { 
              isEditing ? <TextField disabled placeholder={workInfo.sourceOfIncome} sx={{ width: "50%" }} variant="outlined" size="small" /> :
              <TextField placeholder={workInfo.sourceOfIncome} defaultValue={workInfo.sourceOfIncome} sx={{ width: "50%" }} variant="outlined" size="small" />
            }
          </div>
        </div>
        <div className="div-cont">
          <p>Nature of Work</p>
            { 
              isEditing ? <TextField disabled placeholder={workInfo.natureOfWork} sx={{ width: "50%" }} variant="outlined" size="small" /> :
              <TextField placeholder={workInfo.natureOfWork} defaultValue={workInfo.natureOfWork} sx={{ width: "50%" }} variant="outlined" size="small" />
            }
        </div>
        <div className="div-cont">
          <p>Valid ID</p>
            { 
              isEditing ? <Select disabled placeholder={workInfo.validId} sx={{ width: "50%" }} options={validIDs} variant="outlined" size="small" /> :
              <Select placeholder={workInfo.validId} defaultValue={workInfo.validId} options={validIDs} variant="outlined" size="small" />
            }
        </div>
        <div className="div-cont">
          <p>ID Capture</p>
            { 
              isEditing ?
              <Grid container spacing={3} p={5}>
                <Grid xs={4}>
                  <p>Front of ID</p>
                  <img src={require('../../assets/logo192.png')} className="frontID" title="Front ID Pic" />
                </Grid>                
                <Grid xs={4}>
                  <p>Selfie</p>
                  <img src={require('../../assets/logo192.png')} className="backID" title="Back ID Pic" />
                </Grid>
                <Grid xs={4}>
                  <p>Selfie</p>
                  <img src={require('../../assets/logo192.png')} className="selfiePic" title="Your Selfie" />
                </Grid>
              </Grid> 
              :
              <Grid container spacing={3} p={5}>
                <Grid xs={4}>
                  <p>Front of ID</p>
                  <img src={require('../../assets/logo192.png')} className="frontID" title="Front ID Pic" />
                </Grid>                
                <Grid xs={4}>
                  <p>Selfie</p>
                  <img src={require('../../assets/logo192.png')} className="backID" title="Back ID Pic" />
                </Grid>
                <Grid xs={4}>
                  <p>Selfie</p>
                  <img src={require('../../assets/logo192.png')} className="selfiePic" title="Your Selfie" />
                </Grid>
              </Grid>  
            }
        </div>
        <div className='form-footer'>
            { isEditing ? 
              <Button variant="outlined" size="medium" onClick={toggleEdit}> Edit <EditIcon /> </Button> 
              :
              <Stack direction="row" spacing={2}>
                  <Button variant="outlined" size="medium" onClick={toggleEdit}> Update <SaveIcon /> </Button> 
                  <Button variant="outlined" size="medium" onClick={toggleEdit}> Cancel <CancelIcon /> </Button> 
              </Stack>
            }            
          </div>
      </div>
      <PageLoader isLoadingPage={ pageLoader } />
    </div>
  )
}

export default WorkInfo