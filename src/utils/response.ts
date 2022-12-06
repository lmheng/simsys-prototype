export const handleResponse = <T>(response: T, api: string) => {
  return response;
};

export const handleError = <T extends Error>(error: T, methodName: string) => {
  return error;
};
