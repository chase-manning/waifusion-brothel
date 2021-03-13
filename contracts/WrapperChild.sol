pragma solidity ^0.8.0;

import "./token/IERC20.sol";
import "./token/IERC721.sol";
import "hardhat/console.sol";

interface IWrapperChildImpl {
    function initialize(address user) external;
    function unwrap(uint256 num) external;
}

interface IWrapperParent {
  function nftxFund() external view returns (address);
  function xToken() external view returns (address);
  function vaultID() external view returns (uint256);
}

interface INFTXFund {
    function mint(uint256 vaultId, uint256[] memory nftIds, uint256 d2Amount) external;
    function redeem(uint256 game, uint256 option) external;
}

interface IWaifuDungeon {
    function commitSwapWaifus(uint256[] calldata _ids) external;
    function revealWaifus() external;
}

contract WrapperChildImpl {
  IWaifuDungeon constant WAIFU_DUNGEON = IWaifuDungeon(0xB291984262259BcFe6Aa02b66a06e9769C5c1eF3);
  IERC721 constant WAIFUSION = IERC721(0x2216d47494E516d8206B70FCa8585820eD3C4946);
  bytes4 private constant _ERC721_RECEIVED = 0x150b7a02;
  uint256 private constant UNSET = 1 << 255;
  uint256 private constant MAX_SWAP = 3;

  bool private initialized;
  IWrapperParent public parent;
  address public user; 

  uint256 private receivedNftID;

  function initialize(address _parent, address _user) external {
    require(!initialized, "already initialized");
    initialized = true;

    parent = IWrapperParent(_parent);
    user = _user;
    console.log("NFTX Fund: %s", parent.nftxFund());
    IERC20(parent.xToken()).approve(address(parent.nftxFund()), type(uint256).max);
    console.log("xToken: %s", parent.xToken());

    WAIFUSION.setApprovalForAll(address(WAIFU_DUNGEON), true);
    receivedNftID = UNSET;
  }

  function onERC721Received(address operator, address from, uint256 tokenId, bytes calldata data) external returns (bytes4) {
      if (from == address(WAIFU_DUNGEON)) {
        WAIFUSION.safeTransferFrom(address(this), user, tokenId);
      } else if (from == address(parent.nftxFund())) {
        receivedNftID = tokenId;
      } else {
        revert("invalid from");
      }
      return _ERC721_RECEIVED;
  }

  function commitSwapWaifus(uint256 num) external onlyParent() {
    IERC20(parent.xToken()).transferFrom(user, address(this), num);
    uint256[] memory ids = new uint256[](num);
    for (uint256 i = 0; i < num; i++) {
      console.log(i);
      INFTXFund(parent.nftxFund()).redeem(parent.vaultID(), 1);
      ids[i] = receivedNftID;
      console.log(receivedNftID);
    }
    WAIFU_DUNGEON.commitSwapWaifus(ids);
  }

  function revealWaifus() external onlyParent() {
    WAIFU_DUNGEON.revealWaifus();
  }

  modifier onlyParent() {
    require(msg.sender == address(parent), "not parent");
    _;
  } 
}