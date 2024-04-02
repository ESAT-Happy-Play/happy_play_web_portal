import React from 'react';
import CustomVerticalTab from '../../components/tab/CustomVerticalTab';
import CustomTab from '../../components/tab/CustomTab';
import { useSelector, useDispatch } from "react-redux";
import './ProfileInfo.scss';
import GameInfo from './GameInfo';
import PersonalDetails from './PersonalDetails';
import Address from './Address';
import ProfessionalInfo from './ProfessionalInfo';
import Notification from './Notification';
import Password from './Password';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { logOut } from '../../redux/reducers/auth/AuthReducer';
import { removeAppState } from '../../redux/reducers/AppStateReducer';
import { removeMenuState } from '../../redux/reducers/MenuStateReducer';
import { removeAccountState } from '../../redux/reducers/AccountStateReducer';
import NotificationDialog from "../../components/Dialog/NotificationDialog";
import MessageDialog from "../../components/Dialog/MessageDialog";


const ProfileInfo = () => {
      
    const [openNotify, setOpenNotify] = React.useState(false);
    const handleNotifyOpen = () => { setOpenNotify(true); }
    const handleNotifyClose = () => { setOpenNotify(false); }
    const dispatch = useDispatch();
    const { appState } = useSelector((state) => state.appState);
    const [openConfirmLogoutSubmit, setConfirmLogoutSubmit] = React.useState(false);
    const handleLogoutSubmitOpen = () => { setConfirmLogoutSubmit(true); };
    const handleLogoutSubmitClose = () => { setConfirmLogoutSubmit(false); };
    const handleLogoutOkay = async () => {
      dispatch(logOut());
      dispatch(removeAppState());
      dispatch(removeMenuState());
      dispatch(removeAccountState());
  
      window.location.href = '/login';
    };

  
  return (
    <div className='container'>
      <div className="tab-container">
        <CustomVerticalTab            
          tabList={[
            { label: <img src={require('../../assets/Default Profile Pic.png')} className="profilePic" title="Your Profile Picture" />, isHeader: true },
            { label: "About You", isHeader: true },
            { label: "Game Info", Component: <GameInfo /> },
            { label: "Personal Details", Component: <PersonalDetails /> },
            { label: "Address", Component: <Address /> },
            { label: "Professional Info", Component: <ProfessionalInfo /> },
            { label: "Preferences", isHeader: true },
            { label: "Notifications", Component: <Notification /> },
            { label: "Account", isHeader: true },
            { label: "Password", Component: <Password /> },
          ]} />
        <div className="verticalTabfFoot" onClick={ handleLogoutSubmitOpen } > 
          <div className="Logout" >
          <span >Logout</span>
          </div>
        </div>
        <MessageDialog
            isOpenMessage={ openConfirmLogoutSubmit } 
            handleCloseMessage={ handleLogoutSubmitClose } 
            handleOkay={ handleLogoutOkay } 
            title={ "Logout" } 
            content={ "Are you sure you want to logout?" }
            color={ "error" } />
        
        <NotificationDialog isOpen={ openNotify } handleClose={ handleNotifyClose } />
      </div>   
    </div>       
  )
}

export default ProfileInfo