import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Animations() {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />

      <Skeleton variant="rectangular" />
    </Box>
  );
}
