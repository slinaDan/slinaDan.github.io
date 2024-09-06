import '/src/style/homePage.css'
import '/src/App.css';
import '@twa-dev/sdk';
import { TonConnectButton } from '@tonconnect/ui-react';
import {beginCell, toNano,Address,storeStateInit,TonClient, StateInit } from '@ton/ton'
import { useTonConnectUI } from '@tonconnect/ui-react';
 async function main() {
     const client = new TonClient({
         endpoint: 'https://toncenter.com/api/v2/jsonRPC',
         apiKey: '682589248b2c93bda9856a97cca0179ed0d0f3a0c7a8829e671b049fdf408754'
     })
 
     const jettonWalletAddress = Address.parse('EQDHAXwU8edT_uUA-2xBydIhMOfbnnOyxwr_ydCdpXKP5pgV');
	 console.log('jettonWalletAddress',jettonWalletAddress.toString());
     let jettonWalletDataResult = await client.runMethod(jettonWalletAddress, 'get_wallet_data');
	 console.log('jettonWalletDataResult',jettonWalletDataResult);
     jettonWalletDataResult.stack.readNumber();
     const ownerAddress = jettonWalletDataResult.stack.readAddress();
     const jettonMasterAddress = jettonWalletDataResult.stack.readAddress();
     const jettonCode = jettonWalletDataResult.stack.readCell();
     const jettonData = beginCell()
         .storeCoins(0)
         .storeAddress(ownerAddress)
         .storeAddress(jettonMasterAddress)
         .storeRef(jettonCode)
         .endCell();
 
     const stateInit: StateInit = {
         code: jettonCode,
         data: jettonData
     }
 
     const stateInitCell = beginCell()
         .store(storeStateInit(stateInit))
         .endCell();
 console.log(999,ownerAddress,jettonMasterAddress.toString(),jettonCode,jettonData);
     console.log(new Address(0, stateInitCell.hash()));
 }
  main()
     export function DemoTest() {
		
		 const body = beginCell()
		 	        .storeUint(0xf8a7ea5, 32)                 // jetton 转账操作码
		 	        .storeUint(0, 64)                         // query_id:uint64
		 	        .storeCoins(toNano(0.05))                      // amount:(VarUInteger 16) -  转账的 Jetton 金额（小数位 = 6 - jUSDT, 9 - 默认）
		 	        .storeAddress(Address.parse('UQAAXR8CSAMKXgudoWOzcius5v9wIpQa3qFj41hQLPRHfJCF'))  // destination:MsgAddress
		 	        .storeAddress(Address.parse('UQAAXR8CSAMKXgudoWOzcius5v9wIpQa3qFj41hQLPRHfJCF'))  // response_destination:MsgAddress
		 	        .storeUint(0, 1)                          // custom_payload:(Maybe ^Cell)
		 	        .storeCoins(toNano(0.001))       // forward_ton_amount:(VarUInteger 16)
							  .storeUint(0, 1)   
		 	        .endCell();
					console.log(body);
		 			console.log('body',body.toBoc().toString("base64"));
		 			
					
					const myTransaction = {
					    validUntil: Math.floor(Date.now() / 1000) + 360,
					    messages: [
					        {
					            address: 'EQCLn7XiZU3tFYBMMwmvzhwRbQGj_FKaYNwXsUX5SnkeI882',
					            amount: "100000000",
					            payload: body.toBoc().toString("base64") // body中带有评论的载荷
					        }
					    ]
					}
		 			console.log('myTransaction',myTransaction);
	 const [tonConnectUI] = useTonConnectUI();
	 // console.log('tonConnectUI,',tonConnectUI);
	 function toTransfer(){
		 tonConnectUI.sendTransaction(myTransaction)
	 }
  return (
   <div className='Container'>
     <TonConnectButton />
      <button onClick={toTransfer}>转账</button>
   </div>
  );
}

