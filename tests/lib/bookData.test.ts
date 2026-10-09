import { placeholderBooks } from '../../src/lib/bookData';

describe('placeholderBooks', () => {
  it('has 25 books', () => {
    expect(placeholderBooks.length).toBe(25);
  });
});
