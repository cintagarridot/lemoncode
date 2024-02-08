import { Member } from "./api.model";

export const getMemberDetails = (id: string): Promise<Member> => {
    return fetch(`https://api.github.com/users/${id}`)
    .then((response) => response.json());
}