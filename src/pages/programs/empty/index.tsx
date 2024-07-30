
import { Box } from '@mui/system';


import { _mock } from 'src/_mock';


export default function EmptyProgramListScreen() {


  return (
    <Box component="img" alt="any photo" src={_mock.image.cover(2)} sx={{ borderRadius: 1 }} />
  );
}
