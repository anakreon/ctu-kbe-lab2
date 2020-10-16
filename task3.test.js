import chai from 'chai';

import { decrypt_aes_block } from './task2.js';

const { expect } = chai;

describe('decrypt_aes_block', () => {    
    it('', () => {
        const ciphertext = 'fad2b9a02d4f9c850f3828751e8d1565';
        const key = 'VALLEYSOFNEPTUNE';
        const expectedResult = 'I feel the ocean';
        const result = decrypt_aes_block(ciphertext, key);
        expect(result).to.equal(expectedResult);
    });
});
