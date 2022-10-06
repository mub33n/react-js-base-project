const user = {
  state: {
    token: null,
  },
  reducers: {
    setToken(state: any, token: string) {
      return { ...state, token };
    },
    clearToken(state: any) {
      return { ...state, token: null };
    },
  },
};

export default user;
