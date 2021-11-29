export async function post() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token:
          '91j893h281h9nf98fnf2309jd09jkkd0as98238j9fr8j98f9j8f298r829r-f',
        user: {
          name: 'Antonio AA',
          email: 'teste.teste@gmail.com',
        },
      });
    }, 2000);
  });
}

export const defaults = {
  headers: {
    Authorization: '',
  },
};

export async function get() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          name: 'Antonio AA',
          email: 'teste.teste@gmail.com',
        },
      });
    },0);
  });
}