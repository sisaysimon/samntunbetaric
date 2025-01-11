import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

type props={
  variant:"circular" |"rectangular"|"rounded"|"text"
  width?:number
  height:number
}

export default function Skeletel({variant,width,height}:props) {
  return (
    <Stack>
      <Skeleton animation="wave"  variant={variant} width={width} height={height} />
    </Stack>
  );
}
