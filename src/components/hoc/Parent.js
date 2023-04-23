import React, { useState, useCallback } from 'react';
import {
  Typography,
  Button,
  Box
} from '@mui/material';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState(1);
  console.log('parent');

  const addChild = useCallback(() => {
    setValue(value + 1);
  },[value])

  return (
    <div>
      <Typography>Parent Component</Typography>
      <Box>
        <Typography>{count}</Typography>
        <Button onClick={() => setCount(count + 1)}>Add + </Button>
      </Box>
      <Child value={value} change={addChild} />
    </div>
  )
}

export default Parent;
