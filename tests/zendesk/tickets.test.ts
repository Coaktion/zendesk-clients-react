import { ClientOptionsZendesk } from '@coaktion/client-core/dist/types';

import { Methods, ZendeskTicketUrls } from '../../src';
import { ZendeskTicketsClient } from '../../src';
import { ContentType } from '../../src/zendesk/choices';

describe('ZendeskTicketsClient', () => {
  let zendeskTicketsClient: ZendeskTicketsClient;
  beforeEach(() => {
    jest.resetAllMocks();
    zendeskTicketsClient = new ZendeskTicketsClient({} as ClientOptionsZendesk);
    zendeskTicketsClient.makeRequest = jest.fn();
  });

  it('should call makeRequest with the correct params to getTicket', () => {
    zendeskTicketsClient.getTicket('1');
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.Ticket,
      method: Methods.GET,
      pathParams: { ticketId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getTickets', () => {
    zendeskTicketsClient.getTickets();
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.Tickets,
      method: Methods.GET
    });
  });

  it('should call makeRequest with the correct params to getComments', () => {
    zendeskTicketsClient.getComments('1');
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.Comments,
      method: Methods.GET,
      pathParams: { ticketId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getAudits', () => {
    zendeskTicketsClient.getAudits('1');
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.Audits,
      method: Methods.GET,
      pathParams: { ticketId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getMetrics', () => {
    zendeskTicketsClient.getMetrics('1');
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.Metrics,
      method: Methods.GET,
      pathParams: { ticketId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getIncidents', () => {
    zendeskTicketsClient.getIncidents('1');
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.Incidents,
      method: Methods.GET,
      pathParams: { ticketId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getCollaborators', () => {
    zendeskTicketsClient.getCollaborators('1');
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.Collaborators,
      method: Methods.GET,
      pathParams: { ticketId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getSatisfactionRatings', () => {
    zendeskTicketsClient.getSatisfactionRatings('1');
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.SatisfactionRatings,
      method: Methods.GET,
      pathParams: { ticketId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getTags', () => {
    zendeskTicketsClient.getTags('1');
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.Tags,
      method: Methods.GET,
      pathParams: { ticketId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getTicketFields', () => {
    zendeskTicketsClient.getTicketFields();
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.TicketFields,
      method: Methods.GET
    });
  });

  it('should call makeRequest with the correct params to getTicketField', () => {
    zendeskTicketsClient.getTicketField('1');
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.TicketField,
      method: Methods.GET,
      pathParams: { ticketFieldId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getTicketFieldOptions', () => {
    zendeskTicketsClient.getTicketFieldOptions('1');
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.TicketFieldOptions,
      method: Methods.GET,
      pathParams: { ticketFieldId: '1' }
    });
  });

  it('should call makeRequest with the correct params to createTicket', () => {
    zendeskTicketsClient.createTicket({});
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.Tickets,
      method: Methods.POST,
      data: JSON.stringify({}),
      contentType: ContentType.JSON
    });
  });

  it('should call makeRequest with the correct params to createComment', () => {
    zendeskTicketsClient.createComment('1', {});
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.Comments,
      method: Methods.POST,
      pathParams: { ticketId: '1' },
      data: JSON.stringify({}),
      contentType: ContentType.JSON
    });
  });

  it('should call makeRequest with the correct params to createCollaborator', () => {
    zendeskTicketsClient.createCollaborator('1', {});
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.Collaborators,
      method: Methods.POST,
      pathParams: { ticketId: '1' },
      data: JSON.stringify({}),
      contentType: ContentType.JSON
    });
  });

  it('should call makeRequest with the correct params to createTicketField', () => {
    zendeskTicketsClient.createTicketField({});
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.TicketFields,
      method: Methods.POST,
      data: JSON.stringify({}),
      contentType: ContentType.JSON
    });
  });

  it('should call makeRequest with the correct params to createTicketFieldOption', () => {
    zendeskTicketsClient.createTicketFieldOption('1', {});
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.TicketFieldOptions,
      method: Methods.POST,
      pathParams: { ticketFieldId: '1' },
      data: JSON.stringify({}),
      contentType: ContentType.JSON
    });
  });

  it('should call makeRequest with the correct params to updateTicket', () => {
    zendeskTicketsClient.updateTicket('1', {});
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.Ticket,
      method: Methods.PUT,
      pathParams: { ticketId: '1' },
      data: JSON.stringify({}),
      contentType: ContentType.JSON
    });
  });

  it('should call makeRequest with the correct params to updateTicketField', () => {
    zendeskTicketsClient.updateTicketField('1', {});
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.TicketField,
      method: Methods.PUT,
      pathParams: { ticketFieldId: '1' },
      data: JSON.stringify({}),
      contentType: ContentType.JSON
    });
  });

  it('should call makeRequest with the correct params to updateTicketFieldOption', () => {
    zendeskTicketsClient.updateTicketFieldOption('1', {});
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.TicketFieldOptions,
      method: Methods.PUT,
      pathParams: { ticketFieldId: '1' },
      data: JSON.stringify({}),
      contentType: ContentType.JSON
    });
  });

  it('should call makeRequest with the correct params to deleteTicket', () => {
    zendeskTicketsClient.deleteTicket('1');
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.Ticket,
      method: Methods.DELETE,
      pathParams: { ticketId: '1' }
    });
  });

  it('should call makeRequest with the correct params to deleteTicketField', () => {
    zendeskTicketsClient.deleteTicketField('1');
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.TicketField,
      method: Methods.DELETE,
      pathParams: { ticketFieldId: '1' }
    });
  });

  it('should call makeRequest with the correct params to restoreTicket', () => {
    zendeskTicketsClient.restoreTicket('1');
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.Restore,
      method: Methods.PUT,
      pathParams: { ticketId: '1' }
    });
  });

  it('should call makeRequest with the correct params to markTicketAsSpam', () => {
    zendeskTicketsClient.markTicketAsSpam('1');
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.MarkAsSpam,
      method: Methods.PUT,
      pathParams: { ticketId: '1' }
    });
  });

  it('should call makeRequest with the correct params to getTicketForms', () => {
    zendeskTicketsClient.getTicketForms();
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.TicketForms,
      method: Methods.GET
    });
  });

  it('should call makeRequest with the correct params to getTicketBrands', () => {
    zendeskTicketsClient.getTicketBrands();
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.TicketBrands,
      method: Methods.GET
    });
  });
  it('Should call makeRequest with the correct params to getInstanceMacros', () => {
    const params = { pageSize: 10 };
    zendeskTicketsClient.getInstanceMacros(params);
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.TicketMacros,
      method: Methods.GET,
      params: {
        'page[size]': 10
      }
    });
  });

  it('Should call makeRequest with the correct params to getInstanceMacros if pagination is required', () => {
    const params = { pageSize: 10, cursor: 'cursorUrl' };
    zendeskTicketsClient.getInstanceMacros(params);
    expect(zendeskTicketsClient.makeRequest).toHaveBeenCalledWith({
      url: ZendeskTicketUrls.TicketMacros,
      method: Methods.GET,
      params: {
        'page[size]': 10,
        'page[after]': 'cursorUrl'
      }
    });
  });
});
