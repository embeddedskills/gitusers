import { React } from "react";
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import User from './user';

const Container = styled.div`
width:100%;
background:#332e4a;
`;

const UsersWrapper = styled.div`
color:white;
max-width:100%;
padding:15px 0 15px 0;
margin: 0 50px 0 50px;
`;

const UserGrid = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Users = () => {

  const users = useSelector((state) => state.users.list);

  // const dummyuser = [
  //   {
  //     name : "John",
  //     id: "1"
  //   },
  //   {
  //     name : "Nicole",
  //     id: "2"
  //   },
  //   {
  //     name : "Kevin",
  //     id: "3"
  //   },
  //   {
  //     name : "Albert",
  //     id: "4"
  //   },
  // ];

  return (
    <Container>
      <UsersWrapper>
        <h1>
        User list:
        </h1>
        <UserGrid>
          {users.map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.login}
              avatar={user.avatar_url}
            />
          ))
          }
        </UserGrid>
      </UsersWrapper>
    </Container>
  );
};
  
export default Users;