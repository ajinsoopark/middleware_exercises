let randomRes = {};
let numArr = [];

const generateSpread = (req, res, next) => {
    let maxNum = parseInt(req.query.ceil);
    let minNum = parseInt(req.query.floor);

    for (let i = minNum + 1; i < maxNum; i++) {
        numArr.push(i);
    };
    next();
}

const pickRandomNumber = (req, res, next) => { 
    let maxNum = parseInt(req.query.ceil);
    let minNum = parseInt(req.query.floor);   
    randomRes.status = 'success';
    randomRes.range = [minNum, maxNum];
    randomRes.randPick = numArr[Math.floor(Math.random() * numArr.length)];

    res.json(randomRes);
}




module.exports.pickRandomNumber = pickRandomNumber;
module.exports.generateSpread = generateSpread;