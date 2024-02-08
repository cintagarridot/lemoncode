import * as apiModel from "./api/api.model";
import * as viewModel from "./github-members.vm";

export const mapGithubMembersFromApiToViewModel = (data: apiModel.Member[]): viewModel.MemberEntity[] =>
  data.map((item) => mapMemberToVM(item));

const mapMemberToVM = (data: apiModel.Member): viewModel.MemberEntity => ({
  id: data.id,
  login: data.login,
  avatar_url: data.avatar_url,
});
