import { ClientOptionsZendesk } from '@coaktion/client-core/dist/types';
import {
  type ReactNode,
  createContext,
  useContext,
  useMemo,
  useState
} from 'react';

type ContextProps = {
  zendeskOptions: ClientOptionsZendesk;
  setZendeskOptions: React.Dispatch<React.SetStateAction<ClientOptionsZendesk>>;
};

type Props = {
  children: ReactNode;
};

const ZendeskContext = createContext<ContextProps>({} as ContextProps);

const ZendeskProvider: React.FC<Props> = ({ children }: Props) => {
  const [zendeskOptions, setZendeskOptions] = useState<ClientOptionsZendesk>(
    {} as ClientOptionsZendesk
  );

  const contextValue = useMemo(
    () => ({ zendeskOptions, setZendeskOptions }),
    [zendeskOptions, setZendeskOptions]
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
