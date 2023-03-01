import { pathParamsUrl, queryParamsUrl } from '../src/utils';

describe('queryParamsUrl', () => {
  it('should return a url with query params', () => {
    expect(queryParamsUrl('http://example.com', { foo: 'bar' })).toBe(
      'http://example.com?foo=bar'
    );
  });
});

describe('pathParamsUrl', () => {
  it('should return a url with path params', () => {
    expect(pathParamsUrl('http://example.com/{foo}', { foo: 'bar' })).toBe(
      'http://example.com/bar'
    );
  });
});
