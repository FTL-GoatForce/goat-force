import * as React from 'react';
import Button from '@mui/material/Button';

import {
    Box,
    Typography,
    Checkbox
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FormControlLabel from '@mui/material/FormControlLabel';

const GmailConfig = ({ onNext }) => {
    const [agreedToTerms, setAgreedToTerms] = React.useState(false);

    const handleContinue = () => {
        if (agreedToTerms) {
            onNext();
        } else {
            console.log('Please agree to the terms and conditions');
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
                <EmailIcon sx={{ color: "secondary.main", width: 80, height: 80, marginRight: 2, fontSize: 32, display: "flex", alignItems: "center", justifyContent: "center" }} />
                <Typography variant="h1" color="white" sx={{ fontSize: 58, fontWeight: "bold", marginBottom: 2 }}>Connect Gmail</Typography>
                <Typography variant="h6" color="white" sx={{ fontSize: 16, marginBottom: 2 }}>Link your Gmail to sync your emails.</Typography>
                <Button variant="contained" color="secondary" sx={{ height: "8%", width: "30%", marginBottom: 2, marginTop: 2 }}>Connect Gmail</Button>
                <FormControlLabel 
                    control={
                        <Checkbox 
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                        />
                    } 
                    label="I agree to privacy policy and terms of service" 
                    sx={{ color: "white", fontSize: 16, fontWeight: "bold", marginBottom: 2, marginTop: 2 }} 
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleContinue}
                    disabled={!agreedToTerms}
                    sx={{ height: "8%", width: "30%", marginBottom: 2, marginTop: 2 }}
                >
                    Continue
                </Button>
        </Box>
    );
};

export default GmailConfig;