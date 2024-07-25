declare module '@aiken-lang/merkle-patricia-forestry' {
    export class Trie {
      constructor();
      hash: Buffer;
      async insert: (key: Buffer | string, value: Buffer | string) => Promise<Trie>;
    }
  }