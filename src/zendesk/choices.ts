export enum ZendeskTicketUrls {
  Ticket = '/api/v2/tickets/{ticketId}.json',
  Tickets = '/api/v2/tickets.json',
  Comments = '/api/v2/tickets/{ticketId}/comments.json',
  Audits = '/api/v2/tickets/{ticketId}/audits.json',
  Metrics = '/api/v2/tickets/{ticketId}/metrics.json',
  Incidents = '/api/v2/tickets/{ticketId}/incidents.json',
  Collaborators = '/api/v2/tickets/{ticketId}/collaborators.json',
  SatisfactionRatings = '/api/v2/tickets/{ticketId}/satisfaction_ratings.json',
  Tags = '/api/v2/tickets/{ticketId}/tags.json',
  TicketFields = '/api/v2/ticket_fields.json',
  TicketField = '/api/v2/ticket_fields/{ticketFieldId}.json',
  TicketFieldOptions = '/api/v2/ticket_fields/{ticketFieldId}/options.json',
  Restore = '/api/v2/tickets/{ticketId}/restore.json',
  MarkAsSpam = '/api/v2/tickets/{ticketId}/mark_as_spam.json',
  TicketForms = '/api/v2/ticket_forms.json',
  TicketBrands = '/api/v2/brands.json',
  TicketMacros = '/api/v2/macros.json'
}

export enum ZendeskUserUrls {
  User = '/api/v2/users/{userId}.json',
  Users = '/api/v2/users.json',
  Related = '/api/v2/users/{userId}/related.json',
  Tickets = '/api/v2/users/{userId}/tickets/requested.json',
  Organizations = '/api/v2/users/{userId}/organizations.json',
  Groups = '/api/v2/users/{userId}/groups.json',
  Tags = '/api/v2/users/{userId}/tags.json',
  Identities = '/api/v2/users/{userId}/identities.json',
  Identity = '/api/v2/users/{userId}/identities/{identityId}.json',
  UserGroups = '/api/v2/groups.json'
}

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export enum ContentType {
  JSON = 'application/json'
}
