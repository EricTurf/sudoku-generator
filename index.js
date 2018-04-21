const { makepuzzle, solvepuzzle } = require('sudoku');
const { List } = require('immutable');

//HARD=25,MEDIUM=35,EASY=45

const DIFFICULTIES = {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

const RANGES = {
  EASY: [45, 55],
  MEDIUM: [30, 40],
  HARD: [20, 25]
};

const getInitalValues = board => {
  let initialValues = 0;

  board.forEach(r => {
    r.forEach(v => {
      if (v.value !== null) initialValues++;
    });
  });
  return initialValues;
};

const validateBoard = (difficulty, board) => {
  const [s, e] = RANGES[difficulty];
  const initialValues = getInitalValues(board);
  console.log('here');

  return initialValues >= s && initialValues <= e;
};

const fixBoard = (difficulty, board) => {
  const values = getInitalValues(board);
  const [min, max] = RANGES[difficulty];
  let removedValues = 0;
  const valuesToRemove =
    values - Math.floor(Math.random() * (max - min + 1) + min);

  const removeValues = board => {
    return board.map(row => {
      return row.map(v => {
        const random = Math.floor(Math.random() * 10);
        if (random > 7 && removedValues <= valuesToRemove) {
          v.value = null;
          ++removedValues;
        }
        return v;
      });
    });
  };

  let newBoard = board;

  while (!validateBoard(difficulty, newBoard)) {
    console.log('while');
    newBoard = removeValues(newBoard.length === 0 ? board : newBoard);
  }

  return newBoard;
};

const getBoard = difficulty => {
  let arr = [];
  const x = makepuzzle();
  const y = solvepuzzle(x);
  const RANDOM = {
    EASY: 6,
    MEDIUM: 5,
    HARD: 2
  };
  const board = y.reduce((acc, j, i) => {
    const formatValue = v => {
      const random = Math.floor(Math.random() * 10);

      return {
        answer: v + 1,
        value: random > RANDOM[difficulty] ? null : v + 1
      };

      // return random > RANDOM[difficulty] ? null : v + 1;
    };
    if (arr.length === 8) {
      const y = [...arr, formatValue(j)];
      arr = [];
      return acc.push(y);
    } else {
      arr = [...arr, formatValue(j)];
      return acc;
    }
  }, new List());

  console.log(board.toJS());

  if (validateBoard(difficulty, board)) {
    return board;
  } else {
    return fixBoard(difficulty, board);
  }
};

const easy = () => {
  return getBoard(DIFFICULTIES.EASY);
};
const medium = () => {
  return getBoard(DIFFICULTIES.MEDIUM);
};
const hard = () => {
  return [];
};

const Sudoku = {
  easy,
  medium,
  hard
};
module.exports = Sudoku;
