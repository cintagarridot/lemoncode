import * as api from "./api/api";
import { mapGithubMembersFromApiToViewModel } from "./github-members.mappers";
import * as viewModel from "./github-members.vm";

export const getMembers = (org: string): Promise<viewModel.MemberEntity[]> => {
  return api.getMembersByOrganization(org).then(mapGithubMembersFromApiToViewModel);
};
