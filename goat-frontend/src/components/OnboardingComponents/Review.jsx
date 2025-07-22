import * as React from 'react';
import Button from '@mui/material/Button';
import {
    Box,
    Typography,
    Avatar
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router-dom';


const Review = () => {
    const navigate = useNavigate();
    
    const handleFinishSetup = () => {
        // Here you could add any final setup logic
        // For example, saving to database, etc.
        console.log('Setup completed!');
        
        // Navigate to dashboard
        navigate('/dashboard');
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
                <DoneIcon sx={{ color: "success.main", width: 80, height: 80, marginRight: 2, fontSize: 32, display: "flex", alignItems: "center", justifyContent: "center" }} />
                <Typography variant="h1" color="white" sx={{ fontSize: 58, fontWeight: "bold", marginBottom: 2 }}>Review & Submit</Typography>
                <Typography variant="h6" color="white" sx={{ fontSize: 16, marginBottom: 2 }}>Please review your information and submit to complete setup.</Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                        justifyContent: "center",
                        width: "90%",
                        height: "30%",
                        backgroundColor: "surface.main",
                        borderRadius: 2,
                        paddingLeft: 6,
                        paddingRight: 6,
                        marginBottom: 2,
                        marginTop: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "left",
                        }}
                    >
                        <Avatar sx={{ width: 24, height: 24, marginBottom: 2, marginRight: 1, backgroundColor: "primary.main"}} />
                        <Typography variant="h3" color="white" sx={{ fontSize: 24, marginBottom: 2, fontWeight: "bold"}}>Basic Information</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "center", width: "50%", marginRight: 2 }}>
                            <Typography variant="h6" color="white" sx={{ fontSize: 16, marginBottom: 2 }}>Name: Bruce Wayne</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "center", width: "50%", marginLeft: 2 }}>
                            <Typography variant="h6" color="white" sx={{ fontSize: 16, marginBottom: 2 }}>Email: bruce@wayne.com</Typography>
                        </Box>
                    </Box>
                    
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                        justifyContent: "center",
                        width: "90%",
                        height: "30%",
                        backgroundColor: "surface.main",
                        borderRadius: 2,
                        paddingLeft: 6,
                        paddingRight: 6,
                        marginBottom: 2,
                        marginTop: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "left",
                        }}
                    >
                        <EmailIcon sx={{ fontSize: 24, color: "secondary.main", marginBottom: 2, marginRight: 1 }} />
                        <Typography variant="h3" color="white" sx={{ fontSize: 24, marginBottom: 2, fontWeight: "bold"}}>Gmail Connection</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "left",
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "center", width: "50%", marginRight: 2 }}>
                            <Typography variant="h6" color="white" sx={{ fontSize: 16, marginBottom: 2 }}>Gmail account successfully connected</Typography>
                        </Box>
                    </Box>
                    
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                        justifyContent: "center",
                        width: "90%",
                        height: "30%",
                        backgroundColor: "surface.main",
                        borderRadius: 2,
                        paddingLeft: 6,
                        paddingRight: 6,
                        marginBottom: 2,
                        marginTop: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "left",
                        }}
                    >
                        <ChatIcon sx={{ fontSize: 24, color: "secondary.main", marginBottom: 2, marginRight: 1 }} />
                        <Typography variant="h3" color="white" sx={{ fontSize: 24, marginBottom: 2, fontWeight: "bold"}}>Slack Connection</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "left",
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "center", width: "50%" }}>
                            <Typography variant="h6" color="white" sx={{ fontSize: 16, marginBottom: 2 }}>Slack account successfully connected</Typography>
                        </Box>
                    </Box>
                    
                </Box>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleFinishSetup}
                    sx={{ height: "8%", width: "30%" }}
                >
                    Finish Setup
                </Button>
        </Box>
    );
};

export default Review;