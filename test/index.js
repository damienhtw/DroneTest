var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var delay=2000;//1 seconds
    setTimeout(function(){
describe('Something', function(){
	it('should do something', function(){
		expect(true).to.equal(true);
	});
});
    //executed after 1 seconds
    },delay); 

