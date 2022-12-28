class QueryUtils {
  getQueryParams() {
    const window = window;
    const location = window.location;
    const search = location.search;

    const params = new URLSearchParams(search);

    const query = {};
    for (const param of params) {
      query[param[0]] = param[1];
    }

    return query;
  }
}

export default QueryUtils;
