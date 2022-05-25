window.addEventListener("load", event=> {
  callAPI(url, "GET", {}).then( clientes => {
    const costumerTableBody = document.getElementById("costumerTableBody");

    clientes.forEach(cliente => {
      const costumerTr = document.createElement("tr");
      const costumerTd = document.createElement("td");
      const costumerTd2 = document.createElement("td");
      const costumerTd3 = document.createElement("td");
      const costumerTd4 = document.createElement("td");
      const costumerTd5 = document.createElement("td");
      costumerTd.textContent = cliente.id;
      costumerTd2.textContent = cliente.name;
      costumerTd3.textContent = cliente.email;
      costumerTd4.textContent = cliente.address;
      costumerTd5.textContent = cliente.createdAt;
      costumerTr.appendChild(costumerTd);
      costumerTr.appendChild(costumerTd2);
      costumerTr.appendChild(costumerTd3);
      costumerTr.appendChild(costumerTd4);
      costumerTr.appendChild(costumerTd5);
      costumerTableBody.appendChild(costumerTr);
    })
  })
})
