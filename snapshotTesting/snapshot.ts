class Snapshot {
  a = { b: 11, c: "s", d: [11, "22"], e: { x: 11 } };
  constructor() {}
  toJSON() {
    return this.a;
  }
}

export { Snapshot };
