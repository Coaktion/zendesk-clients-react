# Zendesk Clients React

![test workflow](https://github.com/Coaktion/zendesk-clients-react/actions/workflows/test.yml/badge.svg)
![stale workflow](https://github.com/Coaktion/zendesk-clients-react/actions/workflows/stale.yml/badge.svg)
![Release Draft workflow](https://github.com/Coaktion/zendesk-clients-react/actions/workflows/release-drafter.yml/badge.svg)

API client for ZENDESK applications

## Installation

```bash
npm install @coaktion/zendesk-clients-react
```

## Generate docs

```bash
npm run generate-docs
```

## Usage

```typescript
import {
  ZendeskTicketsClient,
  ZendeskUsersClient
} from '@coaktion/zendesk-clients-react';
import ZAFClient from 'zendesk_app_framework_sdk';

const zafClient = ZAFClient.init();
const ticketClient = new ZendeskTicketsClient(zafClient);
const userClient = new ZendeskUsersClient(zafClient);

ticketClient.getTicket('123456').then((ticket) => {
  console.log(ticket);
});

userClient.getUser('123456').then((user) => {
  console.log(user);
});
```

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for details.

## License

Client Core is [Copyright](./LICENSE).
