export class ZendeskClientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ZendeskClientError';
  }
}
