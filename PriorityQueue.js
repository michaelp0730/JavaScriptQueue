(function () {
    'use strict';

    function PriorityQueue() {
        this.collection = [];
    }

    PriorityQueue.prototype = {
        enqueue: function enqueue(item, priority) {
            if (priority === undefined || typeof priority !== 'number' || priority < 0) {
                this.collection.push(item);
            } else {
                this.collection.splice(priority, 0, item);
            }
        },

        dequeue: function dequeue(index) {
            let item;
            if (index === undefined || index < 0) {
                return this.collection.shift();
            } else {
                item = this.collection.splice(index, 1);
                return item[0];
            }

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
        PriorityQueue
    };
})();
