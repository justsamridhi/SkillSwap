import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import location from '../assets/location.png'
import bio from '../assets/bio.png'
import want from '../assets/want.png'
import target from '../assets/target.png'
import time from '../assets/time.png'
import lock from '../assets/lock.png'

const UserProfile = () => {
    const auth = getAuth();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            const user = auth.currentUser;
            if (user) {
                try {
                    const docRef = doc(db, 'users', user.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setUserData(docSnap.data());
                    } else {
                        console.log("No profile data found.");
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return <div className="text-center mt-10 text-lg">Loading Profile...</div>;
    }

    if (!userData) {
        return <div className="text-center mt-10 text-lg text-red-600">User data not found.</div>;
    }

    return (
        <div className="w-full bg-primary p-6 flex flex-col  items-center font-body">
            <Navbar />
            <section className='h-fit m-4 flex justify-center items-center w-full '>

                <div className="w-11/12 h-5/6 flex flex-col justify-center items-center bg-tertiary p-8 rounded-2xl shadow-2xl">
                    <h2 className="text-3xl font-body text-center mb-6">Welcome,<span className=' text-primary text-5xl font-highlights'> {userData.name}</span></h2>

                    <div className="space-y-4 text-gray-700 w-full ">
                        <div className='border-2 rounded-2xl gap-3 border-primary p-4 w-full flex items-center justify-start' >
                            <img src={location} className='w-10 h-10' alt="" />
                            <div className='flex flex-col items-center justify-start'>
                                <label className='text-2xl font-extrabold font-body text-primary' >Location :</label>
                                <p className='' >{userData.location || "Not set"}</p>
                            </div>
                        </div>
                        <div className='border-2 gap-3 rounded-2xl border-primary p-4 w-full flex items-center justify-start' >
                            <img src={bio} className='w-10 h-10' alt="" />
                            <div className='flex flex-col text-left'>
                                <label className='text-2xl font-extrabold font-body text-primary' >Bio :</label>
                                <p className='' >{userData.bio || "Not set"}</p>
                            </div>
                        </div>
                        <div className='border-2 gap-3  rounded-2xl border-primary p-4 w-full flex items-center justify-start' >
                            <img src={want} className='w-10 h-10' alt="" />
                            <div className='flex flex-col items-start justify-start'>
                                <label className='text-2xl font-extrabold font-body text-primary' >Skills Offered :</label>
                                <p className=' text-left' >{userData.skillsOffered || "Not set"}</p>
                            </div>
                        </div>
                        <div className='border-2 gap-3  rounded-2xl border-primary p-4 w-full flex items-center justify-start' >
                            <img src={target} className='w-10 h-10' alt="" />
                            <div className='flex flex-col items-start justify-start'>
                                <label className='text-2xl font-extrabold font-body text-primary' >Skills Wanted :</label>
                                <p className=' text-left' >{userData.skillsWanted || "Not set"}</p>
                            </div>
                        </div>
                        <div className='border-2 gap-3  rounded-2xl border-primary p-4 w-full flex items-center justify-start' >
                            <img src={time} className='w-10 h-10' alt="" />
                            <div className='flex flex-col items-start justify-start'>
                                <label className='text-2xl font-extrabold font-body text-primary' >Availability :</label>
                                <p className=' text-left' >{userData.availability || "Not set"}</p>
                            </div>
                        </div>
                        <div className='border-2 gap-3  rounded-2xl border-primary p-4 w-full flex items-center justify-start' >
                            <img src={lock} className='w-10 h-10' alt="" />
                            <div className='flex flex-col items-start justify-start'>
                                <label className='text-2xl font-extrabold font-body text-primary' >Visibility :</label>
                                <p className=' text-left' >{userData.isPublic ? "Public" : "Private"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => alert('Edit feature coming soon...')}
                            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary transition"
                        >
                            Edit Profile
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default UserProfile;
