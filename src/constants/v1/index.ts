import { Interface } from '@ethersproject/abi'
import { ChainId } from '@pancakeswap-libs/sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'
import V2_EXCHANGE_ABI from './v2_exchange.json'
import V2_FACTORY_ABI from './v2_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  // [ChainId.MAINNET]: '0xC07d4604400139108BbdB3076636365A385879eF', // TODO v1
  [ChainId.MAINNET]: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73', // TODO v2
  [ChainId.BSCTESTNET]: '0x6725F303b657a9451d8BA641348b6761A6CC7a17'
}

// const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
// const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)
const V2_FACTORY_INTERFACE = new Interface(V2_EXCHANGE_ABI)
const V2_EXCHANGE_INTERFACE = new Interface(V2_FACTORY_ABI)

// export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
export { V1_FACTORY_ADDRESSES, V2_FACTORY_INTERFACE, V2_FACTORY_ABI, V2_EXCHANGE_INTERFACE, V2_EXCHANGE_ABI }

