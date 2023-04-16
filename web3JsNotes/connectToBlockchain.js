const Web3 = require("web3");

async function connect() {
    // connect ganache to BC
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
    
    const web3 = new Web3(provider);

    //to fetch accounts
    const accounts = await web3.eth.getAccounts();
    
    //balance in terms of wei and eth
    const balanceWei = await web3.eth.getBalance(accounts[0]);
    const balanceEther = web3.utils.fromWei(balanceWei, "ether");
}
connect();