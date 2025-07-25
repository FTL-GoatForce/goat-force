import { LinearProgress, Box, Typography} from '@mui/material';

function LinearBar({ value }) {
    const redColor = value > 0 ? 'error' : 'primary';
    const mediumColor = value > 35 && value < 65 ? 'warning' : 'primary';
    const greenColor = value < 35 ? 'success' : 'primary';
    return (
        <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress 
                variant="determinate" 
                value={value} 
                color={value > 65 ? redColor : value > 35 && value < 65 ? mediumColor : greenColor}
                sx={{ height: 8, borderRadius: 4 }}
            />
            </Box>
            <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(value)}%`}</Typography>
            </Box>
        </Box>
        </Box>
    );
}

export default LinearBar;


//high risk > 65
//medium risk 35-65
//low risk < 35