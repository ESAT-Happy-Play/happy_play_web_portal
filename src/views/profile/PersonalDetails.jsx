import React, { useState, useEffect } from 'react';
import { TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
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
import { ConfirmMessage } from "../../components/mui/modals";

import Button from '@mui/material/Button';
import './ProfileInfo.scss';
import Select from 'react-select'
import { toast } from 'react-toastify';
import { GETFetch } from "../../api/ApiFetchBuilder";
import PageLoader from "../../components/widget/PageLoader";

import { UserProfileService } from '../../services/UserProfileService';

const PersonalInfo = () => {
  const [pageLoader, setPageLoader] = useState(false);
  const [personalInfo, setPersonalInfoState] = useState([]);
  // const dispatch = useDispatch();
  const PersonalInfoHandler = async (data) => {
    UserProfileService.getProfileInfo(data).then((response) => {
    if(response) {
      setPersonalInfoState(response.data.account);
      console.log(response.data.account);
    }
  });
  }

  useEffect(() => {
    PersonalInfoHandler();
  }, []);

  const [isEditing, setIsEditing] = React.useState(true);
  const toggleEdit = () => {
    setIsEditing(!isEditing)
  };

  const [formData, setFormData] = React.useState({
    firstName: personalInfo.firstName,
    middleName: personalInfo.middleName,
    lastName: personalInfo.lastName,
    birthDate: personalInfo.birthDate,
    gender: personalInfo.gender,
    martialStatus: personalInfo.martialStatus,
    bloodType: personalInfo.bloodType,
    nationality: personalInfo.nationality
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  };

  // Confiration dialog message for add company
  const [openConfirmSubmit, setConfirmSubmit] = React.useState(false);
  const handleSubmitOpen = () => { setConfirmSubmit(true); };
  const handleSubmitClose = () => { setConfirmSubmit(false); };
  const handleSubmitOkay = async () => {
    setPageLoader(true);    
    console.log(formData);
    UserProfileService.updatePersonalDetails(formData)
    .then((resp) => {
      if (resp) {
        toast.success(`${formData.firstName} added successfully.`);
        handleSubmitClose();
        //reload page after 2 sec
        setTimeout(function() {
          window.location.reload(false);
        }, 2000);
      }
      setPageLoader(false);
    });
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
          <div className="PersonalInfo-details">
          <div className="div-cont">
          <form noValidate>
              <List component="nav">
                  <ListItemText primary="Present Address" sx={{ paddingBottom: "20px" }}/>
                  <List component="div" style={{ paddingLeft: '15px', textAlign:'left', marginRight:'10px'}}>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>FirstName</label>
                      { 
                        isEditing ? <TextField disabled placeholder={personalInfo.firstName} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={personalInfo.firstName} name="firstName" value={personalInfo.firstName} onChange={handleChange} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  <hr/>
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Middlename</label>
                      { 
                        isEditing ? <TextField disabled placeholder={personalInfo.middleName} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={personalInfo.middleName} name="middleName" value={personalInfo.middleName} onChange={handleChange} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>
                  
                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Lastname</label>
                      { 
                        isEditing ? <TextField disabled placeholder={personalInfo.lastName} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={personalInfo.lastName} name="lastName" value={personalInfo.lastName} onChange={handleChange} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Birth Date</label>
                      { 
                        isEditing ? <TextField disabled placeholder={personalInfo.birthDate} sx={{ width: "50%" }} variant="outlined" size="small" />  :
                        <TextField type="date" name="birthDate" value={"MM-DD-YYYY"} onChange={handleChange} sx={{ width: "50%" }} variant="outlined" size="small"/>
                      }
                  </div>
                  
                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Gender</label>
                      { 
                        isEditing ? <TextField disabled placeholder={personalInfo.gender} defaultValue={personalInfo.gender}  sx={{ width: "50%" }} variant="outlined" size="small"/>  :
                        <Select placeholder={personalInfo.gender} name="gender" defaultValue={personalInfo.gender} options={genders} onChange={handleChange} sx={{ width: "50%" }} variant="outlined" size="small"/>
                      }
                  </div>
                  
                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Civil Status</label>
                      { 
                        isEditing ? <TextField disabled placeholder={personalInfo.martialStatus} defaultValue={personalInfo.martialStatus}  sx={{ width: "50%" }} variant="outlined" size="small"/>  :
                        <Select placeholder={personalInfo.martialStatus} name="martialStatus" defaultValue={personalInfo.martialStatus} onChange={handleChange} options={civilStatuses} sx={{ width: "50%" }} variant="outlined" size="small"/>
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Blood Type</label>
                      { 
                        isEditing ? <TextField disabled placeholder={personalInfo.bloodType} defaultValue={personalInfo.bloodType}  sx={{ width: "50%" }} variant="outlined" size="small"/>  :
                        <Select placeholder={personalInfo.bloodType} name="bloodType" defaultValue={personalInfo.bloodType} onChange={handleChange} options={bloodTypes} sx={{ width: "50%" }} variant="outlined" size="small"/>
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Nationality</label>
                      { 
                        isEditing ? <TextField disabled placeholder={personalInfo.nationality} defaultValue={personalInfo.nationality}  sx={{ width: "50%" }} variant="outlined" size="small"/>  :
                        <Select placeholder={personalInfo.nationality} name="nationality" defaultValue={personalInfo.nationality} onChange={handleChange} options={nationalities} sx={{ width: "50%" }} variant="outlined" size="small"/>
                      }
                  </div>

                  </List>
              </List>
            </form>         
            </div>       
          </div>
          <div className='form-footer'>
            { isEditing ? 
              <Button variant="outlined" size="medium" onClick={toggleEdit}> Edit <EditIcon /> </Button> 
              :
              <Stack direction="row" spacing={2}>
                  <Button variant="outlined" size="medium" onClick={handleSubmitOpen}> Update <SaveIcon /> </Button> 
                  <Button variant="outlined" size="medium" onClick={toggleEdit}> Cancel <CancelIcon /> </Button> 
              </Stack>
            }            
          </div>
        </div>
      </div>
      <PageLoader isLoadingPage={ pageLoader } />
      <ConfirmMessage 
        isOpenMessage={ openConfirmSubmit } 
        handleCloseMessage={ handleSubmitClose } 
        handleOkay={ handleSubmitOkay } 
        title={ "Confirmation" } 
        content={ "Are you sure change your personal details?" }
        color={ "success" }
        isLoading={ pageLoader }/>
    </div>    
  )
}

export default PersonalInfo