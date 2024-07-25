import { Body, Controller, Header, HttpCode, Post } from '@nestjs/common';
import { MpfService } from '../services/mpf.service.mjs';
import { CreateTrieDto } from '../data/createTrieDto.mjs';

@Controller("mpf")
export class MpfController {
    constructor(private readonly mpfService: MpfService) { }

    @Post("create")
    @HttpCode(201)
    @Header('Content-Type', 'application/json')
    async createTrie(@Body() createTrieDto: CreateTrieDto): Promise<string> {
        const bufferMap = new Map<Buffer, Buffer>();
        for (const key in createTrieDto.data) {
            bufferMap.set(Buffer.from(key, 'hex'), Buffer.from(createTrieDto.data[key], 'hex'));
        }
        return JSON.stringify(await this.mpfService.createTrie(bufferMap));
    }
}
