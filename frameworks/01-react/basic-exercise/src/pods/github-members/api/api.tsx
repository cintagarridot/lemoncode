
export const getMembersByOrganization = (organization: string) => {
    return fetch(`https://api.github.com/orgs/${organization}/members`)
    .then((response) => response.json());
}