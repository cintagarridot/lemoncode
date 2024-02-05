export const getMemberDetails = (id: string) => {
    return fetch(`https://api.github.com/users/${id}`)
    .then((response) => response.json());
}