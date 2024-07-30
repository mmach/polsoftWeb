import React from 'react';

import { Box, Stack, Button, Dialog, ButtonBase, DialogTitle } from '@mui/material';

import Iconify from 'src/components/iconify';
import { RHFTextField } from 'src/components/hook-form';

type InstructionsDialogProps = {
  onClose: () => void;
};

export const InstructionsDialog: React.FC<InstructionsDialogProps> = ({ onClose }) => (
    <Dialog onClose={onClose} open PaperProps={{ sx: { minWidth: '800px' } }}>
      <DialogTitle>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          Instructions
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
          <RHFTextField multiline rows={6} name="instructions" label="Instructions" />

          <div>
            <Button
              color="inherit"
              size="large"
              type="button"
              variant="contained"
              onClick={onClose}
            >
              Save & Close
            </Button>
          </div>
        </Stack>
      </Box>
    </Dialog>
  );
