import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useRefreshToken from "./hooks/useRefreshToken";
import useAuth from "./hooks/useAuth"
import useFetchPrivate from "./hooks/useFetchPrivate";


const Users = () => {
    const [users, setUsers] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const refresh = useRefreshToken();
    const fetchPrivate = useFetchPrivate();
    const {auth} = useAuth();

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetchPrivate('http://localhost:3000/users')
                const users = await response.json();
                setUsers(users);
                console.log(users);
            } catch (err) {
                console.error(err);
            }
        }

        getUsers();
    }, [])

    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.success}</li>)}
                    </ul>
                ) : <p>No users to display</p>
            }
            <button onClick={refresh}>Refresh</button>
        </article>
    );
};

export default Users;