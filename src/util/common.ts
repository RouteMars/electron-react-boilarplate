const debug = (...message: (string | unknown | undefined)[]): void => {
  console.log('📀:) ' + message);
};

export default {
  debug,
};
