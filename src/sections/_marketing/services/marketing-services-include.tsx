import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'AI Code Generator',
    description: 'Automatically generate code snippets using advanced AI technology.',
    icon: '/assets/icons/ic_web_programming.svg'
  },
  {
    title: 'Host Your App',
    description: 'Secure and scalable hosting solutions for your applications.',
    icon: '/assets/icons/ic_optimization.svg',
  },
  {
    title: 'Deployment',
    description: 'Streamline the process of deploying your software with easy-to-use tools.',
    icon: '/assets/icons/ic_sketch_design.svg',
  },
  {
    title: 'Automated Deployment, CI/CD',
    description: 'Integrate continuous integration and continuous deployment for seamless software updates.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Build and Run Your Code',
    description: 'Compile and execute your code directly from the platform.',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Create App in 5 Minutes',
    description: 'Quickly craft applications with our streamlined setup process.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Instant Resolution',
    description: 'Resolve issues instantly with our advanced troubleshooting and support tools, providing real-time diagnostics and automated fixes.',
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
