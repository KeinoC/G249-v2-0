import React, { createContext, useState, useEffect } from 'react';

interface User {
userId: string;
username: string;
first_name: string;
last_name: string;
address: string;
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
},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [user, setUser] = useState<User>({
userId: '',
username: '',
first_name: '',
last_name: '',
address: '',
});

return (
<UserContext.Provider value={{ user }}>
{children}
</UserContext.Provider>
);
};