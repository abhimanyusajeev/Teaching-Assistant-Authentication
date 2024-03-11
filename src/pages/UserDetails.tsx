import React, { useState } from 'react';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        pinCode: '',
        phoneNumber: '',
        gender: 'male',
        country: '',
        subscription: '',
        profilePhoto: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === 'profilePhoto') {
            const file = (e.target as HTMLInputElement).files?.[0];
            setFormData({
                ...formData,
                profilePhoto: file,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="form_wrapper bg-white w-11/12 md:w-3/5 max-w-lg mx-auto p-8 mt-8 border-2 border-yellow-400 shadow-lg rounded-lg content-end ">
            <div className="title_container text-center mb-6">
                <h2 className="text-2xl font-semibold">User Details</h2>
            </div>
            <div className="profile_image_wrapper text-center mb-6">
                {formData.profilePhoto && (
                    <img
                        src={URL.createObjectURL(formData.profilePhoto)}
                        alt="Profile"
                        className="rounded-full w-24 h-25 mx-auto"
                    />
                )}
                {!formData.profilePhoto && (
                    <label htmlFor="profile-photo" className="cursor-pointer">
                        Choose Image
                        <input
                            type="file"
                            name="profilePhoto"
                            id="profile-photo"
                            accept="image/*"
                            className="hidden"
                            onChange={handleChange}
                        />
                    </label>
                )}
            </div>
            <form id="register-form" autoComplete="off" onSubmit={handleSubmit}>
                <div className="input_field flex flex-col space-y-4">
                    <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                    </span>
                    <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
                </div>
                <div className="input_field flex flex-col space-y-4">
                    <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                    </span>
                    <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
                </div>
                <div className="input_field flex flex-col space-y-4">
                    <span>
                        <i aria-hidden="true" className="fa fa-address-card"></i>
                    </span>
                    <input type="text" name="address" placeholder="Address" onChange={handleChange} />
                </div>
                <div className="input_field flex flex-col space-y-4">
                    <span>
                        <i aria-hidden="true" className="fa fa-map-pin"></i>
                    </span>
                    <input type="text" name="pinCode" placeholder="Pin Code" onChange={handleChange} />
                </div>
                <div className="input_field flex flex-col space-y-4">
                    <span>
                        <i aria-hidden="true" className="fa fa-phone"></i>
                    </span>
                    <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
                </div>
                <div className="input_field radio_option flex flex-col space-y-4">
                    <span className="radio_icon">
                        <i className="fa fa-venus-mars" aria-hidden="true"></i>
                    </span>
                    <div className="radio_group">
                        <input
                            type="radio"
                            name="gender"
                            id="gender-m"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
                        />
                        <label htmlFor="gender-m">Male</label>

                        <input
                            type="radio"
                            name="gender"
                            id="gender-f"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
                        />
                        <label htmlFor="gender-f">Female</label>
                    </div>
                </div>
                <div className="input_field select_option flex flex-col space-y-4">
                    <span>
                        <i id="country-icon" aria-hidden="true" className="fa fa-globe"></i>
                    </span>
                    <input
                        name="country"
                        type="text"
                        id="country-list"
                        list="country-datalist"
                        placeholder="Country of Origin"
                        onChange={handleChange}
                    />
                    <datalist id="country-datalist">
                        {/* Populate this with your list of countries */}
                    </datalist>
                </div>
                <div className="input_field select_option flex flex-col space-y-4">
                    <span>
                        <i id="subscription-icon" aria-hidden="true" className="fa fa-certificate"></i>
                    </span>
                    <select
                        name="subscription"
                        id="subscription-list"
                        onChange={handleChange}
                        defaultValue=""
                        required
                    >
                        <option value="" disabled hidden>
                            Choose Subscription Plan
                        </option>
                        <option value="games">Games</option>
                        <option value="pronunciations">Pronunciations</option>
                        <option value="drawing">Drawing</option>
                        <option value="drawing">Quiz</option>
                    </select>
                    <div>

                    </div>
                </div>
                <div className='text-center  flex flex-col space-y-9 '>
                    <input className="button bg-orange-300 " type="submit" value="Upload User Details" />
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
