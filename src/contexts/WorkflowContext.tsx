import React, { createContext, useContext, useState, ReactNode } from 'react';

export type WorkflowState = 'IDLE' | 'QUERYING' | 'COMPLETE';

interface WorkflowContextType {
  state: WorkflowState;
  query: string;
  response: string | null;
  setQuery: (query: string) => void;
  submitQuery: () => Promise<void>;
  reset: () => void;
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined);

export const useWorkflow = () => {
  const context = useContext(WorkflowContext);
  if (!context) {
    throw new Error('useWorkflow must be used within WorkflowProvider');
  }
  return context;
};

interface WorkflowProviderProps {
  children: ReactNode;
}

export const WorkflowProvider: React.FC<WorkflowProviderProps> = ({ children }) => {
  const [state, setState] = useState<WorkflowState>('IDLE');
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);

  const submitQuery = async () => {
    if (!query.trim()) return;
    
    setState('QUERYING');
    
    // Simulate Ollie processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setResponse(`Ollie processed: "${query}"`);
    setState('COMPLETE');
  };

  const reset = () => {
    setState('IDLE');
    setQuery('');
    setResponse(null);
  };

  return (
    <WorkflowContext.Provider value={{ state, query, response, setQuery, submitQuery, reset }}>
      {children}
    </WorkflowContext.Provider>
  );
};