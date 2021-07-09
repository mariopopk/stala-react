export function lockBody(boolean) {
  const body = document.querySelector("body");
  if (boolean) body.style.overflow = "hidden";
  else body.style.overflow = "auto";
  return boolean;
}

export function getDepartmentBySlug(slug, categories) {
  return categories.find(
    ({ name }) => name.toLowerCase() === slug.toLowerCase()
  );
}

export function getDepartments(categories) {
  return categories.map(({ id, name }) => {
    return { id, name };
  });
}
