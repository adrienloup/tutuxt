export const state = () => ({
  bodyClass: '',
  shop: 'tutu',
});

export const mutations = {
  SetClass (state, bodyClass) {
    state.bodyClass = bodyClass;
  }
};
