import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Form = ({ isShow, setIsShow }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [send, setSend] = useState('');

  const regx =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const submit = (data, e) => {
    emailjs
      .sendForm(
        'service_ve83wik',
        'template_45f3k9d',
        e.target,
        'SzFJbZK7WQn3Vrq4e'
      )
      .then(
        (result) => {
          setSend(result.text);
          reset();
          setTimeout(() => {
            setSend('');
          }, 2000);
        },
        (error) => {
          setSend('ERROR');
        }
      );
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(submit)(e);
      }}
      className={`form ${isShow && 'form-show'}`}
    >
      <ul className="form__container">
        <li className="form__item">
          <label htmlFor="name" className="form__label form__label-name">
            Name
          </label>
          <input
            className="form__input form__input-name"
            type="text"
            id="name"
            {...register('name', {
              required: { value: true, message: 'This field is required' },
              minLength: 4,
              maxLength: 50,
            })}
          />
          {errors.name && (
            <span className="form__span">{errors.name.message}</span>
          )}
        </li>
        <li className="form__item">
          <label htmlFor="email" className="form__label form__label-email">
            Email
          </label>
          <input
            className="form__input"
            type="text"
            id="email"
            {...register('email', {
              required: { value: true, message: 'This field is required' },
              minLength: 4,
              pattern: regx,
            })}
          />
          {errors.email && (
            <span className="form__span">{errors.email.message}</span>
          )}
        </li>
        <li className="form__item">
          <label htmlFor="subject" className="form__label form__label-subject">
            Subject
          </label>
          <input
            className="form__input"
            type="text"
            id="subject"
            {...register('subject', {
              required: { value: true, message: 'This field is required' },
              minLength: 4,
              maxLength: 50,
            })}
          />
          {errors.subject && (
            <span className="form__span">{errors.subject.message}</span>
          )}
        </li>
        <li className="form__item">
          {' '}
          <label htmlFor="message" className="form__label form__message">
            Message
          </label>
          <textarea
            className="form__input form__input-message"
            type="text"
            id="message"
            {...register('message', {
              required: { value: true, message: 'This field is required' },
              minLength: 4,
              maxLength: 50,
            })}
          />
          {errors.message && (
            <span className="form__span">{errors.message.message}</span>
          )}
        </li>
        <li className="form__item">
          <button className="form__cta">
            {send === 'OK'
              ? 'Send successfully'
              : send === 'ERROR'
              ? 'Send successfully'
              : 'Send Message'}
          </button>

          {screen.width >= 280 && screen.width <= 768 && (
            <button
              className="form__about-cta"
              onClick={() => setIsShow(!isShow)}
              type="button"
            >
              About Me
            </button>
          )}
        </li>
      </ul>
    </form>
  );
};

export default Form;
