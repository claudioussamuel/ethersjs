const { ethers } = require("ethers");

const sender_pvt_key = "";
const receiver_address = "0x24DB7353C66b43ef6B26e9C5b411AD5b956214E5";
const amount = "0.05";

let provider = ethers.getDefaultProvider("goerli");

let sender_wallet = new ethers.Wallet(sender_pvt_key, provider);

console.log(sender_wallet.address);

let tx = {
    to: receiver_address,
    value: ethers.utils.parseEther(amount),
   };

   sender_wallet.sendTransaction(tx).then((result) => {
    console.log("txHash", result.hash);
   });