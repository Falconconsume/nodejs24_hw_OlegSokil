const { string, object, number } = require("yup");

const userSchema = object().shape({
  username: string().required("You have to enter the name!"),
  email: string()
    .required("You didn`t enter the email")
    .email("You didn`t pass valid email"),
});

const idSchema = number().integer().min(1);

const userValidation = async (req, res, next) => {
  try {
    await userSchema.validate(req.body);
    return next();
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

const idValidation = async (req, res, next) => {
  try {
    await idSchema.validate(req.params.userId);
    next();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  userValidation,
  idValidation,
};
