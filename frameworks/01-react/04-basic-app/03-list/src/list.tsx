import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { defaultOrganization, searchButton, searchLabel } from "./constants";
import { OrganizationContext } from "./contexts/organizationContext";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const  {organization, setOrganization } = React.useContext(OrganizationContext)

  console.log('organization', organization)
  const fetchApi = () => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }

  React.useEffect(() => {
    fetchApi();
  }, []);

  const handleOnChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrganization(event.target.value);
  };

  const handleOnClick = () => {
    fetchApi();
  };

  return (
    <>
      <h2>Hello from List page</h2>+{" "}
      <div className="searchBar">
        <h3>{searchLabel}</h3>
        <input placeholder="Enter an organization" value={organization} onChange={handleOnChangeInputValue} type="search" className="inputSearch" />
        <button onClick={handleOnClick}>{searchButton}</button>
      </div>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
