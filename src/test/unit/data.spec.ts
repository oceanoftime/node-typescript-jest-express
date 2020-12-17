import Data from '../../model/data';
import seedlings from '../seedlings';

describe('Data model should be created successfully (unit)', () => {
  it('gets created with seedling', () => {
    // Arange
    const seedling = seedlings[0];

    // Act
    const data: Data = new Data(seedling.id, seedling.value);

    // Assert
    expect(data).toBeInstanceOf(Data);
    expect(data).toEqual(seedling);
  });
});
