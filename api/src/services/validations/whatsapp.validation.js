import yup from "yup";

export const validateConnect = async (number) => {
  const schema = yup.object().shape({
    number: yup.string().required().max(15),
  });

  try {
    await schema.validate({ number }, { abortEarly: false });
    return "OK";
  } catch (error) {
    return error.errors;
  }
};

export const validateSendMessage = async (body) => {
  const schema = yup.object().shape({
    destination: yup.string().required().max(15),
    message: yup.string().required(),
  });

  try {
    await schema.validate(body, { abortEarly: false });
    return "OK";
  } catch (error) {
    const errors = {};
    error.inner.forEach((err) => {
      errors[err.path] = err.message;
    });
    return errors;
  }
};
