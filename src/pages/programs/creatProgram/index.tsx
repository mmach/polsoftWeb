import { yupResolver } from '@hookform/resolvers/yup';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

import FormProvider, { RHFRadioGroup, RHFTextField } from 'src/components/hook-form';

import { ProgramType } from 'src/types/program/programType';

import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';
import { ProgramAPI } from 'src/facade';
import { useProgramFacade } from 'src/facade/program/useProgramFacade';
import { FormSchema } from './schema';

export const defaultValues: ProgramType = {
  language: '',
  name: '',
  id: 0,
  guid: ''
};

export default function CreateProgramPage() {
  const { refetchList } = useProgramFacade()
  const methods = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { isSubmitting },

  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    const result = await ProgramAPI.CreateNew(data as ProgramType);
    refetchList();
  });

  return (
    <>
      <Helmet>
        <title>Manage Programs</title>
      </Helmet>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Box width={1000} gap={1} padding={2} justifyContent='center' display='flex' height={700}>
          <Box gap={16} width={600} margin='auto'>
            <Box marginBottom={1}>
              <RHFTextField name="name" label="Name" />
            </Box>
            <Box marginBottom={1}>
              <RHFRadioGroup
                row
                name="language"
                label="Languages"
                spacing={4}
                options={[
                  { value: 'Python', label: 'Python' },
                  { value: 'JavaScript', label: 'JavaScript' },
                  { value: 'C#', label: 'C#' },
                ]}
              />
            </Box>
            <LoadingButton
              loading={isSubmitting}

              color="inherit"
              size="large"
              type="submit"
              variant="contained"
            >
              Submit
            </LoadingButton>
          </Box>
        </Box>
      </FormProvider >
    </>
  );
}
