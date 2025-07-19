import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase'; // your firebase config

const ProfileSetup = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const auth = getAuth();
    const user = auth.currentUser;

    const onSubmit = async (data) => {
        if (!user) {
            console.error("No authenticated user found.");
            return;
        }

        const skillsOfferedArray = data.skillsOffered.split(',').map(skill => skill.trim());
        const skillsWantedArray = data.skillsWanted.split(',').map(skill => skill.trim());

        try {
            await setDoc(doc(db, "users", user.uid), {
                name: data.name,
                email: user.email,
                location: data.location || "",
                bio: data.bio || "",
                skillsOffered: skillsOfferedArray,
                skillsWanted: skillsWantedArray,
                availability: data.availability || "",
                isPublic: data.isPublic || false
            });

            console.log("Profile saved!");
            navigate('/userprofile');
        } catch (error) {
            console.error("Error saving profile:", error);
        }
    }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-background font-body px-4">
                <div className="w-full max-w-2xl bg-tertiary p-8 rounded-lg shadow-xl">
                    <h2 className="text-3xl font-highlights text-center mb-6">Set Up Your Profile</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">


                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                {...register("name", { required: true })}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Your full name"
                            />
                            {errors.name && <p className="text-red-600 text-sm mt-1">Name is required</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Location</label>
                            <input
                                {...register("location")}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="City, Country"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Bio</label>
                            <textarea
                                {...register("bio")}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Tell us about yourself..."
                                rows="3"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Skills You Offer</label>
                            <input
                                {...register("skillsOffered", { required: true })}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="e.g. HTML, Singing, UI Design"
                            />
                            {errors.skillsOffered && <p className="text-red-600 text-sm mt-1">This field is required</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Skills You Want to Learn</label>
                            <input
                                {...register("skillsWanted", { required: true })}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="e.g. Python, Guitar, Photography"
                            />
                            {errors.skillsWanted && <p className="text-red-600 text-sm mt-1">This field is required</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Availability</label>
                            <select
                                {...register("availability")}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="">Select</option>
                                <option value="Weekdays">Weekdays</option>
                                <option value="Weekends">Weekends</option>
                                <option value="Evenings">Evenings</option>
                                <option value="Flexible">Flexible</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-4">
                            <label className="text-sm font-medium text-gray-700">Make Profile Public?</label>
                            <input
                                type="checkbox"
                                {...register("isPublic")}
                                className="w-5 h-5"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-secondary transition"
                        >
                            Save Profile
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ProfileSetup
