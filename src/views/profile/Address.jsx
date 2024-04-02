import React, { useState, useEffect } from 'react';
import { TextField, MenuItem } from "@mui/material";
import './ProfileInfo.scss';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

import Button from '@mui/material/Button';
import PageLoader from "../../components/widget/PageLoader";
import { UserProfileService } from '../../services/UserProfileService';
import { GetStoreObject } from "../../helper/Helpers";

const Address = () => {    
  let accountData = GetStoreObject("accountInfo");
  const [pageLoader, setPageLoader] = useState(false);
  
  const [isEditing, setIsEditing] = React.useState(true);
  const toggleEdit = () => {
    setIsEditing(!isEditing)
  };

  return (
    <div className="divprofile">
      <div className="divright">
        <div className="div-r-content">
          <div className="Address-details">
            <div className="div-cont">
              <List component="nav">
                  <ListItemText primary="Present Address" sx={{ paddingBottom: "20px" }}/>
                  <List component="div" style={{ paddingLeft: '15px', textAlign:'left', marginRight:'10px'}}>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Region</label>
                      { 
                        isEditing ? <TextField disabled placeholder={accountData.data.presentRegion} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={accountData.data.presentRegion} defaultValue={accountData.data.presentRegion} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Province</label>
                      { 
                        isEditing ? <TextField disabled placeholder={accountData.data.presentProvince} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={accountData.data.presentProvince} defaultValue={accountData.data.presentProvince} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Municipality</label>
                      { 
                        isEditing ? <TextField disabled placeholder={accountData.data.presentMunicipality} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={accountData.data.presentMunicipality} defaultValue={accountData.data.presentMunicipality} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Barangay</label>
                      { 
                        isEditing ? <TextField disabled placeholder={accountData.data.presentBarangay} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={accountData.data.presentBarangay} defaultValue={accountData.data.presentBarangay} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Street/Purok</label>
                      { 
                        isEditing ? <TextField disabled placeholder={accountData.data.presentStreetOrPurok} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={accountData.data.presentStreetOrPurok} defaultValue={accountData.data.presentStreetOrPurok} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>
                  </List>
              </List>
            
            </div>
            <div className="div-cont">
              <List component="nav">
              <ListItemText primary="Permanent Address" sx={{ padding: "20px 0 20px 0" }}/>
                <List component="div" style={{ paddingLeft: '15px', textAlign:'left', marginRight:'10px'}}>
                <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Region</label>
                      { 
                        isEditing ? <TextField disabled placeholder={accountData.data.permanentRegion} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={accountData.data.permanentRegion} defaultValue={accountData.data.permanentRegion} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Province</label>
                      { 
                        isEditing ? <TextField disabled placeholder={accountData.data.permanentProvince} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={accountData.data.permanentProvince} defaultValue={accountData.data.permanentProvince} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Municipality</label>
                      { 
                        isEditing ? <TextField disabled placeholder={accountData.data.permanentMunicipality} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={accountData.data.permanentMunicipality} defaultValue={accountData.data.permanentMunicipality} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Barangay</label>
                      { 
                        isEditing ? <TextField disabled placeholder={accountData.data.permanentBarangay} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={accountData.data.permanentBarangay} defaultValue={accountData.data.permanentBarangay} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Street/Purok</label>
                      { 
                        isEditing ? <TextField disabled placeholder={accountData.data.permanentStreetOrPurok} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={accountData.data.permanentStreetOrPurok} defaultValue={accountData.data.permanentStreetOrPurok} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>
                </List>
              </List>
            </div>
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
      </div>
      <PageLoader isLoadingPage={ pageLoader } />
    </div>
  )
}

export default Address