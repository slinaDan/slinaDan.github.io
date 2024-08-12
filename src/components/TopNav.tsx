import '/src/style/homePage.css'
import '/src/App.css';
import { MoreModal } from "/src/components/MoreModal";
import Modal from 'react-modal'; 
import { useState   } from "react"
import '@twa-dev/sdk';

export function TopNav() {
   const [modalIsOpen, setIsOpen] = useState(false);  
	function showMenu() {
		setIsOpen(true)
	}
	function  closeModal() {
		console.log('关闭');
		setIsOpen(false)
	}
  return (
    <div className="topNav flex-bw">
    	<span className="bold fs-20">Babydogeswap</span>
    	<div className="flex">
    		<div className="flex notBind">未绑定</div>
    		<img className="menu" id="menu" onClick={showMenu} src="src/images/menu.png" alt=""></img>
    	</div>
		<Modal
		       isOpen={modalIsOpen}  
		       onRequestClose={closeModal} 
			   onClick={closeModal}
		     >  
				   <MoreModal isOpen={modalIsOpen}   onRequestClose={closeModal}  />  
		     </Modal>  
    </div>
  );
}

