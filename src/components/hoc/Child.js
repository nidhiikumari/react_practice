import React, { memo } from 'react';
import {
  Typography,
  Button,
  Box
} from '@mui/material';

const Child = ({ value, change }) => {
  console.log('child');
  return (
    <div>
      <Typography>Child Component</Typography>
      <Box>
        <Typography>{value}</Typography>
        <Button onClick={change}>add child +</Button>
      </Box>
    </div>
  )
}

export default memo(Child);
