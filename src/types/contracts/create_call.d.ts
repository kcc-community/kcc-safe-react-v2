/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type ContractCreation = ContractEventLog<{
  newContract: string;
  0: string;
}>;

export interface CreateCall extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): CreateCall;
  clone(): CreateCall;
  methods: {
    performCreate(
      value: number | string | BN,
      deploymentData: string | number[]
    ): NonPayableTransactionObject<string>;

    performCreate2(
      value: number | string | BN,
      deploymentData: string | number[],
      salt: string | number[]
    ): NonPayableTransactionObject<string>;
  };
  events: {
    ContractCreation(cb?: Callback<ContractCreation>): EventEmitter;
    ContractCreation(
      options?: EventOptions,
      cb?: Callback<ContractCreation>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "ContractCreation", cb: Callback<ContractCreation>): void;
  once(
    event: "ContractCreation",
    options: EventOptions,
    cb: Callback<ContractCreation>
  ): void;
}
