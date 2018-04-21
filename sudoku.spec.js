const Sudoku = require('./index');

describe('sudoku-generator', () => {
  const getInitialValuesCount = sudokuBoard => {
    let initialValues = 0;

    sudokuBoard.forEach(r => {
      r.forEach(v => {
        if (v.value !== null) initialValues++;
      });
    });

    return initialValues;
  };

  describe('default', () => {
    it('should be an object with easy,medium and hard functions', () => {
      expect(Sudoku).toBeInstanceOf(Object);
      Object.values(Sudoku).forEach(key =>
        expect(key).toBeInstanceOf(Function)
      );
    });

    it('should be an object of functions that returns an array of objects of value and answer', () => {
      Object.values(Sudoku).forEach(fn => {
        const result = fn();

        result.forEach(r =>
          expect(r.objectContaining({ value, object })).toBeTruthy()
        );
      });
    });
  });

  describe('easy', () => {
    it('should return an array containing with at least 45 and maximum 55 object with value not being null ', () => {
      for (let i = 0; i <= 10; i++) {
        const result = Sudoku.easy();

        const initialValues = getInitialValuesCount(result);

        expect(initialValues).toBeGreaterThanOrEqual(45);
        expect(initialValues).toBeLessThanOrEqual(55);
      }
    });
  });
  fdescribe('medium', () => {
    it('should return an array containing with at least 35 and maximum 40 object with value not being null ', () => {
      for (let i = 0; i <= 2; i++) {
        const result = Sudoku.medium();

        const initialValues = getInitialValuesCount(result);

        expect(initialValues).toBeGreaterThanOrEqual(35);
        expect(initialValues).toBeLessThanOrEqual(40);
      }
    });
  });
  describe('hard', () => {
    it('should return an array containing with at least 25 and maximum 30 object with value not being null ', () => {
      for (let i = 0; i <= 10; i++) {
        const result = Sudoku.hard();

        const initialValues = getInitialValuesCount(result);

        expect(initialValues).toBeGreaterThanOrEqual(25);
        expect(initialValues).toBeLessThanOrEqual(30);
      }
    });
  });
});
