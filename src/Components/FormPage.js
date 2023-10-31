import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import axios from 'axios';
import { FormLabel, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const FormPage = () => {
    const id = uuidv4();
    const [formData, setFormData] = useState({
        titles: '',
        first_name: '',
        last_name: '',
        bio: '',
        dob: '',
        gender: '',
        guide_city: '',
        guide_state: '',
        guide_country: '',
        contact_number: '',
        whatsapp_number: '',
        email: '',
        languages: '',
        activities: '',
        hobbies: '',
        guide_spot_city: '',
        guide_spot_places: '',
        experience: '',
        price_per_day: '',
        submitted_by: '',
        submitted_name: '',
        submitted_phone: '',
    });

    const [image, setImage] = useState(null);
    const [adharCard, setAdharCard] = useState(null);
    const [panCard, setPanCard] = useState(null);
    const [otherID, setOtherID] = useState(null);
    const [successDialogOpen, setSuccessDialogOpen] = useState(false);
    const [failureDialogOpen, setFailureDialogOpen] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setFormErrors({
            ...formErrors,
            [name]: '',
        });
    };

    const handleSuccessDialogClose = () => {
        setSuccessDialogOpen(false);
    };

    const handleFailureDialogClose = () => {
        setFailureDialogOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submit')
        // Basic client-side validation
        const errors = {};
        for (const key in formData) {
            if (!formData[key]) {
                errors[key] = 'This field is required.';
            }
        }
        setFormErrors(errors);

        // // If there are validation errors, don't submit the request
        // if (Object.keys(errors).length > 0) {
        //     return;
        // }

        try {
            const formDataImage = new FormData();
            formDataImage.append('guide_id', id);
            formDataImage.append('image', image);
            formDataImage.append('aadhar_id', adharCard);
            formDataImage.append('pan_id', panCard);
            formDataImage.append('other_id', otherID);

            // Append other form data to formDataImage
            for (const key in formData) {
                formDataImage.append(key, formData[key]);
            }

            const response = await axios.post(
                'https://ojasbarik.pythonanywhere.com/test/guide_personal_details/',
                formDataImage,
            );
            console.log(response)
            if (response.status === 200) {
                setSuccessDialogOpen(true);
                return;
            } else {
                throw new Error('API request failed');
            }
        } catch (error) {
            setFailureDialogOpen(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={5} sm={2}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Titles</FormLabel>
                        <TextField
                            fullWidth
                            label="Titles"
                            name="titles"
                            value={formData.titles}
                            onChange={handleInputChange}
                        />
                        {formErrors.titles && (
                            <Typography variant="body2" color="error">
                                {formErrors.titles}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={7} sm={5}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>First Name</FormLabel>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleInputChange}
                        />
                        {formErrors.first_name && (
                            <Typography variant="body2" color="error">
                                {formErrors.first_name}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Last Name</FormLabel>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleInputChange}
                        />
                        {formErrors.last_name && (
                            <Typography variant="body2" color="error">
                                {formErrors.last_name}
                            </Typography>
                        )}
                    </Grid>

                    <Grid item xs={12} sm={6} md={12}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Bio</FormLabel>
                        <TextField
                            fullWidth
                            label="Bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                        />
                        {formErrors.bio && (
                            <Typography variant="body2" color="error">
                                {formErrors.bio}
                            </Typography>
                        )}
                    </Grid>

                    <Grid item xs={12} sm={6} md={12}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Submit Your Image</FormLabel>
                        <TextField
                            fullWidth
                            type='file'
                            label="Image"
                            name="image"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        {formErrors.image && (
                            <Typography variant="body2" color="error">
                                {formErrors.image}
                            </Typography>
                        )}
                    </Grid>

                    <Grid item xs={6} sm={4}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Date Of Birth</FormLabel>
                        <TextField
                            fullWidth
                            label="DOB"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                        />
                        {formErrors.dob && (
                            <Typography variant="body2" color="error">
                                {formErrors.dob}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={6} sm={8}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Gender</FormLabel>
                        <TextField
                            fullWidth
                            label="Gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                        />
                        {formErrors.gender && (
                            <Typography variant="body2" color="error">
                                {formErrors.gender}
                            </Typography>
                        )}
                    </Grid>

                    <Grid item xs={4} >
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>City</FormLabel>
                        <TextField
                            fullWidth
                            label="Guide City"
                            name="guide_city"
                            value={formData.guide_city}
                            onChange={handleInputChange}
                        />
                        {formErrors.guide_city && (
                            <Typography variant="body2" color="error">
                                {formErrors.guide_city}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={4} >
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>State</FormLabel>
                        <TextField
                            fullWidth
                            label="Guide State"
                            name="guide_state"
                            value={formData.guide_state}
                            onChange={handleInputChange}
                        />
                        {formErrors.guide_state && (
                            <Typography variant="body2" color="error">
                                {formErrors.guide_state}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={4} >
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Country</FormLabel>
                        <TextField
                            fullWidth
                            label="Guide Country"
                            name="guide_country"
                            value={formData.guide_country}
                            onChange={handleInputChange}
                        />
                        {formErrors.guide_country && (
                            <Typography variant="body2" color="error">
                                {formErrors.guide_country}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Contact Number</FormLabel>
                        <TextField
                            fullWidth
                            label="+91"
                            name="contact_number"
                            value={formData.contact_number}
                            onChange={handleInputChange}
                        />
                        {formErrors.contact_number && (
                            <Typography variant="body2" color="error">
                                {formErrors.contact_number}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Whatsapp Number</FormLabel>
                        <TextField
                            fullWidth
                            label="+91"
                            name="whatsapp_number"
                            value={formData.whatsapp_number}
                            onChange={handleInputChange}
                        />
                        {formErrors.whatsapp_number && (
                            <Typography variant="body2" color="error">
                                {formErrors.whatsapp_number}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6} md={12}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Email</FormLabel>
                        <TextField
                            fullWidth
                            label="User@gmail.com"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {formErrors.email && (
                            <Typography variant="body2" color="error">
                                {formErrors.email}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6} md={12}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Languages</FormLabel>
                        <TextField
                            fullWidth
                            label="Languages"
                            name="languages"
                            value={formData.languages}
                            onChange={handleInputChange}
                        />
                        {formErrors.languages && (
                            <Typography variant="body2" color="error">
                                {formErrors.languages}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6} md={12}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Activities</FormLabel>
                        <TextField
                            fullWidth
                            label="Activities"
                            name="activities"
                            value={formData.activities}
                            onChange={handleInputChange}
                        />
                        {formErrors.activities && (
                            <Typography variant="body2" color="error">
                                {formErrors.activities}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6} md={12}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Hobbies</FormLabel>
                        <TextField
                            fullWidth
                            label="Hobbies"
                            name="hobbies"
                            value={formData.hobbies}
                            onChange={handleInputChange}
                        />
                        {formErrors.hobbies && (
                            <Typography variant="body2" color="error">
                                {formErrors.hobbies}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>City</FormLabel>
                        <TextField
                            fullWidth
                            label="Guide Spot City"
                            name="guide_spot_city"
                            value={formData.guide_spot_city}
                            onChange={handleInputChange}
                        />
                        {formErrors.guide_spot_city && (
                            <Typography variant="body2" color="error">
                                {formErrors.guide_spot_city}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Places</FormLabel>
                        <TextField
                            fullWidth
                            label="Guide Spot Places"
                            name="guide_spot_places"
                            value={formData.guide_spot_places}
                            onChange={handleInputChange}
                        />
                        {formErrors.guide_spot_places && (
                            <Typography variant="body2" color="error">
                                {formErrors.guide_spot_places}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Years of Experience </FormLabel>
                        <TextField
                            fullWidth
                            type='number'
                            label="Experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                        />
                        {formErrors.experience && (
                            <Typography variant="body2" color="error">
                                {formErrors.experience}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Price Per Day</FormLabel>
                        <TextField
                            fullWidth
                            type='number'
                            label="Price Per Day"
                            name="price_per_day"
                            value={formData.price_per_day}
                            onChange={handleInputChange}
                        />
                        {formErrors.price_per_day && (
                            <Typography variant="body2" color="error">
                                {formErrors.price_per_day}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6} md={12}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Aadhar Id</FormLabel>
                        <TextField
                            fullWidth
                            type='file'
                            label="Aadhar Id"
                            name="aadhar_id"
                            onChange={(e) => setAdharCard(e.target.files[0])}
                        />
                        {formErrors.aadhar_id && (
                            <Typography variant="body2" color="error">
                                {formErrors.aadhar_id}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6} md={12}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Pan Id</FormLabel>
                        <TextField
                            fullWidth
                            type='file'
                            label="Pan Id"
                            name="pan_id"
                            onChange={(e) => setPanCard(e.target.files[0])}
                        />
                        {formErrors.pan_id && (
                            <Typography variant="body2" color="error">
                                {formErrors.pan_id}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6} md={12}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Other Id</FormLabel>
                        <TextField
                            fullWidth
                            type='file'
                            label="Other Id"
                            name="other_id"
                            onChange={(e) => setOtherID(e.target.files[0])} />
                        {formErrors.other_id && (
                            <Typography variant="body2" color="error">
                                {formErrors.other_id}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Submitted By</FormLabel>
                        <TextField
                            fullWidth
                            label="Name"
                            name="submitted_by"
                            value={formData.submitted_by}
                            onChange={handleInputChange}
                        />
                        {formErrors.submitted_by && (
                            <Typography variant="body2" color="error">
                                {formErrors.submitted_by}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Submitted Phone</FormLabel>
                        <TextField
                            fullWidth
                            label="+91"
                            name="submitted_phone"
                            value={formData.submitted_phone}
                            onChange={handleInputChange}
                        />
                        {formErrors.submitted_phone && (
                            <Typography variant="body2" color="error">
                                {formErrors.submitted_phone}
                            </Typography>
                        )}
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>

            {/* Success Dialog */}
            <Dialog open={successDialogOpen} onClose={handleSuccessDialogClose}>
                <Alert
                    severity="success"
                    onClose={handleSuccessDialogClose}
                >
                    Thank you! Form data submitted successfully.
                </Alert>
            </Dialog>

            {/* Failure Dialog */}
            <Dialog open={failureDialogOpen} onClose={handleFailureDialogClose}>
                <Alert
                    severity="error"
                    action={
                        <Button onClick={handleFailureDialogClose} color="inherit" size="small">
                            Resubmit
                        </Button>
                    }
                >
                    Failed to submit the form data. Please try again.
                </Alert>
            </Dialog>
        </div>
    );
};

export default FormPage;
