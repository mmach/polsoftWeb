import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Host Your App',
    description: 'Secure and scalable hosting solutions to ensure your applications are always available and performing at their best.',
    icon: '/assets/icons/ic_hosting.svg',
    path: paths.marketing.services,
  },
  {
    title: 'Automated Deployment, CI/CD',
    description: 'Streamline your deployment process with automated CI/CD tools, reducing downtime and accelerating your release cycle.',
    icon: '/assets/icons/ic_ci_cd.svg',
  },
  {
    title: 'Automatic Build',
    description: 'Efficient and reliable build automation to compile and test your code, catching errors early in the development process.',
    icon: '/assets/icons/ic_build.svg',
  },
  {
    title: 'Automatic Run Your Code',
    description: 'Execute your code with precision and speed in our optimized execution environment, ensuring smooth performance and instant feedback.',
    icon: '/assets/icons/ic_run_code.svg',
  },
  {
    title: 'Create App in 5 Minutes',
    description: 'Accelerate your development process and create fully functional applications in just five minutes with our intuitive tools and pre-built templates.',
    icon: '/assets/icons/ic_app_creation.svg',
  },
  {
    title: 'Instant Resolution',
    description: 'Resolve issues instantly with our advanced troubleshooting and support tools, providing real-time diagnostics and automated fixes.',
    icon: '/assets/icons/ic_resolution.svg',
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
      <Typography variant="h2">Services Include</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
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
