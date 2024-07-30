import * as Yup from 'yup';

// ----------------------------------------------------------------------

export const FormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Program name is required')
    .min(6, 'Mininum 6 characters')
    .max(32, 'Maximum 32 characters'),
  language: Yup.string()
    .required('Language is required')

});
