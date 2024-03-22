// const Block = require("./Block.js");
// const crypto = require("crypto");

// class Blockchain {
  // constructor() { ... }
  // get() { ... }
  // get latestBlock() { ... }
  // isValidHashDifficulty(hash) { ... }
  // calculateHashForBlock(block) { ... }
  // calculateHash(...) { ... }
  // mine(data) { ... }

  generateNextBlock(data) {
    const nextIndex = this.latestBlock.index + 1;
    const previousHash = this.latestBlock.hash;
    let timestamp = new Date().getTime();
    let nonce = 0;
    let nextHash = this.calculateHash(
      nextIndex,
      previousHash,
      timestamp,
      data,
      nonce
    );

    while (!this.isValidHashDifficulty(nextHash)) {
      nonce = nonce + 1;
      timestamp = new Date().getTime();
      nextHash = this.calculateHash(
        nextIndex,
        previousHash,
        timestamp,
        data,
        nonce
      );
    }

    const nextBlock = new Block(
      nextIndex,
      previousBlock.hash,
      nextTimestamp,
      data,
      nextHash,
      nonce
    );

    return nextBlock;
  }
// };

// module.exports = Blockchain;
