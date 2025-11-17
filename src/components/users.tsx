import type React from "react";
import { useState, useEffect, useMemo } from "react";

interface User {
    id: number;
    name: string;
    email: string;
    address: {
        city: string;
    };
}

export const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [filterUsers, setFilterUsers] = useState<string>("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!res.ok) {
                    throw new Error("Failed to fetch users");
                }

                const user = await res.json();
                setUsers(user);
            } catch (error) {
                console.error(error)
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();

        // .then(response => {
        //     if (!response.ok) {
        //         throw new Error("Failed fetching users");
        //     }
        //     return response.json()
        // })
        // .then(json => ( setUsers(json)))
        // .catch(error => {
        //     setError(true);
        //     console.error("Error fetching posts:", error);
        // })
        // .finally(() => setLoading(false));

    }, []);

    const filteredUsers = useMemo(() => {
        return users.filter((user: any) =>
            user.email.toLowerCase().includes(filterUsers.toLowerCase())
        );
    }, [users, filterUsers]);

    if (loading) return <>loading...</>;
    if (error) return <>Error fetching posts ...</>;

    return (
        <section>
            <div className="mb-4 flex flex-row gap-4">
                <button type="button" className="py-2 px-6 bg-primary text-white cursor-pointer" onClick={() => setFilterUsers(".biz")}>.biz</button>
                <button type="button" className="py-2 px-6 bg-primary text-white cursor-pointer" onClick={() => setFilterUsers(".tv")}>.tv</button>
                <button type="button" className="py-2 px-6 bg-secondary text-white cursor-pointer" onClick={() => setFilterUsers("")}>reset</button>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredUsers.map((user: any) =>
                    <div
                        key={user.id}
                        className="border border-gray p-4 rounded-md card-border"
                    >
                        <h2>{user.name}</h2>
                        <span>{user.email}</span>
                        <span>{user.address.city}</span>
                    </div>
                )}
            </div>
        </section>
    )
}