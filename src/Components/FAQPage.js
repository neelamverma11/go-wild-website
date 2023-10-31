import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    yellowDropdownIcon: {
        color: 'white',
        width: "10px",
        height: "10px",
        borderRadius: '50%',
        backgroundColor: 'lightgreen'
    },
    leftSection: {
        marginTop: '10px',
        borderRadius: '22px',
        marginLeft: '8px'
    },
    rightSection: {
        marginTop: '10px',
        borderRadius: '22px',
        marginLeft: '8px'
    },
    answer: {
        backgroundColor: "lightgreen",
        color: "white"
    }
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
];

const FAQPage = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
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
            <Grid container>
                <Grid item xs={12} sm={6} className={classes.leftSection}>
                    {faqs.map((faq, index) => (
                        <Accordion key={index} className={classes.leftSection}>
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
                    {faqs.map((faq, index) => (
                        <Accordion key={index} className={classes.rightSection}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.yellowDropdownIcon} />}>
                                <Typography variant="h6" align="start">{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className={classes.answer}>
                                <Typography align="start" >{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default FAQPage;
