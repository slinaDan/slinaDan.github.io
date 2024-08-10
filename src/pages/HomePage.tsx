import '/src/style/homePage.css'
import '/src/App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from '/src/hooks/useTonConnect';
import { useCounterContract } from '/src/hooks/useCounterContract';
import { TopNav } from "/src/components/TopNav";
import { Footer } from "/src/components/Footer";
import { Tabbar } from "/src/components/Tabbar";
import { LinkWalletModal } from "/src/components/LinkWalletModal";
import Modal from 'react-modal';  
import { useState   } from "react"
// import { useHistory   } from "react-router-dom"
import '@twa-dev/sdk';
Modal.setAppElement('#root'); // 确保Modal在正确的DOM元素内渲染 
export function HomePage() {
	 const [modalIsOpen, setIsOpen] = useState(false);  
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();
    // let history = useHistory();
   // let navigate = useNavigate();  
 
	function toDeal() {
		console.log('点击进入');
		// console.log(useHistory );
		  // navigate('/deal');  
		 // history.push('/Deal'); // 程序化跳转到About页面
	}
	function toLinkWallet() {
		setIsOpen(true)
		// console.log(useHistory );
		  // navigate('/deal');  
		 // history.push('/Deal'); // 程序化跳转到About页面
	}
  return (
    <div className='homepage'>
     <TopNav />
    <div className="transaction flex1">
    	<img className="transImg" src="src/images/coin.png" alt=""></img>
    	<div className="flex1">
    		<span className="fs-24">交易</span>
    		<span>您可以在TON链上买卖交易代币</span>
    	</div>
    	<div  className="btn flex" onClick={toDeal}>点击进入</div>
		
    </div>
    <div className="flex-bw menuWrap">
    	<div className="flex1">
    		<img src="src/images/icon1.png" alt=""></img>
    		<span>池子</span>
    	</div>
    	<div className="flex1">
    		<img src="src/images/icon2.png" alt=""></img>
    		<span>销毁</span>
    	</div>
    	<div className="flex1">
    		<img src="src/images/icon3.png" alt=""></img>
    		<span>桥</span>
    	</div>
    </div>
    <div className="transferWrap flex-bw">
    	<img src="src/images/invite.png" alt=""></img>
    	<span>社区代币</span>
    	<div className="btn flex">去兑换</div>
    </div>
    <div className="linkWallet flex" id="linkWallet" onClick={toLinkWallet}>
    	<img src="src/images/link.png" alt=""></img>
    	<span>链接钱包</span>
    </div>
   <Footer />
    <Tabbar />
	 <Modal  
	        isOpen={modalIsOpen}  
	        onRequestClose={() => setIsOpen(false)}  
	      >  
		   <LinkWalletModal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} />  
	      </Modal>  
   
    <div className="popup " id="popup1">
    	<div className="modal1 flex1" id="modal1">
    		<span>恭喜您获得</span>
    		<div className="flex">
    			<span className="amount">10000</span>
    			<span>代币A</span>
    		</div>
    		<img src="" alt=""></img>
    		<div className="btn flex" id="receive">开心收下</div>
    	</div>
    </div>
    </div>
  );
}

