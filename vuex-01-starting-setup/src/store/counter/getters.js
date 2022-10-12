export default {
  finalCounter(state) {
    return state.counter * 2;
  },
  normalizedCounter(state, getters) {
    // const finalCounter = state.counter * 2;
    const finalCounter = getters.finalCounter;
    return finalCounter > 100 ? 100 : finalCounter < 0 ? 0 : finalCounter;
  },
};