import Data from '../../model/data';
import seedlings from '../seedlings';

describe('Data model should be created successfully (unit)', () => {
  it('returns instance of Data', () => {
    // Arange
    const seedling = seedlings[0];

    // Act
    const data: Data = new Data(seedling.id, seedling.value);

    // Assert
    expect(data).toBeInstanceOf(Data);
  });

  it('object gets created with desired parameters', () => {
    // Arange
    const seedling = seedlings[0];

    // Act
    const data: Data = new Data(seedling.id, seedling.value);

    // Assert
    expect(data).toEqual(seedling);
  });
});
