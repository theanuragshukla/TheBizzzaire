// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CreateStream{
	 address public owner;

	constructor(){
		owner = msg.sender;
	}
	function getBalance() view public returns(uint){
		return address(this).balance;
	}

    function transfer(address to, uint256 amount) public {
        require(msg.sender==owner);
        payable(to).transfer(amount);
    }

	function pay(uint amount) payable public{
		uint recieved = msg.value;
		if(recieved < amount){
			revert();
		}else{
			uint extra = recieved - amount;
			if(extra > 0)
				payable(msg.sender).transfer(extra);
		}

	}
}

