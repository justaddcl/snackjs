const pluralize = (word, count) => {
  return count === 0 || count > 1 ? `${word}s` : word;
};

export { pluralize };
