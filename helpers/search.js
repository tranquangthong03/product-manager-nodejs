module.exports = (query) => {
  let objectSearch = {
    keyword: "",
  };
  if (query.keyword) {
    objectSearch.keyword = query.keyword;
    const regex = new RegExp(objectSearch.keyword, "i"); //Tìm kiếm không phân biệt chữ hoa chữ thường
    objectSearch.regex = regex;
  }
  return objectSearch;
};
