import { ZendeskClient } from '@coaktion/client-core';
import { ClientOptionsZendesk } from '@coaktion/client-core/dist/types';

import { ContentType, Methods, ZendeskTicketUrls } from './choices';

export class ZendeskTicketsClient extends ZendeskClient {
  constructor(client: ClientOptionsZendesk) {
    super({ ...client });
  }

  async getTicket(ticketId: string) {
    return this.makeRequest({
      url: ZendeskTicketUrls.Ticket,
      method: Methods.GET,
      pathParams: { ticketId }
    });
  }

  async getTickets() {
    return this.makeRequest({
      url: ZendeskTicketUrls.Tickets,
      method: Methods.GET
    });
  }

  async getComments(ticketId: string) {
    return this.makeRequest({
      url: ZendeskTicketUrls.Comments,
      method: Methods.GET,
      pathParams: { ticketId }
    });
  }

  async getAudits(ticketId: string) {
    return this.makeRequest({
      url: ZendeskTicketUrls.Audits,
      method: Methods.GET,
      pathParams: { ticketId }
    });
  }

  async getMetrics(ticketId: string) {
    return this.makeRequest({
      url: ZendeskTicketUrls.Metrics,
      method: Methods.GET,
      pathParams: { ticketId }
    });
  }

  async getIncidents(ticketId: string) {
    return this.makeRequest({
      url: ZendeskTicketUrls.Incidents,
      method: Methods.GET,
      pathParams: { ticketId }
    });
  }

  async getCollaborators(ticketId: string) {
    return this.makeRequest({
      url: ZendeskTicketUrls.Collaborators,
      method: Methods.GET,
      pathParams: { ticketId }
    });
  }

  async getSatisfactionRatings(ticketId: string) {
    return this.makeRequest({
      url: ZendeskTicketUrls.SatisfactionRatings,
      method: Methods.GET,
      pathParams: { ticketId }
    });
  }

  async getTags(ticketId: string) {
    return this.makeRequest({
      url: ZendeskTicketUrls.Tags,
      method: Methods.GET,
      pathParams: { ticketId }
    });
  }

  async getTicketFields() {
    return this.makeRequest({
      url: ZendeskTicketUrls.TicketFields,
      method: Methods.GET
    });
  }

  async getTicketField(ticketFieldId: string) {
    return this.makeRequest({
      url: ZendeskTicketUrls.TicketField,
      method: Methods.GET,
      pathParams: { ticketFieldId }
    });
  }

  async getTicketFieldOptions(ticketFieldId: string) {
    return this.makeRequest({
      url: ZendeskTicketUrls.TicketFieldOptions,
      method: Methods.GET,
      pathParams: { ticketFieldId }
    });
  }

  async createTicket(data: object) {
    return this.makeRequest({
      url: ZendeskTicketUrls.Tickets,
      method: Methods.POST,
      data: JSON.stringify(data),
      contentType: ContentType.JSON
    });
  }

  async createComment(ticketId: string, data: object) {
    return this.makeRequest({
      url: ZendeskTicketUrls.Comments,
      method: Methods.POST,
      pathParams: { ticketId },
      data: JSON.stringify(data),
      contentType: ContentType.JSON
    });
  }

  async createCollaborator(ticketId: string, data: object) {
    return this.makeRequest({
      url: ZendeskTicketUrls.Collaborators,
      method: Methods.POST,
      pathParams: { ticketId },
      data: JSON.stringify(data),
      contentType: ContentType.JSON
    });
  }

  async createTicketField(data: object) {
    return this.makeRequest({
      url: ZendeskTicketUrls.TicketFields,
      method: Methods.POST,
      data: JSON.stringify(data),
      contentType: ContentType.JSON
    });
  }

  async createTicketFieldOption(ticketFieldId: string, data: object) {
    return this.makeRequest({
      url: ZendeskTicketUrls.TicketFieldOptions,
      method: Methods.POST,
      pathParams: { ticketFieldId },
      data: JSON.stringify(data),
      contentType: ContentType.JSON
    });
  }

  async updateTicket(ticketId: string, data: object) {
    return this.makeRequest({
      url: ZendeskTicketUrls.Ticket,
      method: Methods.PUT,
      pathParams: { ticketId },
      data: JSON.stringify(data),
      contentType: ContentType.JSON
    });
  }

  async updateTicketField(ticketFieldId: string, data: object) {
    return this.makeRequest({
      url: ZendeskTicketUrls.TicketField,
      method: Methods.PUT,
      pathParams: { ticketFieldId },
      data: JSON.stringify(data),
      contentType: ContentType.JSON
    });
  }

  async updateTicketFieldOption(ticketFieldId: string, data: object) {
    return this.makeRequest({
      url: ZendeskTicketUrls.TicketFieldOptions,
      method: Methods.PUT,
      pathParams: { ticketFieldId },
      data: JSON.stringify(data),
      contentType: ContentType.JSON
    });
  }

  async deleteTicket(ticketId: string) {
    return this.makeRequest({
      url: ZendeskTicketUrls.Ticket,
      method: Methods.DELETE,
      pathParams: { ticketId }
    });
  }

  async deleteTicketField(ticketFieldId: string) {
    return this.makeRequest({
      url: ZendeskTicketUrls.TicketField,
      method: Methods.DELETE,
      pathParams: { ticketFieldId }
    });
  }

  async restoreTicket(ticketId: string) {
    return this.makeRequest({
      url: ZendeskTicketUrls.Restore,
      method: Methods.PUT,
      pathParams: { ticketId }
    });
  }

  async markTicketAsSpam(ticketId: string) {
    return this.makeRequest({
      url: ZendeskTicketUrls.MarkAsSpam,
      method: Methods.PUT,
      pathParams: { ticketId }
    });
  }

  async getTicketForms() {
    return this.makeRequest({
      url: ZendeskTicketUrls.TicketForms,
      method: Methods.GET
    });
  }

  async getTicketBrands() {
    return this.makeRequest({
      url: ZendeskTicketUrls.TicketBrands,
      method: Methods.GET
    });
  }
}
