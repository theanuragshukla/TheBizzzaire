// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CreateStream{
	address owner;
	address user;

	constructor(){
		owner = 0x1c8A1665A97e23d314e754Fc73873F600B75Dc10;
	}

	function pay() payable public{
		user = msg.sender;
		uint amount = 3000; // will be calculated
		uint recieved = msg.value;
		if(recieved < amount){
			revert();
		}else{
			uint extra = recieved - amount;
			if(extra > 0)
				payable(user).transfer(extra);
			payable(owner).transfer(recieved);

		}

	}
}
