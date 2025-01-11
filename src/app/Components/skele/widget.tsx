import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';



export default function WidgetSkeletel() {
  return (
    <Stack>
      <div  className="flex items-center w-full mb-4">
        <div className="flex  gap-2">
          <div className=' relative overflow-hidden group min-w-44'>
          <Skeleton variant="rectangular" width={160} height={140} />
            </div>
          <div className='flex flex-col gap-3'>
          <hr className='h-10 w-2 rounded-full bg-red-700' />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={160} />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          </div>
        </div>
      </div>   
    </Stack>
  );
}
