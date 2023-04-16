const Web3 = require("web3");

async function sendEther() {
  const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
  const web3 = new Web3(provider);

  const transact = await web3.eth.sendTransaction({
    from: "0xaA97349519BDf8495070dF59A00CD97A9446A617",
    to: "0x1CF53a1034f2061d47468C37B5e2e3DC9807abC9",
    value: web3.utils.toWei("10", "ether"),
  });
  console.log(transact);
}
sendEther();
