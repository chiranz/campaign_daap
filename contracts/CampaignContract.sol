// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint256 minimum) public {
        address newCampaign =
            address(new CampaignContract(minimum, msg.sender));
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[] memory) {
        return deployedCampaigns;
    }
}

contract CampaignContract {
    // Structs
    struct Request {
        string description;
        uint256 amount;
        address payable recepient;
        bool complete;
        uint256 approvalCount;
    }

    // Variables
    address public manager;
    uint256 public minimumContribution;
    mapping(address => bool) public contributors;
    uint256 public contributorCount;

    mapping(uint256 => Request) public requests;
    uint256 public requestCount;
    mapping(uint256 => mapping(address => bool)) public approvals;

    // Modifiers
    modifier restricted() {
        require(msg.sender == manager, "Not a manager");
        _;
    }

    // Constructor
    constructor(uint256 minimum, address creator) {
        minimumContribution = minimum;
        manager = creator;
        contributorCount = 0;
    }

    // Contract Functions
    function contribute() public payable {
        require(msg.value >= minimumContribution);
        contributors[msg.sender] = true;
        contributorCount++;
    }

    function createRequest(
        string memory description,
        uint256 amount,
        address payable recepient
    ) public restricted {
        Request memory newRequest =
            Request({
                description: description,
                amount: amount,
                recepient: recepient,
                approvalCount: 0,
                complete: false
            });
        requests[requestCount++] = newRequest;
    }

    function approveRequest(uint256 index) public {
        Request storage request = requests[index];
        require(contributors[msg.sender]);

        require(!approvals[index][msg.sender]);
        approvals[index][msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint256 index) public restricted {
        Request storage request = requests[index];
        require(!request.complete);

        require(request.approvalCount >= (contributorCount / 2));
        request.recepient.transfer(request.amount);
        request.complete = true;
    }

    function getSummary()
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            address
        )
    {
        return (
            minimumContribution,
            address(this).balance,
            requestCount,
            contributorCount,
            manager
        );
    }

    function getRequests() public view returns (Request[] memory) {
        Request[] memory _requests = new Request[](requestCount);

        for (uint256 i = 0; i < requestCount; i++) {
            Request storage _request = requests[i];
            _requests[i] = _request;
        }
        return _requests;
    }
}
