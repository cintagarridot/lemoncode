import { createContext } from 'react';

interface ContextModel {
    organization: string;
    setOrganization: (org: string) => void;
}

export const OrganizationContext = createContext<ContextModel>(null);