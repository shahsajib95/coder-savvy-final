const filterSearch = ({ router, sort, search }) => {
  const path = router.pathname;
  const query = router.query;

  if (search) query.search = search;
  if (sort) query.sort = sort;

  router.push({
    pathname: path,
    query: query,
  });
};

export default filterSearch;
