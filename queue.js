let queueRes = { status: 'success' };
let nameArr = ["elle", "xavier", "michelle", "corey", "reed", 'alex', 'sally',
               'fred', 'ledd', 'mitchell', 'ness', 'dolce', 'gabbana', 'seven'];

const handleQueue = (req, res, next) => {
    if (req.params.mod === 'peek') {
        queueRes.data = nameArr[nameArr.length - 1];
        res.json(queueRes);
    } else if (req.params.mod === 'enqueue') {
        nameArr.unshift(req.query.name);
        queueRes.enqueued = req.query.name;
        res.json(queueRes);
    } else if (req.params.mod === 'dequeue') {
        let removedEl = nameArr.pop();
        queueRes.dequeued = removedEl;
        res.json(queueRes);
    }
    queueRes = { status: 'success' };
    next();
}

module.exports = {
    handleQueue
}