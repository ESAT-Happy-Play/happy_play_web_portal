import "./userverification.scss";

import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";

import PageLoader from "../../../components/widget/PageLoader";
import { toast } from 'react-toastify';
import VerificationList from "../../../components/table/userVerification/VerificationList";

import { GETFetch } from "../../../api/ApiFetchBuilder";
import CustomVerticalTab from "../../../components/tab/CustomVerticalTab";
import { UserVerificationTable } from "./UserVerificationTable";

const UserVerification = () => {
  /**
   * constants and functions
   */
  let _UserAgentCode = "0202"; // Agent as default
  let _UserPlayerCode = "0301"; // Agent as default

  const [pageLoader, setPageLoader] = useState(false);
  const [userCode, setuserCode] = useState(_UserAgentCode);
  const [usersForV, setusersForV] = useState([]);

  const handleVerificationData = async () => {
    setPageLoader(true);
    let url = `${process.env.REACT_APP_API_URL}/users/forverification?usercode=${userCode}`;
    let response = await GETFetch(url);
    setPageLoader(false);

    if (response.status) {
      setusersForV(response.data.usersForVerification);
    }

    if (!response.status) {
      toast.error(response.data.errorMessage);
    }
  }

  // trigger call API endpoint if state change
  useEffect(() => {
    handleVerificationData();
  }, [userCode]);

  const handleClick = async (elem, code) => {
    let listClass = document.getElementsByClassName('active-b')
    // remove all class active to the list
    for (let i = 0; i < listClass.length; i++) {
      listClass[i].classList.remove("active-b");
    }

    // now add active to curren selected 
    elem.target.classList.add("active-b");

    setuserCode(code);
  }

  const playerlist = [
    { name: "Player 1", date: "Jan 11, 2024" },
    { name: "Player 2", date: "Jan 11, 2024" },
    { name: "Player 3", date: "Jan 12, 2024" },
    { name: "Player 4", date: "Jan 12, 2024" },
    { name: "Player 11", date: "Jan 11, 2024" },
    { name: "Player 12", date: "Jan 11, 2024" },
    { name: "Player 13", date: "Jan 12, 2024" },
    { name: "Player 14", date: "Jan 12, 2024" },
  ];

  const agentlist = [
    { name: "Agent 1", date: "Jan 11, 2024" },
    { name: "Agent 2", date: "Jan 11, 2024" },
    { name: "Agent 4", date: "Jan 12, 2024" },
    { name: "Agent 11", date: "Jan 11, 2024" },
    { name: "Agent 12", date: "Jan 11, 2024" },
    { name: "Agent 14", date: "Jan 12, 2024" },
    { name: "Agent 17", date: "Jan 11, 2024" },
    { name: "Agent 18", date: "Jan 11, 2024" },
    { name: "Agent 19", date: "Jan 12, 2024" },
  ];

  return (
    <div className="verificationPage">
      <div className="tab-container">
        <div className="tab-header">
          <h1>User Verification</h1>
        </div>
        <CustomVerticalTab
          tabList={
            [{
              label: "Agents",
              Component: <UserVerificationTable data={agentlist} />
            },
            {
              label: "Players",
              Component: <UserVerificationTable data={playerlist} />
            }]
          }
        />
      </div>
    </div>
  )
}

export default UserVerification
