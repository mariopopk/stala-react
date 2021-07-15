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

export function getProductFamily(familyId, products) {
  const productsInSameFamily = [];
  products.forEach((product) => {
    if (product.familyId === familyId) {
      productsInSameFamily.push(product);
    }
  });
  return productsInSameFamily;
}

export function getDepartmentById(arr, itemId, nestingKey) {
  return arr.reduce((a, item) => {
    if (a) return a;
    if (item.id === itemId) return item;
    if (item[nestingKey])
      return getDepartmentById(item[nestingKey], itemId, nestingKey);
  }, null);
}

export function getDepartments(categories) {
  return categories.map(({ id, name }) => {
    return { id, name };
  });
}
