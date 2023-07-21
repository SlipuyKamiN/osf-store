import { CounterForm, Input, SubmitButton } from './Form.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ErrMessage } from '../LogInModal/LogInModal.styled';
import { releaseSubscribe } from 'API/API';
import { notification } from 'components/Global/notification';
import { useState } from 'react';
import { colors } from 'styles/common/vars';
import { RotatingLines } from 'react-loader-spinner';

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
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async ({ email }) => {
    try {
      setIsLoading(true);
      const data = await releaseSubscribe({ email });

      notification('Congrats! You had been succesfully subscribed!', 'success');
      reset({ email: '' });
      console.table(data);
    } catch (error) {
      console.warn(error);
      notification();
    } finally {
      setIsLoading(false);
    }
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
      <SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? (
          <RotatingLines strokeColor={colors.accentGreen} width="20px" />
        ) : (
          <span className="icon-arrow-right"></span>
        )}
      </SubmitButton>
    </CounterForm>
  );
};

export default Form;
