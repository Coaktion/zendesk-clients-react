import { ZendeskClient } from '@coaktion/client-core';
import { ClientOptionsZendesk } from '@coaktion/client-core/dist/types';

import { Methods, ZendeskUserUrls } from './choices';

export class ZendeskUsersClient extends ZendeskClient {
  constructor(client: ClientOptionsZendesk) {
    super({ ...client });
  }

  async getUser(userId: string) {
    return this.makeRequest({
      url: ZendeskUserUrls.User,
      method: Methods.GET,
      pathParams: { userId }
    });
  }

  async getUsers() {
    return this.makeRequest({
      url: ZendeskUserUrls.Users,
      method: Methods.GET
    });
  }

  async getRelated(userId: string) {
    return this.makeRequest({
      url: ZendeskUserUrls.Related,
      method: Methods.GET,
      pathParams: { userId }
    });
  }

  async getTickets(userId: string) {
    return this.makeRequest({
      url: ZendeskUserUrls.Tickets,
      method: Methods.GET,
      pathParams: { userId }
    });
  }

  async getOrganizations(userId: string) {
    return this.makeRequest({
      url: ZendeskUserUrls.Organizations,
      method: Methods.GET,
      pathParams: { userId }
    });
  }

  async getGroups(userId: string) {
    return this.makeRequest({
      url: ZendeskUserUrls.Groups,
      method: Methods.GET,
      pathParams: { userId }
    });
  }

  async getTags(userId: string) {
    return this.makeRequest({
      url: ZendeskUserUrls.Tags,
      method: Methods.GET,
      pathParams: { userId }
    });
  }

  async getIdentity(userId: string) {
    return this.makeRequest({
      url: ZendeskUserUrls.Identity,
      method: Methods.GET,
      pathParams: { userId }
    });
  }
}
