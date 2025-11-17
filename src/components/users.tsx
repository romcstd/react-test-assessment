import type React from "react";
import { useState } from "react";
import { useUsers } from "../hooks/useUsers";

export const Users: React.FC = () => {
    const [filterUsers, setFilterUsers] = useState<string>("");
    const { filteredUsers, loading, error } = useUsers(filterUsers);
    if (loading) return <>loading...</>;
    if (error) return <>Error fetching users ...</>;

    return (
        <section>
            
            <div className="mb-4 flex flex-row gap-4">
                <button type="button" className="py-2 px-6 bg-primary text-white cursor-pointer" onClick={() => setFilterUsers(".biz")}>.biz</button>
                <button type="button" className="py-2 px-6 bg-primary text-white cursor-pointer" onClick={() => setFilterUsers(".tv")}>.tv</button>
                <button type="button" className="py-2 px-6 bg-secondary text-white cursor-pointer" onClick={() => setFilterUsers("")}>reset</button>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredUsers.map((user) =>
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