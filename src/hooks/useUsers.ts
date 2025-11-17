import { useState, useEffect, useMemo } from "react";
import type { User } from "../types/user";

export const useUsers = (filterUsers: string) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [debounceFilterUsers, setDebounceFilterUsers] = useState<string>("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!res.ok) throw new Error("Failed to fetch users data");
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                setError(true);
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        const userTimeOut = setTimeout(() => {
            fetchUsers();
            setDebounceFilterUsers(filterUsers);
        }, 300);
        return () => clearTimeout(userTimeOut);
    }, [filterUsers]);

    const filteredUsers = useMemo(() => {
        return users.filter(user =>
            user.email.toLowerCase().includes(debounceFilterUsers.toLowerCase())
        ) 
    }, [users, debounceFilterUsers])

    return { users, filteredUsers, loading, error };
}