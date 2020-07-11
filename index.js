const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

    let q = new Queue();
    console.log('isEmpty: ', q.isEmpty());
    console.log('front: ', q.front());
    q.enqueue('test');
    q.print();
    q.enqueue('foo');
    q.print();
    q.enqueue('bar');
    console.log('isEmpty: ', q.isEmpty());
    q.print();
    let item = q.dequeue();
    console.log('item: ', item);
    q.print();
    console.log('q: ', q);
    console.log('front: ', q.front());
});

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
        console.log('Collection: ', this.collection);
    },

    size: function size() {
        return this.collection.length;
    },

    isEmpty: function isEmpty() {
        return this.size() === 0;
    },
};
