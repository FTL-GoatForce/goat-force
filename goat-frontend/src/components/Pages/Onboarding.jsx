import * as React from 'react';
import Button from '@mui/material/Button';
import Header from '../ReusableComponents/Header';
import {
    Box,
    Typography,
    Stepper,
    StepLabel,
    Step,
    StepContent,
    StepIcon,
    IconButton,
    Avatar,
    TextField
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BasicInfo from '../OnboardingComponents/basicinfo';
import GmailConfig from '../OnboardingComponents/GmailConfig';
import SlackConfig from '../OnboardingComponents/SlackConfig';
import Review from '../OnboardingComponents/Review';
const Onboarding = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [userInfo, setUserInfo] = React.useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // Custom step icon component
    const CustomStepIcon = ({ active, completed, icon }) => {
        const getIconColor = () => {
            if (active) return '#1ea9d4'; // Bright blue for active step
            if (completed) return '#00FF88'; // Green for completed steps
            return 'grey'; // Grey for upcoming steps
        };

        const getIconStyle = () => {
            const baseStyle = { fontSize: 32, marginRight: 2 };
            if (active) {
                return {
                    ...baseStyle,
                    color: getIconColor(),
                    filter: 'drop-shadow(0 0 8px #1ea9d4)',
                    animation: 'glow 2s ease-in-out infinite alternate'
                };
            }
            return { ...baseStyle, color: getIconColor() };
        };

        const getAvatarStyle = () => {
            const baseStyle = { 
                width: 40, 
                height: 40, 
                marginRight: 2,
                fontSize: 32
            };
            if (active) {
                return {
                    ...baseStyle,
                    bgcolor: '#1ea9d4',
                    filter: 'drop-shadow(0 0 8px #1ea9d4)',
                    animation: 'glow 2s ease-in-out infinite alternate'
                };
            }
            if (completed) {
                return {
                    ...baseStyle,
                    bgcolor: '#00FF88'
                };
            }
            return { 
                ...baseStyle, 
                bgcolor: 'grey' 
            };
        };

        const stepIcons = [
            <Avatar key="check" sx={getAvatarStyle()} />,
            <EmailIcon key="email" sx={getIconStyle()} />,
            <ChatIcon key="chat" sx={getIconStyle()} />,
            <SendIcon key="send" sx={getIconStyle()} />
        ];
        
        return stepIcons[icon - 1] || stepIcons[0];
    };

    const steps = [
        {
          label: 'Basic Information',
          description: `Please provide your basic information to get started.`,
        },
        {
          label: 'Connect Gmail',
          description:
            'Connect your Gmail account to power your GoatForce account.',
        },
        {
          label: 'Connect Slack',
          description: `Connect your Slack account to power your GoatForce account.`,
        },
        {
            label: 'Setup Complete',
            description: `Complete your setup.`,
        }
      ];

    
    return (
        // Main container
        <Box    
        sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column", // Changed to column to stack header and content
            backgroundColor: "background.default",
            width: "100%",
            overflow: "hidden",
            "@keyframes glow": {
                "0%": {
                    filter: "drop-shadow(0 0 8px #1ea9d4)",
                },
                "100%": {
                    filter: "drop-shadow(0 0 16px #1ea9d4) drop-shadow(0 0 24px #1ea9d4)",
                },
            },
        }}
        >   
            <Header />
            {/* Main content container */}
            <Box
                sx={{
                    display: "flex", 
                    flexDirection: "row",
                    width: "100%",
                    flex: 1,
                    gap: "24px",
                    padding: "24px",
                    "& > :first-of-type": {
                        width: "66.66%"
                    },
                    "& > :last-of-type": {
                        width: "33.33%"
                    }
                }}
            >
                {/* Left side container */}
                {activeStep === 0 && (
                    <BasicInfo 
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        onNext={handleNext}
                    />
                )}
                {activeStep === 1 && (
                    <GmailConfig onNext={handleNext} />
                )}
                {activeStep === 2 && (
                    <SlackConfig onNext={handleNext} />
                )}
                {activeStep === 3 && (
                    <Review />
                )}
                {/* Right side container */}
                <Box
                    sx={{
                        padding: 2,
                        boxShadow: 5,
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "divider",
                        backgroundColor: "background.default",
                        width: "50%",
                        height: "100%",
                        margin: "auto"
                    }}
                    >
                    <Typography variant="h6" sx={{ fontSize: 34, color: "text.primary", fontWeight: "bold" }} color="white">Setup Progress</Typography>

                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                        <Step key={step.label} expanded={true}>
                            <StepLabel 
                                sx={{ color: "black", fontSize: 24, fontWeight: "bold" }}
                                StepIconComponent={CustomStepIcon}
                            >
                                <Typography 
                                    sx={{ 
                                        color: activeStep === index ? "white" : "grey", 
                                        fontSize: 24, 
                                        fontWeight: "bold",
                                        transform: activeStep === index ? 'scale(1.05)' : 'scale(1)',
                                        transition: 'transform 0.3s ease-in-out'
                                    }}
                                >
                                    {step.label}
                                </Typography>
                            </StepLabel>
                            <StepContent>
                                <Typography 
                                    sx={{ 
                                        color: activeStep === index ? "white" : "grey", 
                                        marginLeft: 4,
                                        transform: activeStep === index ? 'scale(1.05)' : 'scale(1)',
                                        transition: 'transform 0.3s ease-in-out'
                                    }}
                                >
                                    {step.description}
                                </Typography>
                            </StepContent>
                        </Step>
                        ))}
                    </Stepper>
                    
                </Box>
                </Box>
        </Box>
    )
}
export default Onboarding;
