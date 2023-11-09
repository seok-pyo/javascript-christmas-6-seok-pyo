const applier = {
  weekendCheck: (day) => {
    if (day % 7 === 1 || day % 7 === 2) return true;
    return false;
  },

  starCheck: (day) => {
    if (day % 7 === 3 || day === 25) return true;
    return false;
  },
};

export default applier;
