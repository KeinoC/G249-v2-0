import React, { createContext, useState, useEffect } from 'react';

interface User {
userId: string;
username: string;
first_name: string;
last_name: string;
address: string;
profile_img: string;
friend_since: string;
}

export interface UserContextProps {
user: User;
}

export const UserContext = createContext<UserContextProps>({
user: {
userId: '',
username: '',
first_name: '',
last_name: '',
address: '',
profile_img: '',
friend_since: '',
},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [user, setUser] = useState<User>({
userId: '1',
username: 'keinoc',
first_name: 'Keino',
last_name: 'Chichester',
address: 'Brooklyn, New York',
profile_img: 'https://i.pinimg.com/564x/75/e1/73/75e173eb37b5d047c9476ccc49cacf5b.jpg',
friend_since: "Dec, 2018"
});



return (
<UserContext.Provider value={{ user }}>
{children}
</UserContext.Provider>
);
};