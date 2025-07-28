import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import {
    Box,
    Typography,
    Avatar,
    TextField
} from '@mui/material';

const BasicInfo = ({ userInfo, setUserInfo, onNext }) => {
    const [firstName, setFirstName] = useState(userInfo.firstName || '');
    const [lastName, setLastName] = useState(userInfo.lastName || '');
    const [email, setEmail] = useState(userInfo.email || '');

    // Load data from localStorage on component mount
    useEffect(() => {
        const savedFirstName = localStorage.getItem('onboarding_firstName');
        const savedLastName = localStorage.getItem('onboarding_lastName');
        
        if (savedFirstName) {
            setFirstName(savedFirstName);
            setUserInfo(prev => ({ ...prev, firstName: savedFirstName }));
        }
        
        if (savedLastName) {
            setLastName(savedLastName);
            setUserInfo(prev => ({ ...prev, lastName: savedLastName }));
        }
    }, [setUserInfo]);

    const handleFirstNameChange = (event) => {
        const newValue = event.target.value;
        setFirstName(newValue);
        localStorage.setItem('onboarding_firstName', newValue);
        setUserInfo(prev => ({
            ...prev,
            firstName: newValue
        }));
    };

    const handleLastNameChange = (event) => {
        const newValue = event.target.value;
        setLastName(newValue);
        localStorage.setItem('onboarding_lastName', newValue);
        setUserInfo(prev => ({
            ...prev,
            lastName: newValue
        }));
    };

    const handleEmailChange = (event) => {
        const newValue = event.target.value;
        setEmail(newValue);
        setUserInfo(prev => ({
            ...prev,
            email: newValue
        }));
    };

    const handleContinue = () => {
        // Basic validation
        if (firstName && lastName && email) {
            console.log('User info when continuing:', userInfo);
            console.log('First Name:', firstName);
            console.log('Last Name:', lastName);
            console.log('Email:', email);
            onNext();
        } else {
            // You could add error handling here
            console.log('Please fill in all fields');
            console.log('Current userInfo state:', userInfo);
        }
    };
    return (
        <Box
            sx={{
                padding: 2,
                boxShadow: 5,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
                width: "50%",
                height: "100%",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
            >
                <Avatar sx={{ width: 80, height: 80, marginRight: 2, fontSize: 32, display: "flex", alignItems: "center", justifyContent: "center" }} />
                <Typography variant="h1" color="white" sx={{ fontSize: 58, fontWeight: "bold", marginBottom: 2 }}>Tell us more about you</Typography>
                <Typography variant="h6" color="white" sx={{ fontSize: 16, marginBottom: 2 }}>Let's get started with some basic information.</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "30%", paddingLeft: 6, paddingRight: 6}}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "center", width: "33.33%", marginRight: 2 }}>
                        <TextField 
                            label="First Name" 
                            variant="outlined" 
                            value={firstName}
                            onChange={handleFirstNameChange}
                            sx={{ width: "100%" }} 
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "center", width: "33.33%", marginLeft: 2, marginRight: 2 }}>
                        <TextField 
                            label="Last Name" 
                            variant="outlined" 
                            value={lastName}
                            onChange={handleLastNameChange}
                            sx={{ width: "100%" }} 
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "center", width: "33.33%", marginLeft: 2, marginRight: 2 }}>
                        <TextField 
                            label="Email" 
                            variant="outlined" 
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            sx={{ width: "100%" }} 
                        />
                    </Box>
                </Box>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleContinue}
                    disabled={!firstName || !lastName || !email}
                    sx={{ height: "8%", width: "30%" }}
                >
                    Continue
                </Button>
        </Box>
    );
};

export default BasicInfo;