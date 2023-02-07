export default function filterDataByQuery(data, query) {
  if (query) {
    return data.filter((obj) =>
      obj.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  return data;
}
