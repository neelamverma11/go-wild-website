import React, { useEffect, useState } from 'react';
import { TextField, MenuItem, Button, Grid, Alert, Dialog, RadioGroup, FormControlLabel, Radio, FormLabel, Typography, FormControl, InputLabel, Select } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { countries, cities, famousPlaces } from './LocationData';
import ApiComponent from './ApiComponent';

const FormPage = () => {
    const id = uuidv4();
    const [formData, setFormData] = useState({
        titles: '',
        first_name: '',
        last_name: '',
        bio: '',
        gender: '',
        guide_city: '',
        guide_state: '',
        guide_country: '',
        contact_number: '',
        whatsapp_number: '',
        email: '',
        languages: [],
        activities: [],
        hobbies: [],
        guide_spot_city: '',
        guide_spot_places: '',
        experience: '',
        price_per_day: '',
        submitted_by: '',
        submitted_phone: '',
    });

    const [dob, setDOB] = useState('');
    const [image, setImage] = useState(null);
    const [adharCard, setAdharCard] = useState(null);
    const [panCard, setPanCard] = useState(null);
    const [otherID, setOtherID] = useState(null);
    const [successDialogOpen, setSuccessDialogOpen] = useState(false);
    const [failureDialogOpen, setFailureDialogOpen] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');

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

    const handleCountryChange = (event) => {
        const selectedCountry = event.target.value;
        setSelectedCountry(selectedCountry);
        setSelectedState('');
        setFormData({
            ...formData,
            guide_country: selectedCountry,
            guide_state: '',
            guide_city: '',
            guide_spot_city: '',
            guide_spot_places: '',
        });
    };

    const handleStateChange = (event) => {
        const selectedState = event.target.value;
        setSelectedState(selectedState);
        setFormData({
            ...formData,
            guide_state: selectedState,
            guide_city: '',
            guide_spot_city: '',
            guide_spot_places: '',
        });
    };

    const handleCityChange = (event) => {
        const selectedCity = event.target.value;
        setFormData({
            ...formData,
            guide_city: selectedCity,
            guide_spot_city: selectedCity,
            guide_spot_places: '',
        });
    };

    const handleGuideSpotCityChange = (event) => {
        const selectedSpotCity = event.target.value;
        setFormData({
            ...formData,
            guide_spot_city: selectedSpotCity,
            guide_spot_places: '',
        });
    };
    const handleSpotPlacesChange = (event) => {
        const selectedSpotPlace = event.target.value;
        setFormData({
            ...formData,
            guide_spot_places: selectedSpotPlace,
        });
    };

    const loadFamousPlaces = () => {
        const selectedCity = formData.guide_city;
        if (selectedCity) {
            setFormData({
                ...formData,
                guide_spot_places: famousPlaces[selectedCity] || '',
            });
        }
    };
    useEffect(() => {
        loadFamousPlaces();
    }, [formData.guide_city]);

    const handleSuccessDialogClose = () => {
        setSuccessDialogOpen(false);
    };

    const handleFailureDialogClose = () => {
        setFailureDialogOpen(false);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic client-side validation
        const errors = {};

        if (!validateEmail(formData.email)) {
            errors.email = 'Invalid email format';
        }
        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(formData.contact_number)) {
            errors.contact_number = 'Invalid phone number format. It should be 10 digits.';
        }

        if (formData.whatsapp_number && !phoneRegex.test(formData.whatsapp_number)) {
            errors.whatsapp_number = 'Invalid WhatsApp number format. It should be 10 digits.';
        }

        if (!phoneRegex.test(formData.submitted_phone)) {
            errors.submitted_phone = 'Invalid phone number format. It should be 10 digits.';
        }

        if (!formData.gender) {
            errors.gender = 'Gender is required.';
        }
        if (!image) {
            errors.image = 'Image is required.';
        }

        if (!dob) {
            errors.dob = 'DOB is required.';
        }

        if (!adharCard) {
            errors.aadhar_id = 'AdhaarId is required.';
        }
        if (!panCard) {
            errors.pan_id = 'Pan Id is required.';
        }

        if (!formData.hobbies || formData.hobbies.length === 0) {
            errors.hobbies = 'At least one hobby is required.';
        }

        if (!formData.activities || formData.activities.length === 0) {
            errors.activities = 'At least one activity is required.';
        }

        if (!formData.languages || formData.languages.length === 0) {
            errors.languages = 'At least one language is required.';
        }

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

        // API request
        const apiResponse = await ApiComponent(formData, image, adharCard, panCard, otherID, dob, id);

        if (apiResponse.success) {
            setSuccessDialogOpen(true);
            return;
        } else {
            setFailureDialogOpen(true);
        }
    };

    return (
        <div>
            {/* <Container maxWidth="lg"> */}
            <form onSubmit={handleSubmit}>
                <Grid container maxWidth="lg" spacing={2}>
                    <Grid item xs={5} sm={2}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Titles</FormLabel>
                        <FormControl fullWidth>
                            {/* <InputLabel>Select Title</InputLabel> */}
                            <Select
                                name="titles"
                                value={formData.titles}
                                onChange={handleInputChange}
                            >
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="Dr.">Dr.</MenuItem>
                                <MenuItem value="Mr.">Mr.</MenuItem>
                                <MenuItem value="Mrs.">Mrs.</MenuItem>
                                <MenuItem value="Miss">Miss</MenuItem>
                            </Select>
                        </FormControl>
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
                            multiline
                            rows={2}
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
                            // label="Image"
                            name="image"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        {formErrors.image && (
                            <Typography variant="body2" color="error">
                                {formErrors.image}
                            </Typography>
                        )}
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Date Of Birth</FormLabel>
                        <TextField
                            fullWidth
                            // label="DOB"
                            type="date"
                            name="dob"
                            value={dob}
                            onChange={(e) => setDOB(e.target.value)}
                        />
                        {formErrors.dob && (
                            <Typography variant="body2" color="error">
                                {formErrors.dob}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Gender</FormLabel>
                        <RadioGroup
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            style={{ display: 'flex', flexDirection: 'row' }}
                        >
                            <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Male"
                                sx={{ marginLeft: 0 }}
                            />
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                                sx={{ marginLeft: 0 }}
                            />
                            <FormControlLabel
                                value="others"
                                control={<Radio />}
                                label="Others"
                                sx={{ marginLeft: 0 }}
                            />
                        </RadioGroup>
                        {formErrors.gender && (
                            <Typography variant="body2" color="error">
                                {formErrors.gender}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Country</FormLabel>
                        <FormControl fullWidth>
                            <Select
                                name="guide_country"
                                value={selectedCountry}
                                onChange={handleCountryChange}
                            >
                                <MenuItem value="">Select Country</MenuItem>
                                {countries.map((country) => (
                                    <MenuItem key={country.name} value={country.name}>
                                        {country.name}
                                    </MenuItem>
                                ))}
                            </Select>
                            {formErrors.guide_country && (
                                <Typography variant="body2" color="error">
                                    {formErrors.guide_country}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>State</FormLabel>
                        <FormControl fullWidth>
                            <Select
                                name="guide_state"
                                value={selectedState}
                                onChange={handleStateChange}
                            >
                                <MenuItem value="">Select State</MenuItem>
                                {selectedCountry &&
                                    countries
                                        .find((country) => country.name === selectedCountry)
                                        .states.map((state) => (
                                            <MenuItem key={state} value={state}>
                                                {state}
                                            </MenuItem>
                                        ))}
                            </Select>
                            {formErrors.guide_state && (
                                <Typography variant="body2" color="error">
                                    {formErrors.guide_state}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>City</FormLabel>
                        <FormControl fullWidth>
                            <Select
                                name="guide_city"
                                value={formData.guide_city}
                                onChange={handleCityChange}
                            >
                                <MenuItem value="">Select City</MenuItem>
                                {selectedState &&
                                    cities[selectedState].map((city) => (
                                        <MenuItem key={city} value={city}>
                                            {city}
                                        </MenuItem>
                                    ))}
                            </Select>
                            {formErrors.guide_city && (
                                <Typography variant="body2" color="error">
                                    {formErrors.guide_city}
                                </Typography>
                            )}
                        </FormControl>
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
                        <FormControl fullWidth>
                            {/* <InputLabel>Select Languages</InputLabel> */}
                            <Select
                                name="languages"
                                value={formData.languages}
                                onChange={handleInputChange}
                                multiple
                                renderValue={(selected) => selected.join(', ')}
                            // defaultValue={'Select Activities'} // Set a default value
                            >
                                <MenuItem value="English">English</MenuItem>
                                <MenuItem value="Spanish">Spanish</MenuItem>
                                <MenuItem value="French">French</MenuItem>
                            </Select>
                        </FormControl>
                        {formErrors.languages && (
                            <Typography variant="body2" color="error">
                                {formErrors.languages}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6} md={12}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Activities</FormLabel>
                        <FormControl fullWidth>
                            <Select
                                name="activities"
                                value={formData.activities}
                                onChange={handleInputChange}
                                multiple
                                renderValue={(selected) => selected.join(', ')}
                            >
                                <MenuItem value="Roller Coster">Roller Coster</MenuItem>
                                <MenuItem value="Water Slides">Water Slides</MenuItem>
                                <MenuItem value="Cycling">Cycling</MenuItem>
                            </Select>
                        </FormControl>
                        {formErrors.activities && (
                            <Typography variant="body2" color="error">
                                {formErrors.activities}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6} md={12}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Hobbies</FormLabel>
                        <FormControl fullWidth>
                            <Select
                                name="hobbies"
                                value={formData.hobbies}
                                onChange={handleInputChange}
                                multiple
                                renderValue={(selected) => selected.join(', ')}
                            >
                                <MenuItem value="Reading">Reading</MenuItem>
                                <MenuItem value="Painting">Painting</MenuItem>
                                <MenuItem value="Dancing">Dancing</MenuItem>
                            </Select>
                        </FormControl>
                        {formErrors.hobbies && (
                            <Typography variant="body2" color="error">
                                {formErrors.hobbies}
                            </Typography>
                        )}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Guide Spot City</FormLabel>
                        <FormControl fullWidth>
                            <Select
                                name="guide_spot_city"
                                value={formData.guide_spot_city}
                                onChange={handleGuideSpotCityChange}
                            >
                                <MenuItem value="">Select Spot City</MenuItem>
                                {selectedState &&
                                    cities[selectedState].map((city) => (
                                        <MenuItem key={city} value={city}>
                                            {city}
                                        </MenuItem>
                                    ))}
                            </Select>
                            {formErrors.guide_spot_city && (
                                <Typography variant="body2" color="error">
                                    {formErrors.guide_spot_city}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Famous Places</FormLabel>
                        <FormControl fullWidth>
                            <Select
                                name="guide_spot_places"
                                value={formData.guide_spot_places}
                                onChange={handleSpotPlacesChange}
                            >
                                <MenuItem value="">Select Famous Place</MenuItem>
                                {formData.guide_spot_city &&
                                    famousPlaces[formData.guide_spot_city].map((place) => (
                                        <MenuItem key={place} value={place}>
                                            {place}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                        {formErrors.guide_spot_places && (
                            <Typography variant="body2" color="error">
                                {formErrors.guide_spot_places}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel sx={{ color: 'black', fontWeight: '700', marginLeft: 1.5 }}>Years of Experience </FormLabel>
                        <FormControl fullWidth>
                            {/* <InputLabel>Select Title</InputLabel> */}
                            <Select
                                type='number'
                                name="experience"
                                value={formData.experience}
                                onChange={handleInputChange}
                            >
                                <MenuItem value="">Select years</MenuItem>
                                <MenuItem value={1}>1 years</MenuItem>
                                <MenuItem value={2}>2 years</MenuItem>
                                <MenuItem value={3}>3 years</MenuItem>
                                {/* <MenuItem value=>more</MenuItem> */}
                            </Select>
                        </FormControl>
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
                            // label="Aadhar Id"
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
                            // label="Pan Id"
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
                            // label="Other Id"
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
                            // label="Name"
                            name="submitted_by"
                            placeholder="Neelam Verma"
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
                            // label="+91"
                            name="submitted_phone"
                            placeholder='7206751772'
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
                        <Button variant="contained" color="primary" type="submit"
                        // disabled={!areRequiredFieldsFilled()}
                        >
                            Submit
                        </Button>


                    </Grid>
                </Grid>
            </form>
            {/* </Container> */}
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
