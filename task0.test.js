import chai from 'chai';
import { bin2txt, txt2bin } from './task0.js';

const { expect } = chai;

describe('bin2txt', () => {    
    it('', () => {
        const binary = '010010010110110100100000011100110110111101101101011001010010000001110011011001010110001101110010011001010111010000100000011001010110111001100011011011110110010001100101011001000010000001110100011001010111100001110100';
        const expectedResult = 'Im some secret encoded text';
        const result = bin2txt(binary);
        expect(result).to.equal(expectedResult);
    });
});

describe('txt2bin', () => {    
    it('', () => {
        const text = 'Im some plain text';
        const expectedResult = '010010010110110100100000011100110110111101101101011001010010000001110000011011000110000101101001011011100010000001110100011001010111100001110100';
        const result = txt2bin(text);
        expect(result).to.equal(expectedResult);
    });
});
