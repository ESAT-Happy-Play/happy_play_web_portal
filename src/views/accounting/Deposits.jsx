import "./Accounting.scss";

import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import { toast } from 'react-toastify';

import { TableSearchBar, CompanyList} from "../../components/mui/tables";
import { ConfirmMessage, AddEditCompany } from "../../components/mui/modals";
import { AccountingService } from "../../services";
import { DepositsList } from "../../components/mui/tables/accounting/DepositsList";

export const Deposits = () => {
  /**
   * Deposits table list constants and functions
   */
  let _PAGESIZE = 5;
  const [pageLoader, setPageLoader] = useState(false);

  // deposits table state
  const [depositsSearchValue, setDepositsSearchValue] = useState('');
  const [pageNumber, setpageNumber] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  const [pageSize, setpageSize] = useState(_PAGESIZE);
  const [deposits, setDeposits] = useState([]);
  const [clickCounter, setclickCounter] = useState(0);

  const handleLoadDeposits = () => {
    setPageLoader(true);
    AccountingService.getPaginateDeposits(depositsSearchValue, pageNumber, pageSize);
  }

  // trigger call API endpoint if state change
  useEffect(() => {
    handleLoadDeposits();
  }, [clickCounter]);

  // On click search company
  const handleDepositsSearch = (event, value) => { 
    setDepositsSearchValue(value);
    setpageNumber(1);
    setpageSize(_PAGESIZE);
    setclickCounter(clickCounter + 1);
  }

  // Trigger on search company empty
  const handleDepositsSearchEmpty = (event, value) => {
    if (value === "") {
      setDepositsSearchValue("");
      setpageNumber(1);
      setpageSize(_PAGESIZE);
      setclickCounter(clickCounter + 1);
    }
  }

  // handle company table next page
  const handleDepositsChangePage = (event, newPage) => {
    setpageNumber(newPage + 1);
    setclickCounter(clickCounter + 1);
  }

  // handle company table change page size
  const handleDepositsRowsPerPage = (event) => {
    setpageSize(+event.target.value);
    setpageNumber(1);
    setclickCounter(clickCounter + 1);
  }

  // Add company dialog
  const [openAddCompany, setAddCompany] = React.useState(false);
  const handleAddCompanyOpen = () => { setAddCompany(true); };
  const handleAddCompanyClose = () => { setAddCompany(false); };

  const [formData, setFormData] = React.useState({});
  const handleCallback = (data) => {
    console.log(data);
    setFormData(data)
    handleSubmitOpen();
  }

  // Confiration dialog message for add company
  const [openConfirmSubmit, setConfirmSubmit] = React.useState(false);
  const handleSubmitOpen = () => { setConfirmSubmit(true); };
  const handleSubmitClose = () => { setConfirmSubmit(false); };
  const handleSubmitOkay = async () => {
    setPageLoader(true);
    AccountingService.updateDeposit(formData)
    .then((resp) => {
      if (resp) {
        toast.success(`${formData.transactionID} : ${formData.displayName} added successfully.`);
        handleSubmitClose();
        handleAddCompanyClose();

        //reload page after 2 sec
        setTimeout(function() {
          window.location.reload(false);
        }, 2000);
      }
      setPageLoader(false);
    });
  };

  return (
    <div className="div-table">
      <div className="div-container">
        <div className="div-head">
          <h2 className="title">Deposits</h2>
          <Button variant="outlined" size="medium" onClick={ handleAddCompanyOpen }>
            New Deposit <AddIcon />
          </Button>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <div></div>
          <div className="div-content" style={{width:'50%'}}>
            <div className="div-search">
              <TableSearchBar handleSearch={handleDepositsSearch} handleSearchEmpty={handleDepositsSearchEmpty} searchTitle="Search" />
            </div>
          </div>
        </div>
        <DepositsList
          listData={deposits}
          totalCount={ totalRows }
          rowsPerPage={handleDepositsRowsPerPage}
          changePage={ handleDepositsChangePage }
          pageNumber = { (pageNumber === 0) ? pageNumber : (pageNumber - 1) }
          pageSize = { pageSize }
          isLoading = { pageLoader }
        />
      </div>

      <AddEditCompany isOpen={ openAddCompany } handleClose={ handleAddCompanyClose } handleCallback={handleCallback} />
      <ConfirmMessage 
        isOpenMessage={ openConfirmSubmit } 
        handleCloseMessage={ handleSubmitClose } 
        handleOkay={ handleSubmitOkay } 
        title={ "Confirmation" } 
        content={ "Are you sure you want to add new company?" }
        color={ "success" }
        isLoading={ pageLoader }/>
    </div>
  )
}

export default Deposits