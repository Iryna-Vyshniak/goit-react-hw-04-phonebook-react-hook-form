import React from 'react';
import { nanoid } from 'nanoid';
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { IoMdPersonAdd } from 'react-icons/io';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { StyledButton, LabelWrapper } from './ContactForm.styled';

export const ContactForm = ({ onAddContact }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  return (
    <form
      autoComplete="off"
      //initialValues={initialValues}
      onSubmit={handleSubmit(data => {
        onAddContact({ id: nanoid(), ...data });
        reset();
      })}
    >
      <label htmlFor="name">
        <LabelWrapper>
          <BsPersonFill />
          Name
        </LabelWrapper>
        <input
          {...register('name', {
            required: `This field is required`,
            pattern:
              /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
          })}
        />
        <div>
          {errors?.name && (
            <p>
              {errors?.name?.message ||
                `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore
            d'Artagnan`}
            </p>
          )}
        </div>
      </label>

      <label htmlFor="number">
        <LabelWrapper>
          <BsFillTelephoneFill /> Number
        </LabelWrapper>
        <input
          type="tel"
          {...register('number', {
            required: `This field is required`,
            min: {
              value: 7,
              message: `Min 7 numbers. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`,
            },
            pattern:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
          })}
        />
        <div>
          {errors?.number && (
            <p>
              {errors?.number?.message ||
                `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`}
            </p>
          )}
        </div>
      </label>
      <StyledButton type="submit" disabled={!isValid}>
        <IoMdPersonAdd size="16" />
        Add contact
      </StyledButton>
    </form>
  );
};

ContactForm.propType = {
  onSubmit: PropTypes.func.isRequired,
};
