import { memo } from 'react';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  single?: boolean;
}

function Logo({ single = false, sx }: LogoProps) {
  const theme = useTheme();
  const PRIMARY_MAIN = theme.palette.primary.main;

  const singleLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 512 512"
    >
      <ellipse cx="405.143" cy="338.571" fill={PRIMARY_MAIN} rx="82.857" ry="82.857" />
      <path
        fill="currentColor"
        d="M114.742 355.332H256v66.097H24v-61.376l140.323-203.956H24V90h232v61.376L114.742 355.332z"
      />
    </svg>
  );

  const fullLogo = (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 250">
      <defs>
        <style>
          {`.cls-1 {
            fill: #FA541C;
          }
          .cls-2 {
            font-family: BarlowCondensed-Bold, 'Barlow Condensed';
            font-size: 150px; /* Keep font size at 150 */
            font-weight: 700;
          }
          .cls-3 {
            fill: black;
          }
          `}
        </style>
      </defs>
      <g>
        <g id="Layer_1">
          <text className="cls-2" transform="translate(5.6 140)">
            <tspan x="0" y="0" className="cls-1">App</tspan>
            <tspan x="220" y="0" className="cls-3">Zone</tspan> {/* Decrease the space */}
          </text>
          <circle className="cls-1" cx="530" cy="120" r="20" /> {/* Move dot further right */}
        </g>
      </g>
    </svg>
  );

  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 64 : 75,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}

export default memo(Logo);
