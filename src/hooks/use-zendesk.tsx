import { ClientOptionsZendesk } from '@coaktion/client-core/dist/types';
import React, {
  type ReactNode,
  createContext,
  useContext,
  useMemo,
  useState
} from 'react';

type ContextProps = {
  zendeskClient: any;
  setZendesk: React.Dispatch<React.SetStateAction>;
  options: ClientOptionsZendesk;
  setOptions: React.Dispatch<React.SetStateAction<ClientOptionsZendesk>>;
};

type Props = {
  children: ReactNode;
};

const ZendeskContext = createContext<ContextProps>({} as ContextProps);

const ZendeskProvider: React.FC<Props> = ({ children }: Props) => {
  const [zendeskClient, setZendesk] = useState(null);
  const [options, setOptions] = useState<ClientOptionsZendesk>({});

  const contextValue = useMemo(
    () => ({ zendeskClient, setZendesk, options, setOptions }),
    [zendeskClient, setZendesk, options, setOptions]
  );

  return (
    <ZendeskContext.Provider value={contextValue}>
      {children}
    </ZendeskContext.Provider>
  );
};

const useZendesk = (): ContextProps => {
  const context = useContext(ZendeskContext);
  if (!context)
    throw new Error('useZendesk must be used within a ZendeskProvider');
  return context;
};

export { ZendeskProvider, useZendesk };
