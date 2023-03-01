import { ZendeskClientBase } from '../../src/zendesk/base';

describe('ZendeskClientBase', () => {
  let zendeskClientBase: ZendeskClientBase;
  beforeEach(() => {
    jest.resetAllMocks();
    zendeskClientBase = new ZendeskClientBase({});
  });

  it('should be defined', () => {
    expect(ZendeskClientBase).toBeDefined();
  });

  it('should have a makeRequest method', () => {
    expect(zendeskClientBase.makeRequest).toBeDefined();
  });

  it('should have a get method', () => {
    expect(zendeskClientBase.get).toBeDefined();
  });
});
