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

export function generateRandomNumber(max = 1000) {
  return Math.floor(Math.random() * max);
}

// Save store to localstorage
export function loadState() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}
