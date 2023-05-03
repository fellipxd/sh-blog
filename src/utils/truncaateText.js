export const truncateText = (stringToBeTruncated, length) => {

  if (stringToBeTruncated.length >= 550) {
    return stringToBeTruncated.substring(0, 550) + "..."
  }

  return stringToBeTruncated
};
