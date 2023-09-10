//jsDoc
/**
 * @param {number} input - seconds
 * @returns {string} - formatted time
 * @example
 * formatTime(100) // 01:40
 * formatTime(10000) // 02:46:40
 * */
export const formatTime = (input) => {
  const decDays = input / 86400;
  const days = Math.floor(decDays);
  const decH = (decDays - days) * 24;
  const hours = Math.floor(decH);
  const decMin = (decH - hours) * 60;
  const minutes = Math.floor(decMin);
  const decSec = (decMin - minutes) * 60;
  const seconds = Math.floor(decSec);
  const time = [hours, minutes, seconds]
    .map((v) => (v < 10 ? `0${v}` : v))
    .filter((v, i) => v !== "00" || i > 0)
    .join(":");
  return time;
};

//jsDoc
/**
 * @param {number} bytes - bytes
 * @param {number} [decimals=2] - decimals
 * @returns {string} - formatted bytes
 */
export const formatBytes = (bytes, decimals = 2) => {
  const gigabytes = Math.floor(bytes / 1073741824);
  const megabytes = Math.floor(bytes / 1048576);
  const kilobytes = Math.floor(bytes / 1024);
  const bytes1 = Math.floor(bytes);
  const sizes = [gigabytes, megabytes, kilobytes, bytes1];
  const units = ["GB", "MB", "KB", "B"];
  const index = sizes.findIndex((v) => v > 0);
  const size = sizes[index];
  const unit = units[index];
  return `${size.toFixed(decimals)} ${unit}`;
};
//jsDoc
/**
 * @param {number} max - max index
 * @param {number[]} lastIndices - last indices
 * @returns {number} - random index
 */
export const getRandomIndex = (max, lastIndices) => {
  const index = Math.floor(Math.random() * max);
  if (lastIndices.includes(index)) {
    return getRandomIndex(max, lastIndices);
  }
  return index;
};
