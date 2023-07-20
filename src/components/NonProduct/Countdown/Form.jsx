import { CounterForm, Input, SubmitButton } from './Form.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ErrMessage } from '../LogInModal/LogInModal.styled';
import { releaseSubscribe } from 'API/API';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('No email provided.')
    .matches(
      '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      'Email can contain letters, digits and may contain "@" and "." example@mail.com'
    ),
});

const Form = () => {
  const handleFormSubmit = async ({ email }) => {
    try {
      const data = await releaseSubscribe({ email });

      console.table(data);
    } catch (error) {
      console.log(error);
    }

    reset({ email: '' });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <CounterForm autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        type="text"
        {...register('email')}
        placeholder="Enter your email to receive the latest announcements"
      />
      {errors.email && <ErrMessage>{errors.email.message}</ErrMessage>}
      <SubmitButton type="submit" className="icon-arrow-right" />
    </CounterForm>
  );
};

export default Form;
