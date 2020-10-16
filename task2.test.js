import chai from 'chai';

import { encrypt_aes_block, decrypt_aes_block, _test } from './task2.js';

const { expect } = chai;

describe('encrypt_aes_block', () => {    
    it('', () => {
        const plaintext = '90 miles an hour';
        const key = 'CROSSTOWNTRAFFIC';
        const expectedResult = '092fb4b0aa77beddb5e55df37b73faaa';
        const result = encrypt_aes_block(plaintext, key);
        expect(result).to.equal(expectedResult);
    });
    it('longer plaintext throws', () => {
        const plaintext = '90 miles an hoursy';
        const key = 'CROSSTOWNTRAFFIC';
        expect(function () {
            encrypt_aes_block(plaintext, key);
        }).to.throw('message has to be exactly 16 bytes');
    });
    it('longer key throws', () => {
        const plaintext = '90 miles an hour';
        const key = 'CROSSTOWNTRAFFICS';
        expect(function () {
            encrypt_aes_block(plaintext, key);
        }).to.throw('key has to be exactly 16 bytes');
    });
});


describe('decrypt_aes_block', () => {    
    it('', () => {
        const ciphertext = '092fb4b0aa77beddb5e55df37b73faaa';
        const key = 'CROSSTOWNTRAFFIC';
        const expectedResult = '90 miles an hour';
        const result = decrypt_aes_block(ciphertext, key);
        expect(result).to.equal(expectedResult);
    });
    it('longer plaintext throws', () => {
        const ciphertext = '092fb4b0aa77beddb5e55df37b73faaaaaaaaa';
        const key = 'CROSSTOWNTRAFFIC';
        expect(function () {
            decrypt_aes_block(ciphertext, key);
        }).to.throw('message has to be exactly 16 bytes');
    });
    it('longer key throws', () => {
        const ciphertext = '092fb4b0aa77beddb5e55df37b73faaa';
        const key = 'CROSSTOWNTRAFFICSY';
        expect(function () {
            decrypt_aes_block(ciphertext, key);
        }).to.throw('key has to be exactly 16 bytes');
    });
});

describe('isExactly16BytesHex', () => {
    it('has 16 bytes', () => {
        const hex = '092fb4b0aa77beddb5e55df37b73faaa';
        expect(_test.isExactly16BytesHex(hex)).to.equal(true);
    });
    it('has 15 bytes', () => {
        const hex = '092fb4b0aa77beddb5e55df37b73fa';
        expect(_test.isExactly16BytesHex(hex)).to.equal(false);
    });
    it('has 17 bytes', () => {
        const hex = '092fb4b0aa77beddb5e55df37b73faaabb';
        expect(_test.isExactly16BytesHex(hex)).to.equal(false);
    });
});
