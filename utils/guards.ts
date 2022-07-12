export const guardNumber = () => {
  return (value?: any): value is number => {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
  };
};

export const guardString = (passEmpty = true) => {
  return (value?: any): value is string => {
    return typeof value === 'string' && passEmpty ? true : !!value;
  };
};
