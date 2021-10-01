import { createContext, useContext, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'

import { CONTRACTS } from 'config'
import { usePopup } from 'contexts/popup-context'
import { useContracts } from 'contexts/contract-context'
import * as farmAPI from 'services/api-farm'
import ERC20_ABI from 'libs/abis/erc20.json'
import POOL_ABI from 'libs/abis/pool.json'
import MESSAGES from 'utils/constants/messages'

const ContractContext = createContext(null)

const initFarms = [
  {
    name: 'CABAG/AVAX PGL',
    lpAddress: CONTRACTS.LP_TOKEN,
    poolAddress: CONTRACTS.LP_POOL,
    token0: 'CABBAGE',
    token1: 'AVAX',
    balance: 0,
    decimals: 18,
    stakedBalance: 0,
    rewardTokenEarned: 0,
    decomissioned: false
  },
  {
    name: 'CABAG/AVAX PGL (OLD)',
    lpAddress: CONTRACTS.LP_TOKEN,
    poolAddress: CONTRACTS.LP_POOL_OLD,
    token0: 'CABBAGE',
    token1: 'AVAX',
    balance: 0,
    decimals: 18,
    stakedBalance: 0,
    rewardTokenEarned: 0,
    decomissioned: true
  },
  {
    name: 'CABAG',
    lpAddress: CONTRACTS.TOKEN,
    poolAddress: CONTRACTS.POOL,
    token0: 'CABBAGE',
    balance: 0,
    decimals: 18,
    stakedBalance: 0,
    rewardTokenEarned: 0,
    decomissioned: false
  },
  {
    name: 'USDT.e',
    lpAddress: CONTRACTS.USDT_TOKEN,
    poolAddress: CONTRACTS.USDT_POOL,
    token0: 'USDT',
    balance: 0,
    decimals: 6,
    stakedBalance: 0,
    rewardTokenEarned: 0,
    decomissioned: false
  },
  {
    name: 'CABAG (OLD)',
    lpAddress: CONTRACTS.TOKEN,
    poolAddress: CONTRACTS.POOL_OLD,
    token0: 'CABBAGE',
    balance: 0,
    decimals: 18,
    stakedBalance: 0,
    rewardTokenEarned: 0,
    decomissioned: true
  }
]

export function FarmProvider({ children }) {
  const { account, library } = useWeb3React();
  const { setPopUp } = usePopup();
  const { getBalanceInfo } = useContracts()

  const [loading, setLoading] = useState(false)
  const [TVL, setTVL] = useState(0)
  const [avaxPrice, setAvaxPrice] = useState(0)
  const [marketCap, setMarketCap] = useState(0)
  const [tokenPrice, setTokenPrice] = useState(0)
  const [totalSupply, setTotalSupply] = useState(0)
  const [farms, setFarms] = useState([])

  useEffect(() => {
    getFarmInfo();

    setInterval(() => getFarmInfo(), 60000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  const getFarmInfo = async () => {
    try {
      const {
        TVL = 0,
        ethPrice = 0,
        farms = [],
        marketCap = 0,
        tokenPrice = 0,
        totalSupply = 0,
      } = await farmAPI.getFarmsInfo();

      setTVL(TVL)
      setAvaxPrice(ethPrice)
      setMarketCap(marketCap)
      setTokenPrice(tokenPrice)
      setTotalSupply(totalSupply)

      let farmsArray = []
      for (const farm of farms) {
        const selectedInitFarm = initFarms.find((item) => item.name === farm.name)
        const stakingTokenBalanceValue = 0
        const stakingTokenStakedValue = 0
        const rewardTokenEarnedValue = 0

        if (account && library) {
          const { lpAddress, poolAddress, decimals } = selectedInitFarm;
          const stakingTokenContract = new ethers.Contract(lpAddress, ERC20_ABI, library.getSigner())
          const poolContract = new ethers.Contract(poolAddress, POOL_ABI, library.getSigner())

          const [
            stakingTokenBalance,
            stakingTokenStaked,
            rewardTokenEarned
          ] = await Promise.all([
            stakingTokenContract['balanceOf(address)'](account),
            poolContract['balanceOf(address)'](account),
            poolContract['earned(address)'](account)
          ]);

          stakingTokenBalanceValue = ethers.utils.formatUnits(stakingTokenBalance, decimals)
          stakingTokenStakedValue = ethers.utils.formatUnits(stakingTokenStaked, decimals)
          rewardTokenEarnedValue = ethers.utils.formatUnits(rewardTokenEarned)
        }

        farmsArray = [
          ...farmsArray,
          {
            ...farm,
            ...selectedInitFarm,
            balance: stakingTokenBalanceValue,
            stakedBalance: stakingTokenStakedValue,
            rewardTokenEarned: rewardTokenEarnedValue
          }
        ]
      }

      setFarms(farmsArray)
    } catch (error) {
      console.log('[Error] getFarmInfo => ', error)
    }
  }

  const onStake = async (balance, farm) => {
    if (!account) {
      setPopUp({
        title: 'Network Error',
        text: MESSAGES.METAMASK_NOT_CONNECTED
      })
      return;
    }

    setLoading(true);
    try {
      const { lpAddress, poolAddress } = farm;
      const stakingTokenContract = new ethers.Contract(lpAddress, ERC20_ABI, library.getSigner())
      const poolContract = new ethers.Contract(poolAddress, POOL_ABI, library.getSigner())
      const amount = ethers.utils.parseEther(balance.toString());

      const tokenBalance = await stakingTokenContract.balanceOf(account);
      if (amount.gt(tokenBalance)) {
        setPopUp({
          title: 'Balance Error',
          text: `Please check balance of token on your wallet.`
        })
        setLoading(false)
        return;
      }

      const tokenAllowance = await stakingTokenContract.allowance(account, poolAddress);
      if (tokenAllowance.lt(amount)) {
        const tokenApprove = await stakingTokenContract.approve(poolAddress, ethers.constants.MaxUint256);
        const transactionApprove = await tokenApprove.wait(1);

        if (!transactionApprove.status) {
          setLoading(false);
          setPopUp({
            title: 'Error',
            text: `There is an Error in Approved Transaction`
          })
          return
        }
      }

      const tokenStake = await poolContract.stake(amount);
      const transactionStake = await tokenStake.wait(1);

      if (transactionStake.status) {
        setPopUp({
          title: 'Success',
          text: `You have staked successfully`
        })
        getFarmInfo();
        getBalanceInfo();
      } else {
        setPopUp({
          title: 'Error',
          text: `There is an Error in Staked Transaction`
        })
      }
    } catch (error) {
      console.error('onStake =>', error);
    }
    setLoading(false);
  }

  const onWithdraw = async (balance, farm) => {
    if (!account) {
      setPopUp({
        title: 'Network Error',
        text: MESSAGES.METAMASK_NOT_CONNECTED
      })
      return;
    }

    setLoading(true);
    try {
      const { poolAddress } = farm;
      const poolContract = new ethers.Contract(poolAddress, POOL_ABI, library.getSigner())
      const amount = ethers.utils.parseEther(balance.toString());

      const tokenWithdraw = await poolContract.withdraw(amount);
      const transactionWithdraw = await tokenWithdraw.wait(1);

      if (transactionWithdraw.status) {
        setPopUp({
          title: 'Success',
          text: `You have withdrawn successfully`
        })
        getFarmInfo();
        getBalanceInfo();
      } else {
        setPopUp({
          title: 'Error',
          text: `There is an Error in Withdraw Transaction`
        })
      }
    } catch (error) {
      console.error('onWithdraw =>', error);
    }
    setLoading(false);
  }

  const onHarvest = async (farm) => {
    if (!account) {
      setPopUp({
        title: 'Network Error',
        text: MESSAGES.METAMASK_NOT_CONNECTED
      })
      return;
    }

    setLoading(true);
    try {
      const { poolAddress } = farm;
      const poolContract = new ethers.Contract(poolAddress, POOL_ABI, library.getSigner())

      const tokenHarvest = await poolContract.getReward();
      const transactionHarvest = await tokenHarvest.wait(1);

      if (transactionHarvest.status) {
        setPopUp({
          title: 'Success',
          text: `You have harvested successfully`
        })
        getFarmInfo();
        getBalanceInfo();
      } else {
        setPopUp({
          title: 'Error',
          text: `There is an Error in Harvest Transaction`
        })
      }
    } catch (error) {
      console.log('onHarvest => ', error);
    }
    setLoading(false);
  }

  return (
    <ContractContext.Provider
      value={{
        loading,
        TVL,
        avaxPrice,
        marketCap,
        tokenPrice,
        totalSupply,
        farms,
        onStake,
        onWithdraw,
        onHarvest
      }}
    >
      {children}
    </ContractContext.Provider>
  )
}

export function useFarm() {
  const context = useContext(ContractContext)
  if (!context) {
    throw new Error('Missing stats context')
  }

  const {
    loading,
    TVL,
    avaxPrice,
    marketCap,
    tokenPrice,
    totalSupply,
    farms,
    onStake,
    onWithdraw,
    onHarvest
  } = context

  return {
    loading,
    TVL,
    avaxPrice,
    marketCap,
    tokenPrice,
    totalSupply,
    farms,
    onStake,
    onWithdraw,
    onHarvest
  }
}