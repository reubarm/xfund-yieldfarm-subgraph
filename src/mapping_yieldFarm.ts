import {Harvest as HarvestEventLP, MassHarvest as MassHarvestEventLP} from '../generated/YieldFarmLP/YieldFarmLP'
import {Harvest as HarvestEventUnix, MassHarvest as MassHarvestEventUnix} from '../generated/YieldFarmUnix/YieldFarmUnix'
import {Harvest, MassHarvest} from '../generated/schema'

export function handleMassHarvestLP(event: MassHarvestEventLP): void {
    let id = event.transaction.hash.toHex() + "_" + event.transactionLogIndex.toString()

    let mh = new MassHarvest(id)
    mh.user = event.params.user
    mh.epochsHarvested = event.params.epochsHarvested.toI32()
    mh.amount = event.params.totalValue
    mh.blockNumber = event.block.number.toI32()
    mh.blockTimestamp = event.block.timestamp.toI32()
    mh.txHash = event.transaction.hash.toHex()
    mh.save()
}

export function handleMassHarvestUnix(event: MassHarvestEventUnix): void {
    let id = event.transaction.hash.toHex() + "_" + event.transactionLogIndex.toString()

    let mh = new MassHarvest(id)
    mh.user = event.params.user
    mh.epochsHarvested = event.params.epochsHarvested.toI32()
    mh.amount = event.params.totalValue
    mh.blockNumber = event.block.number.toI32()
    mh.blockTimestamp = event.block.timestamp.toI32()
    mh.txHash = event.transaction.hash.toHex()
    mh.save()
}

export function handleHarvestLP(event: HarvestEventLP): void {
    let id = event.transaction.hash.toHex() + "_" + event.transactionLogIndex.toString()

    let h = new Harvest(id)
    h.user = event.params.user
    h.epochId = event.params.epochId.toI32()
    h.amount = event.params.amount
    h.blockNumber = event.block.number.toI32()
    h.blockTimestamp = event.block.timestamp.toI32()
    h.txHash = event.transaction.hash.toHex()
    h.save()
}

export function handleHarvestUnix(event: HarvestEventUnix): void {
    let id = event.transaction.hash.toHex() + "_" + event.transactionLogIndex.toString()

    let h = new Harvest(id)
    h.user = event.params.user
    h.epochId = event.params.epochId.toI32()
    h.amount = event.params.amount
    h.blockNumber = event.block.number.toI32()
    h.blockTimestamp = event.block.timestamp.toI32()
    h.txHash = event.transaction.hash.toHex()
    h.save()
}
