const Web3 = require("web3");

async function read() {
  const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
  const web3 = new Web3(provider);

  // to read we need ABI and contractAddress

  const ABI = [
    {
      inputs: [],
      name: "value",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [],
      name: "x",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_x",
          type: "uint256",
        },
      ],
      name: "setX",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getX",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_x",
          type: "uint256",
        },
      ],
      name: "setXandReceiveEther",
      outputs: [],
      stateMutability: "payable",
      type: "function",
      payable: true,
    },
    {
      inputs: [],
      name: "getXandValue",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
  ];
  const contractAddress = "0x170D9fd69313D2dF8FAAe9469cE213034e1b0Eec";

  // create an object (instance) on an contract
  const contract = new web3.eth.Contract(ABI, contractAddress);

  const data = await contract.methods.getX().call();
  console.log(data);
}
read();
