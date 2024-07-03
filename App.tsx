import '@walletconnect/react-native-compat'

import { createWeb3Modal, defaultConfig, Web3Modal, W3mButton } from '@web3modal/ethers-react-native'
import { ConfigOptions } from '@web3modal/ethers-react-native/lib/typescript/utils/defaultConfig'
import { View } from 'react-native'

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = 'Your Project ID'

// 2. Create config
const metadata = {
  name: 'Web3Modal RN',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://'
  }
}

const option : ConfigOptions = {
  metadata,
  extraConnectors: []
}

const config = defaultConfig(option)

// 3. Define your chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const polygon = {
  chainId: 137,
  name: 'Polygon',
  currency: 'MATIC',
  explorerUrl: 'https://polygonscan.com',
  rpcUrl: 'https://polygon-rpc.com'
}

const chains = [mainnet, polygon]

// 4. Create modal
createWeb3Modal({
  projectId,
  chains,
  config,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export default function App() {
  return (
    <View>
      <Web3Modal />
      <W3mButton />
    </View>
  )
}