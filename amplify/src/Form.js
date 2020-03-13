import React from 'react';

import { useForm } from 'react-hook-form';
import axios from 'axios';

function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    const { message, phoneNumber } = data;

    await axios
      .post('???', {
        message,
        phoneNumber,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="message" placeholder="Message" ref={register} />
      <input name="phoneNumber" placeholder="Phone Number" ref={register} />

      <input type="submit" />
    </form>
  );
}

export default Form;
