const Validation = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name Required";
  } else if (values.name.length < 5) {
    errors.name = "name must be more then 5 char";
  }
  if (!values.password) {
    errors.password = "password Required";
  } else if (values.password.length < 9) {
    errors.password = "name must be more then 9 char";
  }
  if (!values.telephone) {
    errors.telephone = "telephone Required";
  } else if (values.telephone.length <= 8 ) {
    errors.telephone = "telephone must be more then 9 char";
  }

  

  return  errors;
};

export default Validation;
