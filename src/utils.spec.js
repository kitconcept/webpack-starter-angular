import adder from './utils';

describe('adder', () => {

  it('0 = 0 + 0', () => {
    expect(0).to.equal(adder(0,0));
  });

  it('2 = 1 + 1', () => {
    expect(2).to.equal(adder(1,1));
  });

  it('5 = 2 + 3', () => {
    expect(5).to.equal(adder(2,3));
  });

});
