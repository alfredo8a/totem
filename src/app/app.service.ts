import { Injectable } from '@angular/core';
export enum STATUS {
  EMPTY = "empty",
  BUSY = "busy"
}
export interface Case {
  number: number;
  member?: string;
  status: STATUS
}
@Injectable({
  providedIn: 'root'
})
export class AppService {

  private statusCases: Case[] = [{ number: 1, status: STATUS.EMPTY }, { number: 2, status: STATUS.EMPTY }, { number: 3, status: STATUS.EMPTY }, { number: 4, status: STATUS.EMPTY }, { number: 5, status: STATUS.EMPTY }, { number: 6, status: STATUS.EMPTY }]
  constructor() { }
  get cases(){
    return this.statusCases;
  }
  private find(n: number) {
    return this.statusCases.find(item => item.number === n);
  }
  private get(member: string) {
    return this.statusCases.find(item => item.member === member);
  }

  lock(n: number, member: string) {
    const c = this.find(n);
    c.member = member;
    c.status = STATUS.BUSY
  }
  unlock(member: string) {
    const c = this.get(member);
    if (c) {
      c.member = null;
      c.status = STATUS.EMPTY
      return true;
    }
    return false;
  }
}
