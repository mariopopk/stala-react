export function resolveHost(path) {
  if (!path) return;
  if (path.includes("http")) return path;
  const fullPath =
    process.env.NODE_ENV !== "development"
      ? path
      : process.env.REACT_APP_BACKEND_URL + path;

  return fullPath;
}
