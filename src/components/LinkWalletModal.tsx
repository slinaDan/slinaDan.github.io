import React, { useState } from 'react';  
import Modal from 'react-modal';  

 import '/src/App.css';
  import '/src/style/homePage.css'
export function LinkWalletModal({ isOpen, onRequestClose }) {  
	 if (!isOpen) return null;  
  return (  
    <div className="MyModal flex1">  
     	<img id="close-popup" className="close" onClick={onRequestClose} src="src/images/close.png" alt=""></img>
     	<span>连接您的钱包</span>
     	<span className="fs-12 mt-20">请使用您的手机钱包扫描</span>
     	<img className="qrcode" src="" alt=""></img>
     	<span className="fs-12 mb-20">可用钱包</span>
     	<div className="flex">
     		<div className="flex1">
     			<img src="src/images/wallet1.png" alt=""></img>
     			<span>Wallet inTelegram</span>
     		</div>
     		<div className="flex1">
     			<img src="src/images/wallet2.png" alt=""></img>
     			<span>Tonkeeper Popular</span>
     		</div>
     		<div className="flex1">
     			<img src="src/images/wallet2.png" alt=""></img>
     			<span>Bitget Wal...</span>
     		</div>
     		<div className="flex1">
     			<img src="src/images/wallet3.png" alt=""></img>
     			<span>View allWallets</span>
     		</div>
     	</div>
     </div>
  );  
}