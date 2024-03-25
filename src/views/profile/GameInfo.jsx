import { styled } from '@mui/material/styles';
import React, { useState, useEffect, useDispatch} from 'react';
import { TextField, MenuItem } from "@mui/material";
import Link from '@mui/material/Link';
import { useForm } from 'react-hook-form';
import EditIcon from '@mui/icons-material/Edit';
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
import PageLoader from "../../components/widget/PageLoader";
import DefaultAddressWithData from "../../components/widget/address/DefaultAddressWithData";
import { UserProfileService } from '../../services/UserProfileService';
import { GetStoreObject } from "../../helper/Helpers";


const GameInfo = () => {
  let loginObj = GetStoreObject("auth");
  const [gameInfo, setGameInfoState] = useState([]);
  // const dispatch = useDispatch();
  const GameInfoHandler = async (data) => {
    UserProfileService.getProfileInfo(data).then((response) => {
    if(response) {
      setGameInfoState(response.data.account);
      console.log(response.data.account);
    }
  });
  }
  const [pageLoader, setPageLoader] = useState(false);
  
  const [birthPlaceOpen, setbirthPlaceOpen] = React.useState(true);
  
  useEffect(() => {
    GameInfoHandler();
  }, []);

  const [isEditing, setIsEditing] = React.useState(true);
  const toggleEdit = () => {
    setIsEditing(!isEditing)
  };

  return (
    <div className="divprofile">
      <div className="divleft">
        <br />
        <img src={require('../../assets/Default Profile Pic.png')} className="gameInfoProfilePic" title="Your Profile PIC" />
        <br />
      </div>
      <div className="divright">
        <div className="div-r-content">
          <div className="gameInfodetails">
            <table>
              <tr>
                <td> Mobile Number</td>
                <td colSpan={2}>
                  <div id="mobileNumber">
                  { gameInfo.mobileNumber  
                    // (gameInfo !== null) ? <TextField disabled defaultValue={gameInfo.mobileNumber} variant="outlined" size="small" fullWidth /> : "..."
                  }
                  </div>
                </td>
              </tr>
              <tr>
                <td> Display Name</td>
                <td colSpan={2}>
                  { gameInfo.firstName+" "+gameInfo.lastName
                  /* { (gameInfo.firstname !== null) ? <TextField disabled defaultValue={gameInfo.firstname} variant="outlined" size="small" /> : "RUFF" }
                  { (gameInfo.lastname !== null) ? <TextField disabled defaultValue={gameInfo.lastname} variant="outlined" size="small" /> : "NOT" } */}
                </td>
              </tr>
              <tr>
                <td> Birthday </td>
                <td> 
                  { gameInfo.birthDate }
                  {/* <TextField disabled type="date" defaultValue={"MM-DD-YYYY"} variant="outlined" size="small" fullWidth /> */}
                </td>
              </tr>
              <tr>
                <td> Branch Name </td>
                <td>
                  { gameInfo.branchName }
                  {/* { (gameInfo.branchName !== null) ? <TextField disabled defaultValue={gameInfo.branchName} variant="outlined" size="small" /> : "TESTBranch" } */}
                </td>
              </tr>
              <tr>
                <td> Registration Date</td>
                <td> 
                  To be implemented
                  {/* { (gameInfo.registerdate !== null) ? <TextField disabled type="date" defaultValue={"MM-DD-YYYY"} variant="outlined" size="small" fullWidth /> : "MM-DD-YYYY" } */}
                </td>
              </tr>
              <tr>
                <td> Role </td>
                <td>
                  Must patch UserTypeId to type of Role
                  {/* { (gameInfo.role !== null) ? <TextField disabled defaultValue={gameInfo.role} variant="outlined" size="small" /> : "TESTrole" } */}
                </td>
              </tr>
            </table>            
          </div>
          <div className='form-footer'>
            <Button variant="outlined" size="medium" onClick={toggleEdit}>
              Edit <EditIcon />
            </Button>
          </div>
        </div>
      </div>
      <PageLoader isLoadingPage={ pageLoader } />
    </div>
  )
}

export default GameInfo