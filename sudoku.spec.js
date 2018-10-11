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
    it('should be a function', () => {
      expect(Sudoku).toBeInstanceOf(Function);
    });
  });
  describe('easy', () => {
    it('should return an array containing with at least 45 and maximum 55 object with value not being null ', () => {
      const result = Sudoku('EASY');

      const initialValues = getInitialValuesCount(result);

      expect(initialValues).toBeGreaterThanOrEqual(45);
      expect(initialValues).toBeLessThanOrEqual(55);
    });
  });
  describe('medium', () => {
    it('should return an array containing with at least 30 and maximum 40 object with value not being null ', () => {
      const result = Sudoku('MEDIUM');

      const initialValues = getInitialValuesCount(result);

      expect(initialValues).toBeGreaterThanOrEqual(30);
      expect(initialValues).toBeLessThanOrEqual(40);
    });
  });
  fdescribe('hard', () => {
    it('should return an array containing with at least 20 and maximum 30 object with value not being null ', () => {
      const result = Sudoku('HARD');

      const initialValues = getInitialValuesCount(result);

      expect(initialValues).toBeGreaterThanOrEqual(20);
      expect(initialValues).toBeLessThanOrEqual(30);
    });
  });
});
