const { ethers } = require("ethers");
 
const sender_pvt_key =
 "01f4c8d7e68443f90b3e0ca9b6f1be195a5daa43695cb2a62e17e78fb6892bea";
 
let provider = ethers.getDefaultProvider("sepolia");
let sender_wallet = new ethers.Wallet(sender_pvt_key, provider);