import { Injectable } from '@nestjs/common';
import { Trie } from '@aiken-lang/merkle-patricia-forestry';

@Injectable()
export class MpfService {
    async createTrie(data: Map<Buffer, Buffer>): Promise<string> {
        let trie = new Trie();
        const keys = data.keys();
        for (const key of keys) {
            const value = data.get(key);
            trie = await trie.insert(key, value);
        }
        return trie.hash.toString('hex');
    }
}