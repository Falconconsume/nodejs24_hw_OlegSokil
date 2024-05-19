const { string, object, number } = require("yup");

const userSchema = object().shape({
  username: string().required("You have to enter the name!"),
  email: string()
    .required("You didn`t enter the email")
    .email("You didn`t pass valid email"),
});

const idSchema = object().shape({
  userId: number().integer().min(1),
});

const userValidation = async (body) => {
  await userSchema.validate(body);
};

const idValidation = async (id) => {
  await idSchema.validate(id);
};

module.exports = {
  userValidation,
  idValidation,
};
