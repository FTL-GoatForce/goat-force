import React, { useState } from 'react';
import { Box, Typography, Chip, Paper, IconButton, Card, CardHeader } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LinearBar from '../ReusableComponents/LinearBar';
import EmergencyIcon from '@mui/icons-material/Emergency';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Risk({
  deal_risk_score,
  churn_risk_score,
  timeline_risk_score,
  budget_risk_score,
  deal_risk_description,
  churn_risk_description,
  timeline_risk_description,
  budget_risk_description,
}) {
  const [expandedSection, setExpandedSection] = useState(null);
  
  const handleExpand = (risk) => {
    setExpandedSection(expandedSection === risk ? null : risk);
  };
  
  return (
    <Card sx={{
      backgroundColor: 'background.paper',
      padding: 2,
      borderRadius: 4,
      width: '100%',
      minHeight: '600px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    }}>
      
     <Box className="card-header" sx={{ display: "flex" }}>
        <CardHeader
          avatar={<EmergencyIcon color="primary" />}
          title="Risk Assessment"
          subheader="View risk assessment for this deal"
        />
      </Box>
      {/* Content */}

      {/* Main Box */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Deal Risk Box */}
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            backgroundColor: 'background.paper',
            padding: 2,
            borderRadius: 2,
          }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}>
            {/* Risk Title */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
            }}>
              <WarningAmberIcon sx={{ color: 'error.main', fontSize: 24 }} />
              <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 'bold' }}>Deal Risk</Typography>
              <Chip label={deal_risk_score > 65 ? "High" : deal_risk_score > 35 && deal_risk_score < 65 ? "Medium" : "Low"} color={deal_risk_score > 65 ? "error" : deal_risk_score > 35 && deal_risk_score < 65 ? "warning" : "success"} sx={{ marginLeft: 'auto' }} />
                             <IconButton onClick={() => handleExpand('deal')}>
                 <ArrowDropDownIcon 
                   sx={{ 
                     color: 'text.secondary', 
                     fontSize: 24,
                     transform: expandedSection === 'deal' ? 'rotate(180deg)' : 'rotate(0deg)',
                     transition: 'transform 0.2s ease-in-out'
                   }} 
                 />
               </IconButton>
            </Box>

            {/* Risk Description */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
            }}>
              <LinearBar value={deal_risk_score} />
            </Box>
            {expandedSection === 'deal' && (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '480px' }}>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>{deal_risk_description}</Typography>
                </Box>
              )}
          </Box>
        </Paper>

        {/* Churn Risk Box */}
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            backgroundColor: 'background.paper',
            padding: 2,
            borderRadius: 2,
          }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}>
            {/* Risk Title */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
            }}>
              <TrendingDownIcon sx={{ color: 'warning.main', fontSize: 24 }} />
              <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 'bold' }}>Churn Risk</Typography>
              <Chip label={churn_risk_score > 65 ? "High" : churn_risk_score > 35 && churn_risk_score < 65 ? "Medium" : "Low"} color={churn_risk_score > 65 ? "error" : churn_risk_score > 35 && churn_risk_score < 65 ? "warning" : "success"} sx={{ marginLeft: 'auto' }} />
              <IconButton onClick={() => handleExpand('churn')}>
                <ArrowDropDownIcon 
                  sx={{ 
                    color: 'text.secondary', 
                    fontSize: 24,
                    transform: expandedSection === 'churn' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease-in-out'
                  }} 
                />
              </IconButton>
            </Box>

            {/* Risk Description */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
            }}>
              <LinearBar value={churn_risk_score} />
            </Box>
            {expandedSection === 'churn' && (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '480px' }}>
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>{churn_risk_description}</Typography>
                </Box>
              )}
          </Box>
        </Paper>

        {/* Timeline Risk Box */}
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            backgroundColor: 'background.paper',
            padding: 2,
            borderRadius: 2,
          }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}>
            {/* Risk Title */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
            }}>
              <AccessTimeIcon sx={{ color: 'info.main', fontSize: 24 }} />
              <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 'bold' }}>Timeline Risk</Typography>
              <Chip label={timeline_risk_score > 65 ? "High" : timeline_risk_score > 35 && timeline_risk_score < 65 ? "Medium" : "Low"} color={timeline_risk_score > 65 ? "error" : timeline_risk_score > 35 && timeline_risk_score < 65 ? "warning" : "success"} sx={{ marginLeft: 'auto' }} />
              <IconButton onClick={() => handleExpand('timeline')}>
                <ArrowDropDownIcon 
                  sx={{ 
                    color: 'text.secondary', 
                    fontSize: 24,
                    transform: expandedSection === 'timeline' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease-in-out'
                  }} 
                />
              </IconButton>
            </Box>

            {/* Risk Description */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
            }}>
              <LinearBar value={timeline_risk_score} />
            </Box>
            {expandedSection === 'timeline' && (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '480px' }}>
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>{timeline_risk_description}</Typography>
                </Box>
              )}
          </Box>
        </Paper>

        {/* Budget Risk Box */}
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            backgroundColor: 'background.paper',
            padding: 2,
            borderRadius: 2,
          }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}>
            {/* Risk Title */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
            }}>
              <AttachMoneyIcon sx={{ color: 'success.main', fontSize: 24 }} />
              <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 'bold' }}>Budget Risk</Typography>
              <Chip label={budget_risk_score > 65 ? "High" : budget_risk_score > 35 && budget_risk_score < 65 ? "Medium" : "Low"} color={budget_risk_score > 65 ? "error" : budget_risk_score > 35 && budget_risk_score < 65 ? "warning" : "success"} sx={{ marginLeft: 'auto' }} />
              <IconButton onClick={() => handleExpand('budget')}>
                <ArrowDropDownIcon 
                  sx={{ 
                    color: 'text.secondary', 
                    fontSize: 24,
                    transform: expandedSection === 'budget' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease-in-out'
                  }} 
                />
              </IconButton>
            </Box>

            {/* Risk Description */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
            }}>
              <LinearBar value={budget_risk_score} />  
            </Box>
            {expandedSection === 'budget' && (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '480px' }}>
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>{budget_risk_description}</Typography>
                </Box>
              )}
          </Box>
        </Paper>
      </Box>
    </Card>
  );
}

export default Risk; 