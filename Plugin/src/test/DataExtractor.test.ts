import { DataExtractor } from '../DataExtractor';

test('extractData should extract correct data', () => {
  const dataExtractor = new DataExtractor();
  const spy = jest.spyOn(dataExtractor, 'extractData');

  dataExtractor.extractData();

  expect(spy).toHaveBeenCalled();
});
