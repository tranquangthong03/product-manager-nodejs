module.exports = (query) => {
  let filterStatus = [
    {
      name: "Tất cả",
      status: "all",
      icon: "fas fa-list",
      class: "",
      color: "secondary",
    },
    {
      name: "Hoạt động",
      status: "active",
      icon: "fas fa-check-circle",
      class: "",
      color: "success",
    },
    {
      name: "Dừng hoạt động",
      status: "inactive",
      icon: "fas fa-times-circle",
      class: "",
      color: "danger",
    },
  ];
  const targetStatus = query.status || "all";
  filterStatus.forEach((item) => {
    if (item.status === targetStatus) {
      item.class = "active";
    } else {
      item.class = "";
    }
  });
  return filterStatus;
};
