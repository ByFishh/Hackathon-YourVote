// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;

import "./Ballot.sol";

contract TRSBallot is Ballot { //vote classico

    constructor(string[] memory proposalNames, uint256 endDate, bool resultBeforeEnd)
        Ballot(proposalNames, endDate, resultBeforeEnd)
    {
        
    }
}