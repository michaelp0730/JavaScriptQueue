(function () {
    'use strict';

    function Queue() {
        this.collection = [];
    }

    Queue.prototype = {
        enqueue: function enqueue(item) {
            this.collection.push(item);
        },

        dequeue: function dequeue() {
            return this.collection.shift();
        },

        front: function front() {
            return this.collection[0];
        },

        print: function print() {
            return `Collection: ${this.collection}`;
        },

        size: function size() {
            return this.collection.length;
        },

        isEmpty: function isEmpty() {
            return this.size() === 0;
        },
    };

    module.exports = {
        Queue
    };
})();
