import * as React from 'react';
import Button from '@mui/material/Button';
import {
    Box,
    Typography,
    Checkbox,
    Alert
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormControlLabel from '@mui/material/FormControlLabel';

const SlackConfig = ({ onNext, userInfo, oauthSuccess = false }) => {
    const [agreedToTerms, setAgreedToTerms] = React.useState(false);
    const [isCompleted, setIsCompleted] = React.useState(false);
    const [error, setError] = React.useState(null);

    const handleMarkCompleted = () => {
        if (!agreedToTerms) {
            setError('Please agree to the terms and conditions');
            return;
        }
        
        setIsCompleted(true);
        setError(null);
    };

    const handleContinue = () => {
        if (agreedToTerms && isCompleted) {
            onNext();
        } else if (!agreedToTerms) {
            setError('Please agree to the terms and conditions');
        } else if (!isCompleted) {
            setError('Please mark Slack as completed');
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
            <ChatIcon sx={{ color: "secondary.main", width: 80, height: 80, marginRight: 2, fontSize: 32, display: "flex", alignItems: "center", justifyContent: "center" }} />
            <Typography variant="h1" color="white" sx={{ fontSize: 58, fontWeight: "bold", marginBottom: 2 }}>Connect Slack</Typography>
            <Typography variant="h6" color="white" sx={{ fontSize: 16, marginBottom: 2 }}>Link your Slack to sync your messages.</Typography>
            
            {error && (
                <Alert severity="error" sx={{ width: '100%', marginBottom: 2 }}>
                    {error}
                </Alert>
            )}

            {isCompleted ? (
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <CheckCircleIcon sx={{ color: '#00FF88', fontSize: 32, marginRight: 1 }} />
                    <Typography color="white" sx={{ fontSize: 16 }}>
                        Slack step completed!
                    </Typography>
                </Box>
            ) : (
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={handleMarkCompleted}
                    sx={{ height: "8%", width: "30%", marginBottom: 2, marginTop: 2 }}
                >
                    Mark as Completed
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
                disabled={!agreedToTerms || !isCompleted}
                sx={{ height: "8%", width: "30%", marginBottom: 2, marginTop: 2 }}
            >
                Continue
            </Button>
        </Box>
    );
};

export default SlackConfig;