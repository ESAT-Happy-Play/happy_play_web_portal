import React, { useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import './ProfileInfo.scss';

import Button from '@mui/material/Button';
import PageLoader from "../../components/widget/PageLoader";
import { GetStoreObject } from "../../helper/Helpers";

const GameInfo = () => {  
  let accountData = GetStoreObject("accountInfo");
  const [pageLoader, setPageLoader] = useState(false);

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
                  { 
                    accountData.data.mobileNumber 
                    // (gameInfo !== null) ? <TextField disabled defaultValue={gameInfo.mobileNumber} variant="outlined" size="small" fullWidth /> : "..."
                  }
                  </div>
                </td>
              </tr>
              <tr>
                <td> Display Name</td>
                <td colSpan={2}>
                  { accountData.data.firstName+" "+accountData.data.lastName
                  /* { (gameInfo.firstname !== null) ? <TextField disabled defaultValue={gameInfo.firstname} variant="outlined" size="small" /> : "RUFF" }
                  { (gameInfo.lastname !== null) ? <TextField disabled defaultValue={gameInfo.lastname} variant="outlined" size="small" /> : "NOT" } */}
                </td>
              </tr>
              <tr>
                <td> Birthday </td>
                <td> 
                  { accountData.data.birthDate }
                  {/* <TextField disabled type="date" defaultValue={"MM-DD-YYYY"} variant="outlined" size="small" fullWidth /> */}
                </td>
              </tr>
              <tr>
                <td> Branch Name </td>
                <td>
                  { accountData.data.branchName }
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