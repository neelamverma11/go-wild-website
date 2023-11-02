import React from 'react';
import axios from 'axios';

const ApiComponent = async (formData, image, adharCard, panCard, otherID, dob, id) => {
    const originalDob = "11/05/1972";
    const [day, month, year] = originalDob.split('/');
    const formattedDob = `${month}/${day}/${year}`;

    const formDataImage = new FormData();
    formDataImage.append('guide_id', id);
    formDataImage.append('image', image);
    formDataImage.append('aadhar_id', adharCard);
    formDataImage.append('pan_id', panCard);
    formDataImage.append('other_id', otherID);
    formDataImage.append('dob', formattedDob);

    for (const key in formData) {
        formDataImage.append(key, formData[key]);
    }

    try {
        const response = await axios.post(
            'https://rashailmachinetest.pythonanywhere.com/test/guide_personal_details/',
            formDataImage
        );

        if (response.status === 200) {
            return { success: true, errors: {} };
        }
    } catch (error) {
        return { success: false, errors: { api: 'API request failed' } };
    }
};

export default ApiComponent;
