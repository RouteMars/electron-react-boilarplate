const debug = (...message: (string | unknown | undefined)[]): void => {
  console.log('📀:) ' + message);
};

const isDev = () => {
  return process.env.NODE_ENV !== 'production';
};

export default {
  debug,
  isDev,
};
