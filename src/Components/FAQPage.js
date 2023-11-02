import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    yellowDropdownIcon: {
        color: 'white',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'lightgreen'
    },
    leftSection: {
        borderRadius: '22%',
        margin: '10px',
        padding: '10px',
    },
    rightSection: {
        // marginTop: '10px',
        // borderRadius: '22px',
        // marginLeft: '8px',
        borderRadius: '22%',
        margin: '10px',
        padding: '10px',
    },
    answer: {
        backgroundColor: 'lightgreen',
        color: 'white',
        // padding: '0px'
    },
    singleAccord: {
        borderRadius: '20px',
        padding: '10px',
        marginBottom: '10px',
    },
});

const faqs = [
    {
        question: 'What is the FAQ page?',
        answer: 'The FAQ page provides answers to frequently asked questions about our product or service.',
    },
    {
        question: 'How can I get started?',
        answer: 'To get started, sign up for an account and follow the onboarding process. You can also refer to our getting started guide.',
    },
    {
        question: 'Do I need to pay for this service?',
        answer: 'Our basic service is free to use, but we also offer premium plans with additional features.',
    },
    {
        question: 'How do I contact support?',
        answer: 'You can contact our support team via email at support@example.com or by using the contact form on our website.',
    },
    {
        question: 'Do I need to pay for this service?',
        answer: 'Our basic service is free to use, but we also offer premium plans with additional features.',
    },
    {
        question: 'What is the FAQ page?',
        answer: 'The FAQ page provides answers to frequently asked questions about our product or service.',
    },
    {
        question: 'How can I get started?',
        answer: 'To get started, sign up for an account and follow the onboarding process. You can also refer to our getting started guide.',
    },
    {
        question: 'Do I need to pay for this service?',
        answer: 'Our basic service is free to use, but we also offer premium plans with additional features.',
    },
    {
        question: 'How do I contact support?',
        answer: 'You can contact our support team via email at support@example.com or by using the contact form on our website.',
    },
    {
        question: 'Do I need to pay for this service?',
        answer: 'Our basic service is free to use, but we also offer premium plans with additional features.',
    },
];

const FAQPage = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    const leftFaqs = faqs.slice(0, 5);
    const rightFaqs = faqs.slice(5, 10);

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography
                component="h1"
                variant="h5"
                align="start"
                color="text.primary"
                fontWeight={700}
                gutterBottom
            >
                Frequently Asked Questions (FAQ)
            </Typography>
            <Typography
                variant="p"
                align="start"
                color="text.primary"
                fontWeight={500}
                gutterBottom
                mb={5}
            >
                Relate to your app and their corresponding answers
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={6} className={classes.leftSection}>
                    {leftFaqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index}`}
                            onChange={handleChange(`panel${index}`)}
                            className={classes.singleAccord}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.yellowDropdownIcon} />}>
                                <Typography variant="h6" align="start">{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className={classes.answer}>
                                <Typography align="start">{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} className={classes.rightSection}>
                    {rightFaqs.map((faq, index) => (
                        <Accordion
                            key={index + 5}  // To differentiate from the left side accordions
                            expanded={expanded === `panel${index + 5}`}
                            onChange={handleChange(`panel${index + 5}`)}
                            className={classes.singleAccord}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.yellowDropdownIcon} />}>
                                <Typography variant="h6" align="start">{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className={classes.answer}>
                                <Typography align="start">{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default FAQPage;
