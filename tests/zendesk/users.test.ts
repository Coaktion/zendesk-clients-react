import { ClientOptionsZendesk } from '@coaktion/client-core/dist/types';

import { Methods, ZendeskUserUrls } from '../../src';
import { ZendeskUsersClient } from '../../src';
import { ContentType } from '../../src/zendesk/choices';

describe('ZendeskUsersClient', () => {
  let zendeskUsersClient: ZendeskUsersClient;
  beforeEach(() => {
    jest.resetAllMocks();
    zendeskUsersClient = new ZendeskUsersClient({} as ClientOptionsZendesk);
    zendeskUsersClient.makeRequest = jest.fn();
  });

  it('should call makeRequest with the correct params to getUser', () => {
    zendeskUsersClient.getUser('1');
    expect(zendeskUsersClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskUserUrls.User,
      method: Methods.GET,
      pathParams: { userId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getUsers', () => {
    zendeskUsersClient.getUsers();
    expect(zendeskUsersClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskUserUrls.Users,
      method: Methods.GET
    });
  });

  it('should call makeRequest with the correct params to getRelated', () => {
    zendeskUsersClient.getRelated('1');
    expect(zendeskUsersClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskUserUrls.Related,
      method: Methods.GET,
      pathParams: { userId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getTickets', () => {
    zendeskUsersClient.getTickets('1');
    expect(zendeskUsersClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskUserUrls.Tickets,
      method: Methods.GET,
      pathParams: { userId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getOrganizations', () => {
    zendeskUsersClient.getOrganizations('1');
    expect(zendeskUsersClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskUserUrls.Organizations,
      method: Methods.GET,
      pathParams: { userId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getGroups', () => {
    zendeskUsersClient.getGroups('1');
    expect(zendeskUsersClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskUserUrls.Groups,
      method: Methods.GET,
      pathParams: { userId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getTags', () => {
    zendeskUsersClient.getTags('1');
    expect(zendeskUsersClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskUserUrls.Tags,
      method: Methods.GET,
      pathParams: { userId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getIdentity', () => {
    zendeskUsersClient.getIdentity('1');
    expect(zendeskUsersClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskUserUrls.Identity,
      method: Methods.GET,
      pathParams: { userId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getUserGroups', () => {
    zendeskUsersClient.getUserGroups();
    expect(zendeskUsersClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskUserUrls.UserGroups,
      method: Methods.GET
    });
  });

  it('should call makeRequest with the correct params to createOrUpdate', () => {
    const data = { user: { name: 'test' } };
    zendeskUsersClient.createOrUpdate(data);
    expect(zendeskUsersClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskUserUrls.CreateOrUpdate,
      contentType: ContentType.JSON,
      method: Methods.POST,
      data: JSON.stringify(data)
    });
  });
});
