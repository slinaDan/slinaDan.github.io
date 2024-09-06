import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useCounterContract } from './hooks/useCounterContract';
import Modal from 'react-modal'; 
import '@twa-dev/sdk';
import {beginCell, toNano,Address} from '@ton/ton'
import { useTonConnectUI } from '@tonconnect/ui-react';
 const {  address } = useCounterContract();
  const body = beginCell()
        .storeUint(0xf8a7ea5, 32)                 // jetton 转账操作码
        .storeUint(0, 64)                         // query_id:uint64
        .storeCoins(1000000)                      // amount:(VarUInteger 16) -  转账的 Jetton 金额（小数位 = 6 - jUSDT, 9 - 默认）
        .storeAddress(Address.parse('EQDHAXwU8edT_uUA-2xBydIhMOfbnnOyxwr_ydCdpXKP5pgV'))                 // destination:MsgAddress
        .storeAddress(Address.parse('UQB18PPOHM1cVR0Tcg5OmqYtFa88xJym4_5koho29nwMqLuf'))                 // response_destination:MsgAddress
        .storeUint(0, 1)                          // custom_payload:(Maybe ^Cell)
        .storeCoins(toNano(0.05))                 // forward_ton_amount:(VarUInteger 16)
        .endCell();
  	  // .storeUInt(0, 1)                           // forward_payload:(Either Cell ^Cell)
  
  const transaction1 = {
      validUntil: Math.floor(Date.now() / 1000) + 360,
      messages: [
          {
              address: 'EQDHAXwU8edT_uUA-2xBydIhMOfbnnOyxwr_ydCdpXKP5pgV',  // 发送方 Jetton 钱包
              amount: toNano("0.05"),         // 用于手续费，超额部分将被退回
              // payload: body.toBoc().toString("base64") // 带有 Jetton 转账 body 的载荷
          }
      ]
  }
 console.log(body);
  console.log('transaction',transaction1);
  console.log('tonConnectUI', useTonConnectUI());
async function App() {
 
  
async function toTransfer(){
	
	// const [tonConnectUI] = useTonConnectUI();
	// const result = await tonConnectUI.sendTransaction(transaction1)
	// console.log(result);
	// const result = await tonConnectUI.sendTransaction(transaction)
	// console.log(result);
}
 
  return (
    <div className='App'>
      <div className='Container'>
        <TonConnectButton />
        <div className='Card' onClick={toTransfer}>
          <b>Counter Address</b>
          <div className='Hint'>{address?.slice(0, 30) + '...'}</div>
        </div>
      </div>
    </div>
  );
}
Modal.setAppElement('#root'); // 确保Modal在正确的DOM元素内渲染
export default App
