import * as React from 'react';
import Button from '@mui/material/Button';
import {
    Box,
    Typography,
    Checkbox,
    CircularProgress,
    Alert
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import { getCurrentUserId } from '../../utils/supabase';

const GmailConfig = ({ onNext, userInfo, oauthSuccess = false }) => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [agreedToTerms, setAgreedToTerms] = React.useState(false);
    const [isConnecting, setIsConnecting] = React.useState(false);
    const [isConnected, setIsConnected] = React.useState(false);
    const [error, setError] = React.useState(null);

    // Check if user just completed OAuth
    React.useEffect(() => {
        if (oauthSuccess) {
            setIsConnected(true);
            setError(null);
        }
    }, [oauthSuccess]);

    const handleConnectGmail = async () => {
        if (!userInfo?.email) {
            setError('Please complete basic information first');
            return;
        }

        setIsConnecting(true);
        setError(null);

        try {
            // Get the current user's UUID from their session
            const userId = await getCurrentUserId();
            
            if (!userId) {
                throw new Error('User not authenticated. Please sign in again.');
            }
            
            // Call your FastAPI endpoint to get the authorization URL
            const response = await fetch(`${API_URL}/api/auth/google/authorize/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Failed to get authorization URL');
            }

            const data = await response.json();
            
            // Redirect to Google OAuth
            window.location.href = data.authorization_url;
        } catch (err) {
            setError('Failed to connect Gmail. Please try again.');
            setIsConnecting(false);
        }
    };

    const handleContinue = () => {
        if (agreedToTerms && isConnected) {
            onNext();
        } else if (!agreedToTerms) {
            setError('Please agree to the terms and conditions');
        } else if (!isConnected) {
            setError('Please connect your Gmail account first');
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
            
            {error && (
                <Alert severity="error" sx={{ width: '100%', marginBottom: 2 }}>
                    {error}
                </Alert>
            )}

            {isConnected ? (
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <CheckCircleIcon sx={{ color: '#00FF88', fontSize: 32, marginRight: 1 }} />
                    <Typography color="white" sx={{ fontSize: 16 }}>
                        Gmail connected successfully!
                    </Typography>
                </Box>
            ) : (
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={handleConnectGmail}
                    disabled={isConnecting}
                    sx={{ height: "8%", width: "30%", marginBottom: 2, marginTop: 2 }}
                >
                    {isConnecting ? (
                        <CircularProgress size={24} color="inherit" />
                    ) : (
                        'Connect Gmail'
                    )}
                </Button>
            )}

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
                disabled={!agreedToTerms || !isConnected}
                sx={{ height: "8%", width: "30%", marginBottom: 2, marginTop: 2 }}
            >
                Continue
            </Button>
        </Box>
    );
};

export default GmailConfig;