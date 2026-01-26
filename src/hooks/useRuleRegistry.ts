/**
 * HARBOR A (Corporate) – Rule Registry Hook Stub
 * MYA-GOV-009A | TypeScript Remediation | Era 2026
 * Authority: TS-Λ3
 */

export interface TaxRule {
    id: string;
    name: string;
    description: string;
    category: string;
    threshold?: number;
    active: boolean;
  }
  
  export function useRuleRegistry() {
    return {
      rules: [] as TaxRule[],
      getRuleById: (_id: string): TaxRule | null => null,
      isLoading: false,
      error: null,
    };
  }