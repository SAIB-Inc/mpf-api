import { Injectable } from '@nestjs/common';
import { Trie } from '@aiken-lang/merkle-patricia-forestry';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    let trie = new Trie();
    trie = await trie.insert('hello', 'world');
    return trie.hash.toString('hex');
  }
}