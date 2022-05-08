// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;

import "./Ballot.sol";

contract TRSBallot is Ballot { //vote classico

    constructor(string[] memory proposalNames, uint256 endDate, bool resultBeforeEnd)
        Ballot(proposalNames, endDate, resultBeforeEnd)
    {
        
    }
}

contract TRSBallotNorm is TRSBallot {


    constructor(string[] memory proposalNames, uint256 endDate, bool resultBeforeEnd)
        TRSBallot(proposalNames, endDate, resultBeforeEnd)
    {

    }

    function vote(string memory proposal) public {
        require(hasAlreadyVoted(msg.sender) == false, "You have already voted in this ballot !");

        for (uint i = 0; i < _proposals.length; i++) {
            if (keccak256(bytes(_proposals[i].name)) == keccak256(bytes(proposal)))
                _proposals[i].voteCount += 1;
        }

        _voters.push(Voter({
            voter: msg.sender,
            voted: true
        }));
    }
}

contract TRSBallotSpec is TRSBallot {

    address[] _voterWhitelist;

    constructor(string[] memory proposalNames, uint256 endDate, bool resultBeforeEnd, address[] memory voters)
        TRSBallot(proposalNames, endDate, resultBeforeEnd)
    {
        _spec = true;

        for (uint i = 0; i < voters.length; i++) {
            _voterWhitelist.push(voters[i]);
        }
    }

    function isInList(address addr) public view returns(bool) {
        for (uint i = 0; i < _voterWhitelist.length; i++) {
            if (msg.sender == addr)
                return true;
        }
        return false;
    }

    function vote(string memory proposal) public {
        require(isInList(msg.sender) == true, "Your are not allowed to participate in this ballot !");
        require(hasAlreadyVoted(msg.sender) == false, "You have already voted in this ballot !");

        for (uint i = 0; i < _proposals.length; i++) {
            if (keccak256(bytes(_proposals[i].name)) == keccak256(bytes(proposal)))
                _proposals[i].voteCount += 1;
        }

        _voters.push(Voter({
            voter: msg.sender,
            voted: true
        }));
    }
}
