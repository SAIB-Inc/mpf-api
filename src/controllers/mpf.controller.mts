import { Body, Controller, Header, HttpCode, Post } from '@nestjs/common';
import { MpfService } from '../services/mpf.service.mjs';
import { CreateTrieDto } from '../data/createTrieDto.mjs';
import { ProofRequestDto } from '../data/proofRequestDto.mjs';
import { Proof } from '@aiken-lang/merkle-patricia-forestry';

@Controller("mpf")
export class MpfController {
    constructor(private readonly mpfService: MpfService) { }

    @Post("create")
    @HttpCode(201)
    @Header('Content-Type', 'application/json')
    async createTrie(@Body() createTrieDto: CreateTrieDto): Promise<string> {
        const bufferMap = this._hexMapToBufferMap(createTrieDto.data);
        return JSON.stringify(await this.mpfService.createTrie(bufferMap));
    }

    @Post("proof")
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    async getProof(@Body() proofRequest: ProofRequestDto): Promise<string> {
        const bufferMap = this._hexMapToBufferMap(proofRequest.data);
        const keyBuffer = Buffer.from(proofRequest.key, 'hex');
        const proof = await this.mpfService.getProof(bufferMap, keyBuffer);
        return JSON.stringify(proof.toCBOR().toString('hex'));
    }

    _hexMapToBufferMap(hexMap: Map<string, string>): Map<Buffer, Buffer> {
        const bufferMap = new Map<Buffer, Buffer>();
        for (const key in hexMap) {
            bufferMap.set(Buffer.from(key, 'hex'), Buffer.from(hexMap[key], 'hex'));
        }
        return bufferMap;
    }

}
