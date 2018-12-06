let animalRes = {}
const animalArr = ['wolf', 'tiger', 'lion', 'zebra', 'cat', 'human', 'leopad',
                 'alligator', 'crocodile', 'cougar', 'panda', 'elephant', 'horse',
                 'coyote', 'raccoon', 'bison', 'sheep', 'polar bear', 'whale', 'bobcat',
                 'rhinoceros', 'brown bear', 'cheetah', 'moose', 'fox', 'emu', 'boar']

const isAnimals = (req, res, next) => {
    if (animalArr.includes(req.params.species)) {
    animalRes = {status: 'success', message: true}
    } else {
    animalRes = {status: 'success', message: false}
    }
    res.json(animalRes)
    next();
}


module.exports.isAnimals = isAnimals;
module.exports.animalRes = animalRes

