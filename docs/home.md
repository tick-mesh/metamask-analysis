# MetaMask源码解读

MetaMask（小狐狸），是用于与以太坊区块链进行交互的软件加密货币钱包。它可以通过浏览器扩展程序或移动应用程序让用户访问其以太坊钱包，与去中心化应用进行交互。

MetaMask 允许用户存储及管理账号私钥，广播交易，发送和接收基于Ethereum的加密货币和代币，并通过兼容的内置浏览器安全地连接到去中心化应用。开发人员通过使用JavaScript插件（如Web3js或Ethers）来定义 MetaMask 如何和智能合约之间交易，实现MetaMask和去中心化应用之间的连接。

插件源码位于仓库

```shell
https://github.com/MetaMask/metamask-extension.git
```
本系列讲解基于 v10.22.3 版本
