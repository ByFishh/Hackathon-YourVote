// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;

import "./Ballot.sol";

contract STVBallot is Ballot { //vote by order of preference

    constructor(string[] memory proposalNames, uint256 endDate, bool resultBeforeEnd)
        Ballot(proposalNames, endDate, resultBeforeEnd)
    {
        
    }
}

contract STVBallotSpec is STVBallot {

    address[] _voterWhitelist;

    constructor(string[] memory proposalNames, uint256 endDate, bool resultBeforeEnd, address[] memory voters)
        STVBallot(proposalNames, endDate, resultBeforeEnd)
    {
        _spec = true;

        for (uint i = 0; i < voters.length; i++) {
            _voterWhitelist.push(voters[i]);
        }
    }
}
