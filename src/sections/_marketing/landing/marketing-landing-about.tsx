import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';


// ----------------------------------------------------------------------

const ROWS = [
  {
    label: 'projectshours of work',
    total: 24,
    content: 'Around-the-clock dedication to ensuring operational excellence and continuous development.',
  },
  {
    label: 'lines of code',
    total: 1000,
    content: 'A thousand lines of meticulously crafted code, designed for optimal performance and scalability.',
  },
  {
    label: 'queries to the GPT chat',
    total: 200,
    content: 'Two hundred interactions with ChatGPT, leveraging advanced AI to enhance communication and solve complex problems efficiently.',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingAbout() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'right' },
          }}
        >


          <Typography variant="h2" sx={{ my: 3 }}>
            Who We Are
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            At AppZone Builder, we&apos;re innovating app development, making it easier for developers of all levels to navigate from concept to deployment seamlessly. Our team is dedicated to solving your challenges and ensuring a smooth development process.
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            What We Provide

          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            AppZone Builder offers a comprehensive platform with advanced tools that streamline your development journey. Leverage our AI-driven code generation for quick starts, utilize real-time feedback for smoother development, and rely on our automated CI/CD pipelines for secure, up-to-date applications. Built on automation, scalability, and user-friendliness, our platform helps you transform your ideas into reality. Join us and turn your app development challenges into successes.
          </Typography>


        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {ROWS.map((row) => (
              <Stack
                key={row.label}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                  />
                }
              >
                <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                  <Stack direction="row">
                    <Typography variant="h2">{fShortenNumber(row.total)}</Typography>
                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                      +
                    </Box>
                  </Stack>

                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    {row.label}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {row.content}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
