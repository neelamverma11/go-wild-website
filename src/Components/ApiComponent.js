import React from 'react';
import axios from 'axios';

const ApiComponent = async (formData, image, adharCard, panCard, otherID, dob, id, navigate, handleOpenDialog) => {

    const formDataImage = new FormData();
    formDataImage.append('guide_id', id);
    formDataImage.append('image', image);
    formDataImage.append('aadhar_id', adharCard);
    formDataImage.append('pan_id', panCard);
    formDataImage.append('other_id', otherID);
    formDataImage.append('dob', dob);

    for (const key in formData) {
        formDataImage.append(key, formData[key]);
    }

    try {
        const response = await axios.post(
            'https://rashailmachinetest.pythonanywhere.com/test/guide_personal_details/',
            formDataImage
        );

        if (response.status === 201) {
            handleOpenDialog('Success', 'Form data submitted successfully.');
            navigate('/');
        } else {
            handleOpenDialog('Failure', 'Failed to submit the form data. Please try again.');
        }
    } catch (error) {
        handleOpenDialog('Failure', 'API request failed. Please try again.');
    }
};

export default ApiComponent;
