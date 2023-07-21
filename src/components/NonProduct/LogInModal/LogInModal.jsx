import { createPortal } from 'react-dom';
import {
  Backdrop,
  ErrMessage,
  ForgotPasswordLink,
  FormInput,
  FormLabel,
  InputWrapper,
  ModalForm,
  ModalTitle,
  RegisterLink,
  ShowPasswordButton,
  SubmitButton,
} from './LogInModal.styled';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { validationSchema } from './validationSchema';
import { notification } from 'components/Global/notification';
import { userLogIn } from 'API/API';
import { colors } from 'styles/common/vars';
import { RotatingLines } from 'react-loader-spinner';

const modalRoot = document.querySelector('#modal-root');

const LogInModal = ({ toggleModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleModal = event => {
    const isEventModalControlElement =
      event.currentTarget.dataset?.openModal ||
      (event.target.dataset?.closeModal && event.code !== 'Tab') ||
      event.target.dataset?.backdrop ||
      event.code === 'Escape';

    if (isEventModalControlElement) {
      toggleModal();
      return;
    }
  };

  const handleFormSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const data = await userLogIn({ email, password });

      notification(`Welcome ${email} !`, 'success');
      toggleModal();
      reset({ email: '', password: '' });
      console.table(data);
    } catch (error) {
      console.warn(error);
      notification();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleToggleModal);
    return () => {
      window.removeEventListener('keydown', handleToggleModal);
    };
  });

  return createPortal(
    <Backdrop data-backdrop onClick={handleToggleModal}>
      <ModalForm autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
        <ModalTitle>Sign in</ModalTitle>
        <InputWrapper>
          <FormLabel htmlFor="logIn">Email</FormLabel>
          <FormInput id="logIn" type="text" {...register('email')} />
          {errors.email && <ErrMessage>{errors.email.message}</ErrMessage>}
        </InputWrapper>
        <InputWrapper>
          <FormLabel htmlFor="password">
            Password
            <ForgotPasswordLink to="/" data-close-modal>
              forgot password
            </ForgotPasswordLink>
          </FormLabel>
          <FormInput
            type={showPassword ? 'text' : 'password'}
            id="password"
            {...register('password')}
          />
          {errors.password && (
            <ErrMessage>{errors.password.message}</ErrMessage>
          )}
          <ShowPasswordButton
            className="icon-eye"
            type="button"
            active={showPassword}
            onClick={toggleShowPassword}
          />
        </InputWrapper>
        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? (
            <RotatingLines strokeColor={colors.primaryWhite} width="24px" />
          ) : (
            'Login'
          )}
        </SubmitButton>
        <RegisterLink to="/" data-close-modal>
          I don`t have an account
        </RegisterLink>
      </ModalForm>
    </Backdrop>,
    modalRoot
  );
};

export default LogInModal;

LogInModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
