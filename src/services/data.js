export const daysAgo = (data) => {
  const day = 24 * 60 * 60 * 1000;
  const now = new Date();
  const date = new Date(data);
  const timeDiff = now - date;
  const dayDiff = Math.round(timeDiff / day);
  if (dayDiff === 1) {
    return `${dayDiff} day ago`;
  } else if (dayDiff > 0) {
    return `${dayDiff} days ago`;
  }
  return 'Today';
};
