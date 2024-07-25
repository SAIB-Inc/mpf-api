declare module '@aiken-lang/merkle-patricia-forestry' {
    export class Trie {
        constructor();
        hash: Buffer;
        async insert: (key: Buffer | string, value: Buffer | string) => Promise<Trie>;
        async delete: (key: Buffer | string) => Promise<Trie>;
        async prove: (key: Buffer | string) => Promise<Proof>;
    }
    export class Proof {
        constructor();
        toCBOR: () => Buffer;
    }
}