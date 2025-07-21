import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { IoMdArrowDropdown } from "react-icons/io";

import Navbar from '../Components/Navbar';

const Dashboard = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filterType, setFilterType] = useState('name');
    const [availabilityFilter, setAvailabilityFilter] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    const auth = getAuth();
    const currentUser = auth.currentUser;

    useEffect(() => {
        const fetchUsers = async () => {
            const usersRef = collection(db, 'users');
            const snapshot = await getDocs(usersRef);
            const users = snapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                
            setAllUsers(users);
            setFilteredUsers(users);
        };
        fetchUsers();
    }, [currentUser]);

    const handleSearch = () => {
        let results = allUsers;
        if (searchValue) {
            results = results.filter(user => {
                const field = filterType === 'name' ? user.name : user.skillsWanted;
                return field.toLowerCase().includes(searchValue.toLowerCase());
            });
        }
        if (availabilityFilter) {
            results = results.filter(user => user.availability === availabilityFilter);
        }
        setFilteredUsers(results);
    };

    return (
        <div className="w-screen min-h-screen bg-background p-6 flex flex-col  items-center font-body">
            <Navbar />
            <div className='flex justify-center items-center flex-col w-full gap-4 m-4'>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
                    <div className='p-2  border rounded-md bg-white flex justify-center items-center'>
                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className=" appearance-none"
                        >
                            <option value="name">Search by Name</option>
                            <option value="skillsWanted">Search by Skills Wanted</option>
                        </select>
                        <IoMdArrowDropdown />

                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 border w-88 rounded-md md:w-3/6"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div className='p-2 border rounded-md bg-white flex justify-center items-center gap-4' >
                        <select
                            value={availabilityFilter}
                            onChange={(e) => setAvailabilityFilter(e.target.value)}
                            className="appearance-none"
                        >
                            <option value="">All Availabilities</option>
                            <option value="Weekdays">Weekdays</option>
                            <option value="Weekends">Weekends</option>
                            <option value="Evenings">Evenings</option>
                            <option value="Flexible">Flexible</option>
                        </select>
                        <IoMdArrowDropdown />

                    </div>
                    <button
                        onClick={handleSearch}
                        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary"
                    >
                        Search
                    </button>
                </div>
                <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-6 w-full m-4 items-center">
                    {filteredUsers.length === 0 && (
                        <p className="text-center col-span-full text-gray-600">No users found.</p>
                    )}
                    {filteredUsers.map(user => (
                        <div
                            key={user.id}
                            className="bg-tertiary p-6 rounded-xl shadow-md space-y-2 border border-gray-200"
                        >
                            <h2 className="text-4xl font-body font-bold">{user.name}</h2>
                            <p><span className="font-semibold">Offers:</span> {user.skillsOffered}</p>
                            <p><span className="font-semibold">Wants:</span> {user.skillsWanted}</p>
                            <p><span className="font-semibold">Availability:</span> {user.availability}</p>
                            <button
                                onClick={() => alert(`Request sent to ${user.name}`)}
                                className="mt-3 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary"
                            >
                                Send Request
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
