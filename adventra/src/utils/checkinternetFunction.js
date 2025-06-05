/* eslint-disable no-unused-vars */
export async function checkInternet() {
  try {
    return navigator.onLine;
  } catch (error) {
    return false;
  }
}
