// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;

contract Ballot {

    struct Voter {
        address voter;
        bool voted;
    }

    struct Proposal {
        string name;
        uint voteCount;
    }

    address public owner;

    bool public resultBeforeEnd;

    uint256 public startDate;
    uint256 public endDate;

    Voter[] voters;
    Proposal[] proposals;

    constructor(string[] memory proposalNames, uint256 date, bool result) {
        owner = msg.sender;
        endDate = date;
        startDate = block.timestamp;
        resultBeforeEnd = result;

        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    }

    function isFinished() public view returns (bool) {
        if (block.timestamp > endDate)
            return true;
        return false;
    }

    function getProposalsPoints() public view returns (Proposal[] memory) {
        require(resultBeforeEnd && (block.timestamp > endDate), "The results can only be discovered at the end.");
        return proposals;
    }
}