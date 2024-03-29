import { ClientOptionsZendesk } from '@coaktion/client-core/dist/types';

import { useZendesk } from './hooks/use-zendesk';
import { ZendeskTicketsClient } from './zendesk/tickets';
import { ZendeskUsersClient } from './zendesk/users';

const dependencesMapper: any = {
  tickets: ZendeskTicketsClient,
  users: ZendeskUsersClient
};
type Props = {
  settings: any;
  Component: React.FC<any>;
  dependences: any[];
};

const makeDependences = (
  zendeskClient: ClientOptionsZendesk,
  dependences: any[]
) => {
  const dependencesObject = {} as any;
  dependences.forEach((dependence) => {
    if (!dependencesMapper[dependence])
      throw new Error(`Dependence ${dependence} not found`);

    dependencesObject[dependence] = new dependencesMapper[dependence](
      zendeskClient
    );
  });

  return dependencesObject;
};

export const MakeBaseComponent: React.FC<Props> = ({
  settings,
  Component,
  dependences
}: Props) => {
  const { zendeskOptions } = useZendesk();
  return (
    <Component
      settings={settings}
      {...makeDependences(zendeskOptions, dependences)}
    />
  );
};
