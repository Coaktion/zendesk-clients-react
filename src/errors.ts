export class ZendeskClientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ZendeskClientError';
  }
}

export class ValidationError extends Error {
  constructor(message: object) {
    super(JSON.stringify(message));
    this.name = 'ValidationError';
  }
}
