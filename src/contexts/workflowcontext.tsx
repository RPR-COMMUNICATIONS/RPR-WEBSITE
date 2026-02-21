import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { askOllie } from '../services/ollieclient.ts';

/**
 * TS-Λ3 // WORKFLOW STATE ORCHESTRATOR [v2.0.1]
 * Path: src/contexts/workflowcontext.tsx
 * Mission: Finite State Machine (FSM) for User-AI Interaction
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * Fix: Enforced strictly lowercase filename to resolve TS2307 resolution failure.
 */

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

/**
 * 🛰️ WORKFLOW HOOK
 * Authoritative access for interactive components (Ollie/Visualizer).
 */
export const useWorkflow = () => {
    const context = useContext(WorkflowContext);
    if (!context) {
        throw new Error('[SENTINEL] WorkflowProvider context missing from tree.');
    }
    return context;
};

interface WorkflowProviderProps {
    children: ReactNode;
}

export const WorkflowProvider: React.FC<WorkflowProviderProps> = ({ children }) => {
    const { i18n } = useTranslation();
    const [state, setState] = useState<WorkflowState>('IDLE');
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState<string | null>(null);

    /**
     * 🚥 INTERACTION EXECUTION
     * Handshakes with the Singapore Node specialist (Ollie).
     */
    const submitQuery = async () => {
        if (!query.trim()) return;

        setState('QUERYING');

        try {
            // Direct latch to the internal bridge (asia-southeast1)
            const text = await askOllie(query, i18n.language);
            setResponse(text);
            setState('COMPLETE');
        } catch (err) {
            console.error("[SENTINEL] Workflow strike failure:", err);
            setResponse("System failure. Interaction aborted.");
            setState('COMPLETE');
        }
    };

    /**
     * 🧹 SESSION LIQUIDATION
     * Resets the FSM to IDLE for new telemetry ingestion.
     */
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

export default WorkflowProvider;