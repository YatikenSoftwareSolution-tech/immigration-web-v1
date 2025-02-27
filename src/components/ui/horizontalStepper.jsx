import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export default function HorizontalLinearStepper({ step, stepLabel }) {
  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Stepper activeStep={step - 1}>
        {stepLabel.map((label) => (
          <Step key={label}>
            <StepLabel
              sx={{
                // Set a default color for inactive steps if needed:
                '& .MuiStepLabel-label': { color: 'inherit' },
                // Only apply your custom color when active:
                '& .MuiStepLabel-label.Mui-active': { color: '#0198E9' }
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
