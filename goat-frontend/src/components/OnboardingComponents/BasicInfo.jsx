import * as React from 'react';
import Button from '@mui/material/Button';
import {
    Box,
    Typography,
    Avatar,
    TextField
} from '@mui/material';

const BasicInfo = ({ userInfo, setUserInfo, onNext }) => {
    const handleInputChange = (field) => (event) => {
        setUserInfo(prev => ({
            ...prev,
            [field]: event.target.value
        }));
    };

    const handleContinue = () => {
        // Basic validation
        if (userInfo.firstName && userInfo.lastName && userInfo.email) {
            console.log(userInfo);
            onNext();
        } else {
            // You could add error handling here
            console.log('Please fill in all fields');
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
                            value={userInfo.firstName}
                            onChange={handleInputChange('firstName')}
                            sx={{ width: "100%" }} 
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "center", width: "33.33%", marginLeft: 2, marginRight: 2 }}>
                        <TextField 
                            label="Last Name" 
                            variant="outlined" 
                            value={userInfo.lastName}
                            onChange={handleInputChange('lastName')}
                            sx={{ width: "100%" }} 
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "center", width: "33.33%", marginLeft: 2, marginRight: 2 }}>
                        <TextField 
                            label="Email" 
                            variant="outlined" 
                            type="email"
                            value={userInfo.email}
                            onChange={handleInputChange('email')}
                            sx={{ width: "100%" }} 
                        />
                    </Box>
                </Box>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleContinue}
                    disabled={!userInfo.firstName || !userInfo.lastName || !userInfo.email}
                    sx={{ height: "8%", width: "30%" }}
                >
                    Continue
                </Button>
        </Box>
    );
};

export default BasicInfo;