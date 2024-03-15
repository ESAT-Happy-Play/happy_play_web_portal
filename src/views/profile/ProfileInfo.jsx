import React from 'react';
import CustomVerticalTab from '../../components/tab/CustomVerticalTab';
import CustomTab from '../../components/tab/CustomTab';
import { useSelector, useDispatch } from "react-redux";
import './ProfileInfo.scss';
import { companyGames } from '../../helper/mocks';
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

  const tabs =
    companyGames.map((game) => {
      return {
        label: game.gameName,
        Component:
          <div className="tab-container">
            <div className="top">
                <img src={require('../../assets/happy-play-logo.png')} className="logo" title="Esat Logo" />
            </div>
            <CustomVerticalTab            
              tabList={[
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
            <div className="foot">
            <div className="item itemLogout" onClick={ handleLogoutSubmitOpen }>
            <span style={{fontSize:'16px',marginRight:'10px',color:'white'}}>Logout</span> 
            <ExitToAppIcon className='icon' />
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
      }
    });

  return (
    <div className='container'>
      <CustomTab tabList={tabs} />
    </div>
  )
}

export default ProfileInfo