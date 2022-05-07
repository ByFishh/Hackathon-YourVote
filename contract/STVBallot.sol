// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;

import "./Ballot.sol";

contract STVBallot is Ballot { //vote by order of preference

    constructor(string[] memory proposalNames, uint256 endDate, bool resultBeforeEnd)
        Ballot(proposalNames, endDate, resultBeforeEnd)
    {
        
    }
}
    //constructor(string[] memory proposalNames, address[] memory specifiedVoters, uint256 endDate, bool hasSpecifiedVoters) payable {
    //    _hasSpecifiedVoters = hasSpecifiedVoters;
//
    //    for (uint i = 0; i < proposalNames.length; i++) {
    //        _proposals[proposalNames[i]] = 0;
    //    }
//

    //}   
    //
    //function vote(string[] memory proposal) public {
    //    require(_voters[msg.sender] == false, "You already voted !");
    //    require(block.timestamp < _endDate, "The vote is done !");
//
    //    for (uint i = 0; i < proposal.length; i++) {
    //        _proposals[proposal[i]] += (proposal.length - i);
    //    }
    //}
//
    //function getProposalsPoints() public view returns (mapping(string  => uint)) {
//
    //}


