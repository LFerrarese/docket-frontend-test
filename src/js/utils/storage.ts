export const storage = {
  get: (key: string) => localStorage.getItem(key),
  set: (key: string, data: string) => localStorage.setItem(key, data),
};
