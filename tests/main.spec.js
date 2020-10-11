import { expect } from 'chai';
import FizzBuzz from '../src/main'

describe('Calculadora', () => {

  //Smoking test
  it('should a function', () => {
    expect(FizzBuzz).to.be.a('function');
  })

  it('shold return fizz when multiple 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
  });

  it('shold return buzz when multiple 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
  });

  it('shold return fizzbuzz when multiple 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('shold return a number with not multiple 3 or 5', () => {
    expect(FizzBuzz(8)).to.be.equal(8);
  });

});
