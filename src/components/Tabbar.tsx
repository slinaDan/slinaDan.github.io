import '/src/style/homePage.css'
import '/src/App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from '/src/hooks/useTonConnect';
import { useCounterContract } from '/src/hooks/useCounterContract';
import '@twa-dev/sdk';

export function Tabbar() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();
	function toDeal() {
		console.log('点击进入');
	}
  return (
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
  );
}

