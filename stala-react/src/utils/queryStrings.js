const queryString = require("query-string");

export function countQueries(queryStr) {
  const queryObj = queryString.parse(queryStr);
  let items = 0;
  for (let key in queryObj) {
    const foundItems = queryObj[key].split(",").length;
    items += foundItems;
  }

  return items;
}

export function processQuery(queryStr, key, value) {
  const queryObj = queryString.parse(queryStr);
  const filter = queryObj[key];

  // If filter does not exist, return nothing
  if (!filter)
    return queryString.stringify(
      { ...queryObj, [key]: value },
      { encode: false }
    );

  const values = filter.split(",");
  const indexOfValue = values.indexOf(value.toString());
  if (indexOfValue >= 0) {
    values.splice(indexOfValue, 1);
  } else {
    values.push(value.toString());
  }

  if (values.length > 0) {
    return queryString.stringify(
      { ...queryObj, [key]: values.join() },
      { encode: false }
    );
  } else {
    return queryString.stringify({ ...queryObj, [key]: [] }, { encode: false });
  }
}

export function replaceQuery(queryStr, key, value) {
  const queryObj = queryString.parse(queryStr);
  const filter = queryObj[key];

  // If filter does not exist, return nothing
  if (!filter)
    return queryString.stringify(
      { ...queryObj, [key]: value },
      { encode: false }
    );

  if (filter) {
    return queryString.stringify(
      { ...queryObj, [key]: value },
      { encode: false }
    );
  } else {
    return queryString.stringify({ ...queryObj, [key]: [] }, { encode: false });
  }
}

// Checks whether value exists in the query
export function lookUpQueryValue(queryStr, key, value) {
  const queryObj = queryString.parse(queryStr);
  const filter = queryObj[key];

  // If filter does not exist, return nothing
  if (!filter) return null;
  const values = filter.split(",");
  return values.includes(value);
}
