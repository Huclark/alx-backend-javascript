// This function returns a Promise

export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve('resolved');
      } else {
        reject(new Error('rejected'));
      }
    }, 2000);
  });
}
