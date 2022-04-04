import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteUser } from './../store/store';

const User = (props) => {
    const dispatch = useDispatch();
    
    const { id, name,avatar } = props;

    const deleteUserHandler = () => {
        dispatch(deleteUser(props.id));
    };
    
    const UserCard =   styled.div`
    padding:10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: auto;
    height: 400px;
    font-size:30px
    `;
    const UserDel =   styled.span`
    color:black;
    font-weight:bold;
    font-size:18px;
    cursor:pointer;
    max-height: 30px;
    `;

    const Img = styled.img`
        height:300px;
        width:300px;
    `;

    return(
        <UserCard>
            <Img src={`${avatar}`} />
            
            {name}
            <UserDel onClick={deleteUserHandler}>Remove</UserDel>
        </UserCard>
    );

};

export default User;