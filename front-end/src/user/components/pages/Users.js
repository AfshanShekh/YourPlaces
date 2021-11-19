import React from "react";
import UserList from "../UsersList";

const Users = ()=>{
       const USERS=[
        {
         id:'u1',
         name: 'Afshan',
         image: 'https://tse1.mm.bing.net/th?id=OIP.vGZGXzwRPyVaTHhIQmvoKAHaEK&pid=Api&P=0&w=283&h=160',
         place: 3
        }
    ]

    return <UserList items={USERS}/>;
};

export default Users;