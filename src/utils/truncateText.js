export const truncateText = (stringToBeTruncated) => {

  if (stringToBeTruncated.length >= 350) {
    return stringToBeTruncated.substring(0, 350) + "..."
  }

  return stringToBeTruncated
};