// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CreateStream{
	 address public owner;
	 uint public rate;

	constructor(){
		owner = msg.sender;
	}
	function getBalance() view public returns(uint){
		return address(this).balance;
	}

	function setRate(uint value) public {
		require(msg.sender==owner);
		rate=value;
	}

    function transfer(address to, uint256 amount) public {
        require(msg.sender==owner);
        payable(to).transfer(amount);
    }

	function pay(uint time) payable public{
		uint amount = time*rate;
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

