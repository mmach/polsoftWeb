import React from 'react';
import { useAtom } from 'jotai';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Box, Stack, Dialog, ButtonBase, Typography, DialogTitle } from '@mui/material';

import Iconify from 'src/components/iconify';

import { previewCodeAtom } from './store';

export const PreviewCodeDialog: React.FC = () => {
  const [data, setData] = useAtom(previewCodeAtom);

  const onClose = () => {
    setData(null);
  };

  if (!data) {
    return null;
  }

  return (
    <Dialog onClose={onClose} open PaperProps={{ sx: { minWidth: '800px' } }}>
      <DialogTitle>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {data.name}

          <ButtonBase onClick={onClose}>
            <Iconify icon="material-symbols:close" />,
          </ButtonBase>
        </Stack>
      </DialogTitle>

      <Box
        sx={{
          paddingBottom: (theme) => theme.spacing(3),
          paddingRight: (theme) => theme.spacing(3),
          paddingLeft: (theme) => theme.spacing(3),
        }}
      >
        <Stack direction="column" gap={2}>
          <Stack direction="column" gap={1}>
            <Typography variant="h6">Prerequisites</Typography>
            <SyntaxHighlighter
              language="python"
              style={darcula}
              customStyle={{ borderRadius: '8px', maxHeight: '320px' }}
            >
              {data.cleanPrerequisites}
            </SyntaxHighlighter>
          </Stack>

          <Stack direction="column" gap={1}>
            <Typography variant="h6">Code</Typography>
            <SyntaxHighlighter
              language="python"
              style={darcula}
              customStyle={{ borderRadius: '8px', maxHeight: '320px' }}
            >
              {data.cleanCode}
            </SyntaxHighlighter>
          </Stack>
        </Stack>
      </Box>
    </Dialog>
  );
};
