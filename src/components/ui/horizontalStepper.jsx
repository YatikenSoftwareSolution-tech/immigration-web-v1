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
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                '& .MuiStepLabel-label': {
                  color: 'inherit',
                  mt: { xs: 1, sm: 0 } // add top margin on mobile screens
                },
                '& .MuiStepLabel-label.Mui-active': {
                  color: '#0198E9'
                }
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
