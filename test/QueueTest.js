const sourceFile = require('../Queue');
const chai = require('chai');
const expect = chai.expect;
const Queue = sourceFile.Queue;

describe('Queue', function () {
    it('Should return empty', function(done) {
        const q = new Queue();
        expect(q.isEmpty()).to.equal(true);
        done();
    });

    it('Should enqueue and dequeue items', function (done) {
        const q = new Queue();
        let dequeued;
        q.enqueue('first');
        q.enqueue('second');
        q.enqueue('third');
        expect(q).to.have.property('collection').with.lengthOf(3);
        dequeued = q.dequeue();
        expect(dequeued).to.equal('first');
        expect(q).to.have.property('collection').with.lengthOf(2);
        done();
    });

    it('Should return front item', function (done) {
        const q = new Queue();
        q.enqueue('first');
        q.enqueue('second');
        expect(q.front()).to.equal('first');
        done();
    });

    it('Should return correct queue size', function (done) {
        const q = new Queue();
        expect(q.size()).to.equal(0);
        q.enqueue('first');
        q.enqueue('second');
        expect(q.size()).to.equal(2);
        q.dequeue();
        expect(q.size()).to.equal(1);
        done();
    });

    it('Should print the correct queue message', function (done) {
        const q = new Queue();
        q.enqueue('first');
        q.enqueue('second');
        expect(q.print()).to.equal('Collection: first,second');
        done();
    });
});
