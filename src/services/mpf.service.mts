import { Injectable } from '@nestjs/common';
import { Trie, Proof } from '@aiken-lang/merkle-patricia-forestry';

@Injectable()
export class MpfService {
    async createTrie(data: Map<Buffer, Buffer>): Promise<string> {
        const trie = await this._createTrie(data);
        return trie.hash.toString('hex');
    }

    async getProof(data: Map<Buffer, Buffer>, key: Buffer): Promise<Proof> {
        const trie = await this._createTrie(data);
        return await trie.prove(key);
    }

    async _createTrie(data: Map<Buffer, Buffer>): Promise<Trie> {
        let trie = new Trie();
        const keys = data.keys();
        for (const key of keys) {
            const value = data.get(key);
            trie = await trie.insert(key, value);
        }
        return trie;
    }
}