/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CampaignFactory } from "./CampaignFactory";

export class CampaignFactoryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<CampaignFactory> {
    return super.deploy(overrides || {}) as Promise<CampaignFactory>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CampaignFactory {
    return super.attach(address) as CampaignFactory;
  }
  connect(signer: Signer): CampaignFactoryFactory {
    return super.connect(signer) as CampaignFactoryFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CampaignFactory {
    return new Contract(address, _abi, signerOrProvider) as CampaignFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minimum",
        type: "uint256",
      },
    ],
    name: "createCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "deployedCampaigns",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeployedCampaigns",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611af1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063339d50a5146100465780634acb9d4f14610076578063a3303a7514610094575b600080fd5b610060600480360381019061005b9190610240565b6100b0565b60405161006d919061030c565b60405180910390f35b61007e6100ef565b60405161008b9190610327565b60405180910390f35b6100ae60048036038101906100a99190610240565b61017d565b005b600081815481106100c057600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600080548060200260200160405190810160405280929190818152602001828054801561017357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610129575b5050505050905090565b6000813360405161018d9061021e565b610198929190610349565b604051809103906000f0801580156101b4573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6116bd806103ff83390190565b60008135905061023a816103e7565b92915050565b60006020828403121561025257600080fd5b60006102608482850161022b565b91505092915050565b60006102758383610281565b60208301905092915050565b61028a816103ab565b82525050565b610299816103ab565b82525050565b60006102aa82610382565b6102b4818561039a565b93506102bf83610372565b8060005b838110156102f05781516102d78882610269565b97506102e28361038d565b9250506001810190506102c3565b5085935050505092915050565b610306816103dd565b82525050565b60006020820190506103216000830184610290565b92915050565b60006020820190508181036000830152610341818461029f565b905092915050565b600060408201905061035e60008301856102fd565b61036b6020830184610290565b9392505050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b60006103b6826103bd565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6103f0816103dd565b81146103fb57600080fd5b5056fe60806040523480156200001157600080fd5b50604051620016bd380380620016bd8339818101604052810190620000379190620000bc565b81600181905550806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060038190555050506200016f565b6000815190506200009f816200013b565b92915050565b600081519050620000b68162000155565b92915050565b60008060408385031215620000d057600080fd5b6000620000e085828601620000a5565b9250506020620000f3858286016200008e565b9150509250929050565b60006200010a8262000111565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6200014681620000fd565b81146200015257600080fd5b50565b620001608162000131565b81146200016c57600080fd5b50565b61153e806200017f6000396000f3fe6080604052600436106100c25760003560e01c80638813ce121161007f578063ab2850da11610059578063ab2850da14610272578063d7bb99ba146102af578063d7d1bbdb146102b9578063ecfd8928146102e2576100c2565b80638813ce12146101f35780638a9cfd551461021e578063937e09b114610247576100c2565b806303441006146100c75780631f6d4942146100f05780634051ddac1461012d578063481c6a751461015c5780635badbe4c1461018757806381d12c58146101b2575b600080fd5b3480156100d357600080fd5b506100ee60048036038101906100e99190610df6565b61030d565b005b3480156100fc57600080fd5b5061011760048036038101906101129190610d66565b61047d565b6040516101249190611095565b60405180910390f35b34801561013957600080fd5b5061014261049d565b604051610153959493929190611145565b60405180910390f35b34801561016857600080fd5b506101716104e1565b60405161017e9190611058565b60405180910390f35b34801561019357600080fd5b5061019c610505565b6040516101a9919061112a565b60405180910390f35b3480156101be57600080fd5b506101d960048036038101906101d49190610df6565b61050b565b6040516101ea9594939291906110b0565b60405180910390f35b3480156101ff57600080fd5b506102086105f6565b6040516102159190611073565b60405180910390f35b34801561022a57600080fd5b5061024560048036038101906102409190610d8f565b61081f565b005b34801561025357600080fd5b5061025c6109bd565b604051610269919061112a565b60405180910390f35b34801561027e57600080fd5b5061029960048036038101906102949190610e1f565b6109c3565b6040516102a69190611095565b60405180910390f35b6102b76109f2565b005b3480156102c557600080fd5b506102e060048036038101906102db9190610df6565b610a73565b005b3480156102ee57600080fd5b506102f7610bcf565b604051610304919061112a565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461039b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103929061110a565b60405180910390fd5b60006004600083815260200190815260200160002090508060020160149054906101000a900460ff16156103ce57600080fd5b60026003546103dd9190611254565b816003015410156103ed57600080fd5b8060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f1935050505015801561045b573d6000803e3d6000fd5b5060018160020160146101000a81548160ff0219169083151502179055505050565b60026020528060005260406000206000915054906101000a900460ff1681565b60008060008060006001544760055460035460008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16945094509450945094509091929394565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b600460205280600052604060002060009150905080600001805461052e90611321565b80601f016020809104026020016040519081016040528092919081815260200182805461055a90611321565b80156105a75780601f1061057c576101008083540402835291602001916105a7565b820191906000526020600020905b81548152906001019060200180831161058a57829003601f168201915b5050505050908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16908060030154905085565b6060600060055467ffffffffffffffff81111561063c577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561067557816020015b610662610bd5565b81526020019060019003908161065a5790505b50905060005b600554811015610817576000600460008381526020019081526020016000209050806040518060a00160405290816000820180546106b890611321565b80601f01602080910402602001604051908101604052809291908181526020018280546106e490611321565b80156107315780601f1061070657610100808354040283529160200191610731565b820191906000526020600020905b81548152906001019060200180831161071457829003601f168201915b50505050508152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160149054906101000a900460ff161515151581526020016003820154815250508383815181106107f8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525050808061080f90611384565b91505061067b565b508091505090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a49061110a565b60405180910390fd5b60006040518060a001604052808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020016000815250905080600460006005600081548092919061090a90611384565b9190505581526020019081526020016000206000820151816000019080519060200190610938929190610c1c565b506020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160020160146101000a81548160ff0219169083151502179055506080820151816003015590505050505050565b60015481565b60066020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b600154341015610a0157600080fd5b6001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060036000815480929190610a6c90611384565b9190505550565b6000600460008381526020019081526020016000209050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610ae057600080fd5b6006600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610b4857600080fd5b60016006600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550806003016000815480929190610bc690611384565b91905055505050565b60035481565b6040518060a001604052806060815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600015158152602001600081525090565b828054610c2890611321565b90600052602060002090601f016020900481019282610c4a5760008555610c91565b82601f10610c6357805160ff1916838001178555610c91565b82800160010185558215610c91579182015b82811115610c90578251825591602001919060010190610c75565b5b509050610c9e9190610ca2565b5090565b5b80821115610cbb576000816000905550600101610ca3565b5090565b6000610cd2610ccd846111bd565b611198565b905082815260208101848484011115610cea57600080fd5b610cf58482856112df565b509392505050565b600081359050610d0c816114c3565b92915050565b600081359050610d21816114da565b92915050565b600082601f830112610d3857600080fd5b8135610d48848260208601610cbf565b91505092915050565b600081359050610d60816114f1565b92915050565b600060208284031215610d7857600080fd5b6000610d8684828501610cfd565b91505092915050565b600080600060608486031215610da457600080fd5b600084013567ffffffffffffffff811115610dbe57600080fd5b610dca86828701610d27565b9350506020610ddb86828701610d51565b9250506040610dec86828701610d12565b9150509250925092565b600060208284031215610e0857600080fd5b6000610e1684828501610d51565b91505092915050565b60008060408385031215610e3257600080fd5b6000610e4085828601610d51565b9250506020610e5185828601610cfd565b9150509250929050565b6000610e678383610fc4565b905092915050565b610e7881611297565b82525050565b610e8781611297565b82525050565b610e9681611285565b82525050565b6000610ea7826111fe565b610eb18185611221565b935083602082028501610ec3856111ee565b8060005b85811015610eff5784840389528151610ee08582610e5b565b9450610eeb83611214565b925060208a01995050600181019050610ec7565b50829750879550505050505092915050565b610f1a816112a9565b82525050565b610f29816112a9565b82525050565b6000610f3a82611209565b610f448185611232565b9350610f548185602086016112ee565b610f5d81611489565b840191505092915050565b6000610f7382611209565b610f7d8185611243565b9350610f8d8185602086016112ee565b610f9681611489565b840191505092915050565b6000610fae600d83611243565b9150610fb98261149a565b602082019050919050565b600060a0830160008301518482036000860152610fe18282610f2f565b9150506020830151610ff6602086018261103a565b5060408301516110096040860182610e6f565b50606083015161101c6060860182610f11565b50608083015161102f608086018261103a565b508091505092915050565b611043816112d5565b82525050565b611052816112d5565b82525050565b600060208201905061106d6000830184610e8d565b92915050565b6000602082019050818103600083015261108d8184610e9c565b905092915050565b60006020820190506110aa6000830184610f20565b92915050565b600060a08201905081810360008301526110ca8188610f68565b90506110d96020830187611049565b6110e66040830186610e7e565b6110f36060830185610f20565b6111006080830184611049565b9695505050505050565b6000602082019050818103600083015261112381610fa1565b9050919050565b600060208201905061113f6000830184611049565b92915050565b600060a08201905061115a6000830188611049565b6111676020830187611049565b6111746040830186611049565b6111816060830185611049565b61118e6080830184610e8d565b9695505050505050565b60006111a26111b3565b90506111ae8282611353565b919050565b6000604051905090565b600067ffffffffffffffff8211156111d8576111d761145a565b5b6111e182611489565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061125f826112d5565b915061126a836112d5565b92508261127a576112796113fc565b5b828204905092915050565b6000611290826112b5565b9050919050565b60006112a2826112b5565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561130c5780820151818401526020810190506112f1565b8381111561131b576000848401525b50505050565b6000600282049050600182168061133957607f821691505b6020821081141561134d5761134c61142b565b5b50919050565b61135c82611489565b810181811067ffffffffffffffff8211171561137b5761137a61145a565b5b80604052505050565b600061138f826112d5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156113c2576113c16113cd565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4e6f742061206d616e6167657200000000000000000000000000000000000000600082015250565b6114cc81611285565b81146114d757600080fd5b50565b6114e381611297565b81146114ee57600080fd5b50565b6114fa816112d5565b811461150557600080fd5b5056fea264697066735822122033a94d6bdb77b54801cc466474a48383fb08db3cb4381751b2ae5b4248bc106f64736f6c63430008030033a26469706673582212200de0888e5820f4119466b75602e24aa830eaf056ec78ba63905e3f4a9792176d64736f6c63430008030033";
