import React, { useState } from 'react';  
import Modal from 'react-modal';  

 import '/src/App.css';
  import '/src/style/homePage.css'
export function MoreModal({ isOpen,closeModal }) {  
  return (  
     	<div className="moreModal flex1" id="moreModal" >
     		<span className="bold">Babydogeswap</span>
     		<div className="walletBtn flex">
     			<span>钱包地址：0x564df...23</span>
     			<img src="src/images/copy.png" alt=""></img>
     		</div>
     		<div className="flex-bw">
     			<span>首页</span>
     			<img src="src/images/right.png" alt=""></img>
     		</div>
     		<div className="flex-bw">
     			<span>我的资产</span>
     			<img src="src/images/right.png" alt=""></img>
     		</div>
     		<div className="flex-bw">
     			<span>排行榜</span>
     			<img src="src/images/right.png" alt=""></img>
     		</div>
     		<div className="flex-bw">
     			<span>邀请</span>
     			<img src="src/images/right.png" alt=""></img>
     		</div>
     	</div>
  );  
}