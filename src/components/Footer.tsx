import '/src/style/homePage.css'
import '/src/App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from '/src/hooks/useTonConnect';
import { useCounterContract } from '/src/hooks/useCounterContract';
import '@twa-dev/sdk';

export function Footer() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();
	function toDeal() {
		console.log('点击进入');
	}
  return (
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
  );
}

