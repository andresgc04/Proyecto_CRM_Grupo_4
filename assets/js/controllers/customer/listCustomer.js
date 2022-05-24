$(document).ready(function () {
  dtCostumers();
});

function dtCostumers() {
  $("#costumersTable").DataTable({
    ajax: {
      url: "",
      type: "POST",
      datatype: "json",
    },
    columns: [
      { "data": "id", "name": "Id" },
      { "data": "name", "name": "Name" },
      { "data": "email", "name": "Email" },
      {"data":"address", "name":"Address"},
      {"data":"createdAt", "render": function(data){return moment(data).format('DD/MM/YYYY')},"name": "CreatedAt"}
    ],
    "order":[0,"asc"],
    "processing":"true",
    "serverSide":"true"
  });
}
