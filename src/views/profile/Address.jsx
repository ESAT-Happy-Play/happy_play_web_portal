import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import { TextField, MenuItem } from "@mui/material";
import Link from '@mui/material/Link';
import './ProfileInfo.scss';
import Stack from '@mui/material/Stack';
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
import Select from 'react-select'
import { toast } from 'react-toastify';
import { GETFetch } from "../../api/ApiFetchBuilder";
import PageLoader from "../../components/widget/PageLoader";
// import { GetStoreObject } from "../../helper/Helpers/";
import { UserProfileService } from '../../services/UserProfileService';

const Address = () => {
  // let loginObj = GetStoreObject("auth");
  const [pageLoader, setPageLoader] = useState(false);
  const [AddressInfo, setAddressInfoState] = useState([]);
  // const dispatch = useDispatch();
  const AddressInfoHandler = async (data) => {
    UserProfileService.getProfileInfo(data).then((response) => {
    if(response) {
      setAddressInfoState(response.data.account);
      console.log(response.data.account);
    }
  });
  }

  useEffect(() => {
    AddressInfoHandler();
  }, []);
  
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
                        isEditing ? <TextField disabled placeholder={AddressInfo.presentRegion} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={AddressInfo.presentRegion} defaultValue={AddressInfo.presentRegion} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Province</label>
                      { 
                        isEditing ? <TextField disabled placeholder={AddressInfo.presentProvince} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={AddressInfo.presentProvince} defaultValue={AddressInfo.presentProvince} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Municipality</label>
                      { 
                        isEditing ? <TextField disabled placeholder={AddressInfo.presentMunicipality} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={AddressInfo.presentMunicipality} defaultValue={AddressInfo.presentMunicipality} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Barangay</label>
                      { 
                        isEditing ? <TextField disabled placeholder={AddressInfo.presentBarangay} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={AddressInfo.presentBarangay} defaultValue={AddressInfo.presentBarangay} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Street/Purok</label>
                      { 
                        isEditing ? <TextField disabled placeholder={AddressInfo.presentStreetOrPurok} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={AddressInfo.presentStreetOrPurok} defaultValue={AddressInfo.presentStreetOrPurok} sx={{ width: "50%" }} variant="outlined" size="small" />
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
                        isEditing ? <TextField disabled placeholder={AddressInfo.permanentRegion} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={AddressInfo.permanentRegion} defaultValue={AddressInfo.permanentRegion} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Province</label>
                      { 
                        isEditing ? <TextField disabled placeholder={AddressInfo.permanentProvince} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={AddressInfo.permanentProvince} defaultValue={AddressInfo.permanentProvince} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Municipality</label>
                      { 
                        isEditing ? <TextField disabled placeholder={AddressInfo.permanentMunicipality} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={AddressInfo.permanentMunicipality} defaultValue={AddressInfo.permanentMunicipality} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Barangay</label>
                      { 
                        isEditing ? <TextField disabled placeholder={AddressInfo.permanentBarangay} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={AddressInfo.permanentBarangay} defaultValue={AddressInfo.permanentBarangay} sx={{ width: "50%" }} variant="outlined" size="small" />
                      }
                  </div>

                  <div style={{display:'flex', gap:'8px', marginBottom:'10px'}}>
                    <label style={{width:'150px', marginTop:''}}>Street/Purok</label>
                      { 
                        isEditing ? <TextField disabled placeholder={AddressInfo.permanentStreetOrPurok} sx={{ width: "50%" }} variant="outlined" size="small" /> :
                        <TextField placeholder={AddressInfo.permanentStreetOrPurok} defaultValue={AddressInfo.permanentStreetOrPurok} sx={{ width: "50%" }} variant="outlined" size="small" />
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