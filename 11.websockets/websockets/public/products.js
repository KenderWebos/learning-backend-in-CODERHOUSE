const eventName = "product";
const createEventName = (sub) => `${eventName}:${sub}`;
const events = {
  add: createEventName("add"),
  delete: createEventName("delete"),
};

const socket = io();

const [$addProductForm, $deleteProductForm, $productList] = [
  "addProduct",
  "deleteProduct",
  "productList",
].map((id) => document.getElementById(id));

socket.on(events.add, async (payload) => {
  const html = await fetch("/productview", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload.data),
  }).then((res) => res.text());
  $productList.innerHTML += html;
});

$addProductForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData($addProductForm);

  for (let [key, value] of formData) {
    if (value === "") {
      formData.delete(key);
    }
  }
  const data = Object.fromEntries(formData);
  data.status = formData.get("status") === "on";

  socket.emit(events.add, data);
});

$deleteProductForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData($deleteProductForm);
  const id = formData.get("id");

  socket.emit(events.delete, id);
  document.getElementById(`product-${id}`).remove();
});
