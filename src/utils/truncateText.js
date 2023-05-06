export const truncateText = (stringToBeTruncated) => {

  if (stringToBeTruncated.length >= 300) {
    return stringToBeTruncated.substring(0, 300) + "..."
  }

  return stringToBeTruncated
};