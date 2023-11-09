const applier = {
  weekend: (day) => {
    if (day % 7 === 1 || day % 7 === 2) return true;
    return false;
  },
};

export default applier;
