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
};

type Props = {
  children: ReactNode;
};

const ZendeskContext = createContext<ContextProps>({} as ContextProps);

const ZendeskProvider: React.FC<Props> = ({ children }: Props) => {
  const [zendeskClient, setZendesk] = useState(null);

  const contextValue = useMemo(
    () => ({ zendeskClient, setZendesk }),
    [zendeskClient, setZendesk]
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
