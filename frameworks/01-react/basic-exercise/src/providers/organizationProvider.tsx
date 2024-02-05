import React from 'react';
import {OrganizationContext} from '../contexts/organizationContext'

interface Props {
    children: React.ReactNode;
}

export const OrganizationProvider: React.FC<Props> = (props) => {
    const [organization, setOrganization] = React.useState<string>('lemoncode')

    return (
        <OrganizationContext.Provider value={{ organization, setOrganization}}>
            {props.children}
        </OrganizationContext.Provider>
    )
}

