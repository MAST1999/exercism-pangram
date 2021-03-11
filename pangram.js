export const isPangram = (sentence) => {
  if (sentence.length == 0) return false;
  const aToZInSentence = sentence.toLowerCase().match(/[a-z]/g);
  const unique = [...new Set(aToZInSentence)];
  return (unique.length == 26) ? true : false;
};
