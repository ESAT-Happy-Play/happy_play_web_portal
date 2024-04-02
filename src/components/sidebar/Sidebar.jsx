import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import React, { useEffect, useState } from 'react';

import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { logOut } from '../../redux/reducers/auth/AuthReducer';
import { removeAppState } from '../../redux/reducers/AppStateReducer';
import { removeMenuState } from '../../redux/reducers/MenuStateReducer';
import { removeAccountState } from '../../redux/reducers/AccountStateReducer';
import { removeCompanyState } from '../../redux/reducers/CompanyStateReducer';
import { removeGameState } from '../../redux/reducers/GamesStateReducer';

import MessageDialog from "../Dialog/MessageDialog";

import "./sidebar.scss"
import { GetJWTStoreObject, GetStoreObject } from "../../helper/Helpers";
import { Routes, Route, Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // auth api response object
  let storeObj = GetStoreObject("auth");
  const [selected, setSelected] = useState("");
  // TODO: connect to actual notification number
  const mockNotifCounter = 4;

  return (
    <div className="sidebar">
      <div className="top">
        <img src={require('../../assets/happy-play-logo.png')} className="logo" title="Esat Logo" />
      </div>
      {
        appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} selected={selected == route.sidebarProps.displayText} setSelected={setSelected} />
            ) : (
              <SidebarItem item={route} hasIcon={true} key={index} />
            )
          ) : null
        ))
      }
      <div className="foot">
        <div className="notifications">
          <NotificationsIcon className='icon' />
          <p>Notifications</p>
          {mockNotifCounter > 0 &&
            <p className="notif-count">{mockNotifCounter}</p>
          }
        </div>
        <a href="/profile">  
          <div className="profile">
            <AccountCircleRoundedIcon className='icon' />
            <div>
              <h2>Username</h2>
              Your Profile
            </div>
            <ArrowForwardIosIcon className='icon' />
          </div>
        </a>
        <div className="trademark">
          <h2>Web Dashboard</h2>
          <p>Happy Play © 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;