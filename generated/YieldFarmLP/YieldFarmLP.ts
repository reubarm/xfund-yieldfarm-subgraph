// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Harvest extends ethereum.Event {
  get params(): Harvest__Params {
    return new Harvest__Params(this);
  }
}

export class Harvest__Params {
  _event: Harvest;

  constructor(event: Harvest) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get epochId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MassHarvest extends ethereum.Event {
  get params(): MassHarvest__Params {
    return new MassHarvest__Params(this);
  }
}

export class MassHarvest__Params {
  _event: MassHarvest;

  constructor(event: MassHarvest) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get epochsHarvested(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get totalValue(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class YieldFarmLP extends ethereum.SmartContract {
  static bind(address: Address): YieldFarmLP {
    return new YieldFarmLP("YieldFarmLP", address);
  }

  EPOCHS_DELAYED_FROM_STAKING_CONTRACT(): BigInt {
    let result = super.call(
      "EPOCHS_DELAYED_FROM_STAKING_CONTRACT",
      "EPOCHS_DELAYED_FROM_STAKING_CONTRACT():(uint128)",
      []
    );

    return result[0].toBigInt();
  }

  try_EPOCHS_DELAYED_FROM_STAKING_CONTRACT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "EPOCHS_DELAYED_FROM_STAKING_CONTRACT",
      "EPOCHS_DELAYED_FROM_STAKING_CONTRACT():(uint128)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  NR_OF_EPOCHS(): BigInt {
    let result = super.call("NR_OF_EPOCHS", "NR_OF_EPOCHS():(uint256)", []);

    return result[0].toBigInt();
  }

  try_NR_OF_EPOCHS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("NR_OF_EPOCHS", "NR_OF_EPOCHS():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  TOTAL_DISTRIBUTED_AMOUNT(): BigInt {
    let result = super.call(
      "TOTAL_DISTRIBUTED_AMOUNT",
      "TOTAL_DISTRIBUTED_AMOUNT():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_TOTAL_DISTRIBUTED_AMOUNT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "TOTAL_DISTRIBUTED_AMOUNT",
      "TOTAL_DISTRIBUTED_AMOUNT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  epochDuration(): BigInt {
    let result = super.call("epochDuration", "epochDuration():(uint256)", []);

    return result[0].toBigInt();
  }

  try_epochDuration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "epochDuration",
      "epochDuration():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  epochStart(): BigInt {
    let result = super.call("epochStart", "epochStart():(uint256)", []);

    return result[0].toBigInt();
  }

  try_epochStart(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("epochStart", "epochStart():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCurrentEpoch(): BigInt {
    let result = super.call(
      "getCurrentEpoch",
      "getCurrentEpoch():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getCurrentEpoch(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentEpoch",
      "getCurrentEpoch():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getEpochStake(userAddress: Address, epochId: BigInt): BigInt {
    let result = super.call(
      "getEpochStake",
      "getEpochStake(address,uint128):(uint256)",
      [
        ethereum.Value.fromAddress(userAddress),
        ethereum.Value.fromUnsignedBigInt(epochId)
      ]
    );

    return result[0].toBigInt();
  }

  try_getEpochStake(
    userAddress: Address,
    epochId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getEpochStake",
      "getEpochStake(address,uint128):(uint256)",
      [
        ethereum.Value.fromAddress(userAddress),
        ethereum.Value.fromUnsignedBigInt(epochId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPoolSize(epochId: BigInt): BigInt {
    let result = super.call("getPoolSize", "getPoolSize(uint128):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(epochId)
    ]);

    return result[0].toBigInt();
  }

  try_getPoolSize(epochId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPoolSize",
      "getPoolSize(uint128):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(epochId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  harvest(epochId: BigInt): BigInt {
    let result = super.call("harvest", "harvest(uint128):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(epochId)
    ]);

    return result[0].toBigInt();
  }

  try_harvest(epochId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("harvest", "harvest(uint128):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(epochId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastInitializedEpoch(): BigInt {
    let result = super.call(
      "lastInitializedEpoch",
      "lastInitializedEpoch():(uint128)",
      []
    );

    return result[0].toBigInt();
  }

  try_lastInitializedEpoch(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastInitializedEpoch",
      "lastInitializedEpoch():(uint128)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  massHarvest(): BigInt {
    let result = super.call("massHarvest", "massHarvest():(uint256)", []);

    return result[0].toBigInt();
  }

  try_massHarvest(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("massHarvest", "massHarvest():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userLastEpochIdHarvested(): BigInt {
    let result = super.call(
      "userLastEpochIdHarvested",
      "userLastEpochIdHarvested():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_userLastEpochIdHarvested(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userLastEpochIdHarvested",
      "userLastEpochIdHarvested():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get unixTokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get uniLP(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get stakeContract(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get communityVault(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class HarvestCall extends ethereum.Call {
  get inputs(): HarvestCall__Inputs {
    return new HarvestCall__Inputs(this);
  }

  get outputs(): HarvestCall__Outputs {
    return new HarvestCall__Outputs(this);
  }
}

export class HarvestCall__Inputs {
  _call: HarvestCall;

  constructor(call: HarvestCall) {
    this._call = call;
  }

  get epochId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class HarvestCall__Outputs {
  _call: HarvestCall;

  constructor(call: HarvestCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class MassHarvestCall extends ethereum.Call {
  get inputs(): MassHarvestCall__Inputs {
    return new MassHarvestCall__Inputs(this);
  }

  get outputs(): MassHarvestCall__Outputs {
    return new MassHarvestCall__Outputs(this);
  }
}

export class MassHarvestCall__Inputs {
  _call: MassHarvestCall;

  constructor(call: MassHarvestCall) {
    this._call = call;
  }
}

export class MassHarvestCall__Outputs {
  _call: MassHarvestCall;

  constructor(call: MassHarvestCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
