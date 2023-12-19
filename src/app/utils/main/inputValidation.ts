export const onCheckEng = (value: string) => {
  var check_eng = /^[A-Za-z0-9\s]*$/;

  return check_eng.test(value);
};
