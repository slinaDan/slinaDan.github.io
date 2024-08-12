import '/src/style/homePage.css'
import '/src/App.css';
import { TopNav } from "/src/components/TopNav";
import '@twa-dev/sdk';

export function HomePage() {
	
  return (
    <div className='homepage'>
     <TopNav />
   
   888888888888888888888
    <div className="transferWrap flex-bw">
    	<img src="src/images/invite.png" alt=""></img>
    	<span>社区代币</span>
    	<div className="btn flex">去兑换</div>
    </div>
    <div className="linkWallet flex" id="linkWallet">
    	<img src="src/images/link.png" alt=""></img>
    	<span>链接钱包</span>
    </div>
    <div className="joinus">
    	<div className="fs-20">加入我们的社区</div>
    	<div className="flex-bw">
    		<div className="flex1">
    			<span>探索</span>
    			<ul>
    				<li>标题名称</li>
    				<li>标题名称</li>
    				<li>标题名称</li>
    			</ul>
    		</div>
    		<div className="flex1">
    			<span>用户</span>
    			<ul>
    				<li>标题名称</li>
    				<li>标题名称</li>
    				<li>标题名称</li>
    			</ul>
    		</div>
    		<div className="flex1">
    			<span>开发</span>
    			<ul>
    				<li>标题名称</li>
    				<li>标题名称</li>
    				<li>标题名称</li>
    			</ul>
    		</div>
    	</div>
    </div>
    <div className="tabbar flex">
    	<div className="flex1">
    		<img src="src/images/tab1.png" alt=""></img>
    		<span>交易</span>
    	</div>
    	<div className="flex1">
    		<img src="src/images/tab2.png" alt=""></img>
    		<span>池子</span>
    	</div>
    	<div className="flex1">
    		<img src="src/images/tab3.png" alt=""></img>
    		<span>销毁</span>
    	</div>
    	<div className="flex1">
    		<img src="src/images/tab4.png" alt=""></img>
    		<span>社区</span>
    	</div>
    	<div className="flex1">
    		<img src="src/images/tab5.png" alt=""></img>
    		<span>代币</span>
    	</div>
    </div>
    <div className="popup" id="popup">
    	<div className="modal flex1" id="modal">
    		<img id="close-popup" className="close" src="src/images/close.png" alt=""></img>
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
    </div>
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
    <div className="popup rightPopup" id="morePopup">
    	<div className="moreModal flex1" id="moreModal">
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
    </div>
    </div>
  );
}

