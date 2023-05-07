import { AppSocketResponse } from "./AppSocketResponse.js";

export default function registerProductHandlers(io, socket, Products) {
  const eventName = "product";
  const createEventName = (sub) => `${eventName}:${sub}`;
  const events = {
    add: createEventName("add"),
    delete: createEventName("delete"),
  };

  socket.on(events.add, async (data) => {
    try {
      const product = await Products.addItem(data);
      io.emit(events.add, new AppSocketResponse(events.add, product, true));
    } catch (error) {
      io.emit(events.add, new AppSocketResponse(events.add, data, false));
    }
  });

  socket.on(events.delete, async (id) => {
    try {
      const res = await Products.deleteItem(id);
      io.emit(events.delete, new AppSocketResponse(events.delete, res, true));
    } catch (error) {
      io.emit(
        events.delete,
        new AppSocketResponse(events.delete, { id }, false)
      );
    }
  });
}
