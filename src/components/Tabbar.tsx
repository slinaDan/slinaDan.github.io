import '/src/style/homePage.css'
import '/src/App.css';
import '@twa-dev/sdk';

export function Tabbar() {

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

