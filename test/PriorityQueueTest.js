const sourceFile = require('../PriorityQueue');
const chai = require('chai');
const expect = chai.expect;
const PriorityQueue = sourceFile.PriorityQueue;

describe('PriorityQueue', function () {
    it('Should return empty', function (done) {
        const q = new PriorityQueue();
        expect(q.isEmpty()).to.equal(true);
        done();
    });

    it('Should enqueue items without priority', function (done) {
        const q = new PriorityQueue();
        q.enqueue('first') ;
        q.enqueue('second');
        expect(q).to.have.property('collection').with.lengthOf(2);
        done();
    });

    it('Should enqueue items with invalid priority string', function (done) {
        const q = new PriorityQueue();
        q.enqueue('first') ;
        q.enqueue('second', 'invalid priority');
        expect(q).to.have.property('collection').with.lengthOf(2);
        done();
    });

    it('Should enqueue items with invalid priority number', function (done) {
        const q = new PriorityQueue();
        q.enqueue('first');
        q.enqueue('second', -1);
        expect(q).to.have.property('collection').with.lengthOf(2);
        done();
    });

    it('Should get the front item', function (done) {
        const q = new PriorityQueue();
        q.enqueue('first') ;
        q.enqueue('second');
        expect(q.front()).to.equal('first');
        done();
    });

    it('Should enqueue item with priority 0', function (done) {
        const q = new PriorityQueue();
        q.enqueue('one');
        q.enqueue('two');
        q.enqueue('zero', 0);
        expect(q.front()).to.equal('zero');
        done();
    });

    it('Should enqueue item with priority 2', function (done) {
        const q = new PriorityQueue();
        const priority = 2;
        q.enqueue('zero');
        q.enqueue('one');
        q.enqueue('three');
        q.enqueue('two', 2);

        expect(q).to.have.property('collection').with.lengthOf(4);

        q.collection.forEach((item, i) => {
            if (i === priority) {
                expect(item).to.equal('two');
            }
        });

        done();
    });

    it('Should dequeue items without index', function (done) {
        const q = new PriorityQueue;
        let dequeued;
        q.enqueue('first');
        q.enqueue('second');
        dequeued = q.dequeue();
        expect(dequeued).to.equal('first');
        expect(q).to.have.property('collection').with.lengthOf(1);
        done();
    });

    it('Should dequeue items with index', function (done) {
        const q = new PriorityQueue();
        let dequeued;
        q.enqueue('zero');
        q.enqueue('one');
        q.enqueue('two');
        dequeued = q.dequeue(1);
        expect(dequeued).to.equal('one');
        expect(q).to.have.property('collection').with.lengthOf(2);
        done();
    });

    it('Should dequeue items with invalid index string', function (done) {
        const q = new PriorityQueue();
        let dequeued;
        q.enqueue('zero');
        q.enqueue('one');
        q.enqueue('two');
        dequeued = q.dequeue('one');
        expect(dequeued).to.equal('zero');
        expect(q).to.have.property('collection').with.lengthOf(2);
        done();
    });

    it('Should dequeue items with invalid index number', function (done) {
        const q = new PriorityQueue();
        let dequeued;
        q.enqueue('zero');
        q.enqueue('one');
        q.enqueue('two');
        dequeued = q.dequeue(-1);
        expect(dequeued).to.equal('zero');
        expect(q).to.have.property('collection').with.lengthOf(2);
        done();
    });

    it('Should print the correct queue message', function (done) {
        const q = new PriorityQueue();
        q.enqueue('zero');
        q.enqueue('one');
        q.enqueue('three');
        q.enqueue('two', 2);
        expect(q.print()).to.equal('Collection: zero,one,two,three');
        done();
    });
});
