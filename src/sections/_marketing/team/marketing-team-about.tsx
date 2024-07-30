import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { ITeamMemberProps } from 'src/types/team';

import MarketingTeamItem from './marketing-team-item';

// ----------------------------------------------------------------------

type Props = {
  members: ITeamMemberProps[];
};

export default function MarketingTeamAbout({ members }: Props) {
  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
      Meet Our Hackathon Team
      </Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
          color: 'text.secondary',
        }}
      >
        Our team of dedicated professionals is the driving force behind our innovative solutions. Together, we turn ideas into reality.
      </Typography>

      <Box
        sx={{
          columnGap: 3,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {members.map((member) => (
          <MarketingTeamItem key={member.id} member={member} />
        ))}
      </Box>
    </Container>
  );
}
