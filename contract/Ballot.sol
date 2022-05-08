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

    address public _owner;

    bool public _resultBeforeEnd;
    bool public _spec;

    uint256 public _startDate;
    uint256 public _endDate;

    Voter[] _voters;
    Proposal[] _proposals;

    constructor(string[] memory proposalNames, uint256 endDate, bool result) {
        _owner = msg.sender;
        _endDate = endDate;
        _startDate = block.timestamp;
        _resultBeforeEnd = result;
        _spec = false;

        for (uint i = 0; i < proposalNames.length; i++) {
            _proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    }

    function isFinished() public view returns (bool) {
        if (block.timestamp > _endDate)
            return true;
        return false;
    }

    function hasAlreadyVoted(address addr) public view returns (bool) {
        for (uint i = 0; i < _voters.length; i++) {
            if (_voters[i].voter == addr)
                return true;
        }
        return false;
    }

    function getProposalsPoints() public view returns (Proposal[] memory) {
        if (_resultBeforeEnd)
            return _proposals;
        if (block.timestamp > _endDate)
            return _proposals;
    }
}
