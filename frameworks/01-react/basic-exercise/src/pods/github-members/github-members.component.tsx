import React from "react";
import Pagination from '@mui/material/Pagination';
import { Link } from "react-router-dom";
import { Constants } from "./github-members.constants";
import { MemberEntity } from "./github-members.vm";
import './github-members.styles.css';

interface Props {
  members: MemberEntity[],
  organization: string,
  handleOnChangeInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleOnClick: () => void,
  noOfPages: number,
  page: number,
  handleChange: (event, value) => void,
}

export const GithubMembersList: React.FC<Props> = ({
  members,
  organization,
  handleOnChangeInputValue,
  noOfPages,
  page,
  handleChange,
  handleOnClick,
}) => (

    <>
      <h2>{Constants.listPageTitle}</h2>+{" "}
      <Link to="/rick-and-morty/list">{Constants.rickAndMortyListLink}</Link>
      <div className="searchBar">
        <h3>{Constants.searchLabel}</h3>
        <input placeholder="Enter an organization" value={organization} onChange={handleOnChangeInputValue} type="search" className="inputSearch" />
        <button onClick={handleOnClick}>{Constants.searchButton}</button>
      </div>
      <div className="list-user-list-container">
        <span className="list-header">{Constants.avatarTitle}</span>
        <span className="list-header">{Constants.idTitle}</span>
        <span className="list-header">{Constants.nameTitle}</span>
        {members.length && members
        .slice((page - 1) * Constants.PER_PAGE, page * Constants.PER_PAGE)
        .map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/member/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
      <div className="paginationDiv">
        <Pagination
        count={noOfPages}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        />
      </div>
      
    </>
  );

