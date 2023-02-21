export function sortKeys(globData) {
  const data = Object.keys(globData);
  data.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return data;
}
