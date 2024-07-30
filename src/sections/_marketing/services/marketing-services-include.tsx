import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Architecture Design',
    description: 'Streamline and optimize your software architecture with advanced design tools.',
    icon: '/assets/icons/ic_web_programming.svg'
  },
  {
    title: 'AI Code Generator',
    description: 'Leverage artificial intelligence to automatically generate efficient and reliable code.',
    icon: '/assets/icons/ic_optimization.svg',
  },
  {
    title: 'Create App in 5 Minutes',
    description: 'Quickly design and launch applications with our intuitive, time-saving platform.',
    icon: '/assets/icons/ic_sketch_design.svg',
  },
  {
    title: 'Build and Run Your Code',
    description: 'Compile and execute your code seamlessly in our integrated development environment.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Instant Feedback',
    description: 'Receive real-time responses and debugging support to enhance your development process.',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Automated Deployment, CI/CD',
    description: 'Simplify your deployment workflow with continuous integration and continuous deployment solutions.',
    icon: '/assets/icons/ic_social_media.svg',
  },
];



// ----------------------------------------------------------------------

export default function MarketingServicesInclude() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2">Discover features</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        Unlock the full potential of your development process with our cutting-edge services designed to enhance efficiency, reliability, and performance.
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES.map((value) => (
          <div key={value.title}>
            <SvgColor
              src={value.icon}
              color="info"
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                bgcolor: 'primary.main',
              }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
