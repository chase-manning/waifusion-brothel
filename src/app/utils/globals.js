export const GLOBALS = {};

GLOBALS.WAIFU_VERSION = window && window.location.hostname !== "waifusionbsc.sexy" ? "bsc" : "eth";

GLOBALS.WALLET_TYPE_WALLETCONNECT = "walletconnect";
GLOBALS.WALLET_TYPE_METAMASK = "metamask";

//orig values
// GLOBALS.WAIFU_CONTRACT_ADDRESS = '0xC2C747E0F7004F9E8817Db2ca4997657a7746928';
// GLOBALS.WET_CONTRACT_ADDRESS ='0x8A9c4dfe8b9D8962B31e4e16F8321C44d48e246E';
// GLOBALS.INFURA_API = `https://mainnet.infura.io/v3/42ec8848724e4b0e9c61aee67ba4fd9e`;

/*Main contracts */
GLOBALS.WAIFU_CONTRACT_ADDRESS = "0x2216d47494E516d8206B70FCa8585820eD3C4946";
GLOBALS.WET_CONTRACT_ADDRESS = "0x76280AF9D18a868a0aF3dcA95b57DDE816c1aaf2";
GLOBALS.DUNGEON_CONTRACT_ADDRESS = GLOBALS.WAIFU_VERSION === "eth" ? "0xB291984262259BcFe6Aa02b66a06e9769C5c1eF3" : "0x21d2cf043937dcbaeff1feff75776f526b0c83d9";
GLOBALS.INFURA_API = GLOBALS.WAIFU_VERSION === "bsc" ? "https://bsc-dataseed.binance.org/" : `https://mainnet.infura.io/v3/b732460c3da849bca6067e7bb72f4bee`;

/*Test contracts */
// GLOBALS.WAIFU_CONTRACT_ADDRESS = "0xe6a4b81DB7d82d91820f7BB4f63855cBb25139bc";
// GLOBALS.WET_CONTRACT_ADDRESS = "0x24884ED967c1B9A33e384f67E185e81afEEFaD55";
// GLOBALS.DUNGEON_CONTRACT_ADDRESS = "0x18f921e62E7196Fddf5CDE1e8df53fE16FfECC19";
// GLOBALS.INFURA_API = `https://ropsten.infura.io/v3/b732460c3da849bca6067e7bb72f4bee`;

GLOBALS.STARTING_INDEX = GLOBALS.WAIFU_VERSION === "eth" ? 11595 : 11936; //WHEN SALE IS COMPLETED, SET THIS TO THE STARTING INDEX AND REDEPLOY
GLOBALS.TOTAL_WAIFUS = 16384;
GLOBALS.NAME_CHANGE_PRICE = 1830000000000000000000;
GLOBALS.APPROVE_AMOUNT = "16470000000000000000000";
// GLOBALS.APPROVE_AMOUNT = 16470;
GLOBALS.FINAL_PROOF_HASH =
  "b9e2ad47185076f3f43847eeec601e7bc4a1cb51a208b34b5eb1c650cf06a546";
GLOBALS.SHOW_STARTING_HASH = false;

GLOBALS.DEFAULT_WAIFU_IMAGE =
  "https://ipfs.io/ipfs/Qmb7jDhUTvDn3turAaYGofxjdKxEjCHV8G2GQZibvTrhQY";

GLOBALS.WAIFUS_URL = "https://ipfs.io/ipfs/#"; //replace # with hash of the names.json (huge list of all waifus)
GLOBALS.WAIFUS_JSON_HASH = "QmPUsgFPH6dFYZG2dPvRfE2mRrWSJ3wVLt2KZUNdE8vqDv";

GLOBALS.WAIFUS_VIEWABLE_URL = `https://ipfs.io/ipfs/${GLOBALS.WAIFU_VERSION === "eth" ? 'QmQuzMGqHxSXugCUvWQjDCDHWhiGB75usKbrZk6Ec6pFvw' : "QmT1X16PnT8jmx9StW2vMPhfMBoyr3ezE1a1uN7ekT3wBw"}`; //SET THIS FOR WALLET PAGE TO LOAD WAIFU IMAGE
GLOBALS.GALLERY_VIEWABLE_URL =
  `https://ipfs.io/ipfs/${GLOBALS.WAIFU_VERSION === "eth" ? 'QmQuzMGqHxSXugCUvWQjDCDHWhiGB75usKbrZk6Ec6pFvw' : "QmT1X16PnT8jmx9StW2vMPhfMBoyr3ezE1a1uN7ekT3wBw"}`;
GLOBALS.WAIFUS_THUMBNAILS_URL = "";
GLOBALS.WAIFUS_FULL_URL = "";
GLOBALS.WAIFUS_TRAITS_HASH = GLOBALS.WAIFU_VERSION === "eth" ? "QmXLu1LemfTc4qHWQinVPddxXfD6pegDP4Cik3hoav8FkC" : "QmRHjveShwxQyQR3XAEtRvia3X2CG58U8GkT7HNxrikzDe";

GLOBALS.BUY_PRICE = GLOBALS.WAIFU_VERSION === "eth" ? "0.7" : "1.7";
GLOBALS.CURRENCY = GLOBALS.WAIFU_VERSION === "eth" ? "ETH" : "BNB";

GLOBALS.NFT_VAL_ARRAY = [
  {
    nftVal: 1500,
    usd: 0.1,
    width: 16,
  },
  {
    nftVal: 1500,
    usd: 0.2,
    width: 16,
  },
  {
    nftVal: 2000,
    usd: 0.3,
    width: 20,
  },
  {
    nftVal: 2000,
    usd: 0.4,
    width: 20,
  },
  {
    nftVal: 2000,
    usd: 0.5,
    width: 20,
  },
  {
    nftVal: 2000,
    usd: 0.7,
    width: 20,
  },
  {
    nftVal: 2000,
    usd: 0.9,
    width: 20,
  },
  {
    nftVal: 2000,
    usd: 1.1,
    width: 20,
  },
  {
    nftVal: 1000,
    usd: 1.3,
    width: 12,
  },
  {
    nftVal: 381,
    usd: 2,
    width: 8,
  },
  {
    nftVal: 3,
    usd: 100,
    with: 4,
  },
];
