import { Member } from "./api.model";

export const getMembersByOrganization = (organization: string): Promise<Member[]> => {
    return fetch(`https://api.github.com/orgs/${organization}/members`)
    .then((response) => response.json());
}