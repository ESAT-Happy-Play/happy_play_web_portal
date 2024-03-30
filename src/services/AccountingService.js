import { toast } from 'react-toastify';
// import ApiService from './ApiService';
import withdrawal from './../mock_data/accounting/withdrawals.json';
import axios from 'axios';


//THIS IS A TEMPLATE CURRENTLY USING JSON MOCK DATA
//MUST REPLACE FUNCTION REQUEST/RESPONSE ONCE ACCOUNTING API IS READY
export const AccountingService = {
    getPaginateDeposits: (keyword, pageNum, pageSize) => {
        let data = {
            pagedQuery: {
                search: keyword,
                pageNumber: pageNum,
                pageSize: pageSize,
                sortOrder: true
            }
        }
        const filteredData = withdrawal.filter((e) => e.transactionID.startsWith(keyword) || e.displayName.startsWith(keyword) || e.amount.startsWith(keyword))
        return filteredData;
    },
    getDeposits: async () => {
        await axios.get('./../mock_data/accounting/deposits.json');
    },
    updateDeposit: async () => {
        await axios.putForm('./../mock_data/accounting/deposits.json');
    },
    getWithdrawals: async () => {
        await axios.get('./../mock_data/accounting/withdrawals.json');
    },
    getAssets: async () => {
        await axios.get('./../mock_data/accounting/assets.json');
    },
    getBets: async (int) => {
        if(int == 1){
            await axios.get('./../mock_data/accounting/bets_regular.json');
        }
        if(int == 2){
            await axios.get('./../mock_data/accounting/bets_jackpot33.json');
        }
        if(int == 3){
            await axios.get('./../mock_data/accounting/bets_jackpot34.json');
        }
        else{
            toast.error("Sorry, unsuccessfull gateway communication.");
        }        
    }
}