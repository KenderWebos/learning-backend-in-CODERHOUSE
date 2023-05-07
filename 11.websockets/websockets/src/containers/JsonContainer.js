// @ts-check

import fs from "fs/promises";
import fss from "fs";
import path from "path";

export default class JsonContainer {
  constructor({
    filename = "default",
    items = [],
    validator = (item, items) => true,
  }) {
    this.route = "database";
    this.fileExtension = ".json";
    this.validator = validator;
    this.items = items;
    this.filename = filename;
    this.fullPath = path.resolve(
      this.route,
      this.filename + this.fileExtension
    );

    this.init();
  }

  async init() {
    const dirname = path.dirname(this.fullPath);

    if (!fss.existsSync(dirname)) {
      await fs.mkdir(dirname, { recursive: true });
    }

    const data = await this.getJsonData();
    for (const item of data) {
      if (!item.id) {
        await this.addItem(item);
      } else {
        this.items.push(item);
      }
    }
  }

  async addItem(item) {
    if (
      typeof this.validator === "function" &&
      this.validator(item, this.items)
    ) {
      const id = this.items.length + 1;
      const data = { id, ...item };
      this.items.push(data);
      await this.setJsonData();
      return data;
    }
    throw new Error("No se pudo agregar el item");
  }

  async updateItem(id, item, replace = true) {
    const index = this.items.findIndex((x) => x.id == id);

    if (index != -1 && replace) {
      // si el indice es -1 es porque no existe el item
      this.items[index] = item;
      await this.setJsonData();
      return true;
    } else if (index != -1 && !replace) {
      const oldItem = this.items[index];
      this.items[index] = { ...oldItem, ...item }; //aqui se hace el merge de los objetos // spread operator //
      await this.setJsonData();
      return true;
    }
    throw new Error("No se pudo actualizar el item o no existe");
  }

  async deleteItem(id) {
    const index = this.items.findIndex((x) => x.id == id);

    if (index != -1) {
      // si el indice es -1 es porque no existe el item
      this.items.splice(index, 1);
      await this.setJsonData();
      return {
        message: "El item se elimino correctamente",
      };
    } else {
      throw new Error("No se pudo eliminar el item o no existe");
    }
  }

  async getJsonData() {
    try {
      if (!fss.existsSync(this.fullPath)) {
        await fs.writeFile(this.fullPath, JSON.stringify(this.items));
        return this.items;
      } else {
        const data = await fs.readFile(this.fullPath, "utf-8");
        return JSON.parse(data);
      }
    } catch (err) {
      throw new Error("Error al leer el archivo JSON");
    }
  }

  async setJsonData() {
    await fs.writeFile(this.fullPath, JSON.stringify(this.items));
  }

  async getItems() {
    return await this.items;
  }

  async getItem(id) {
    const item = await this.items.find((item) => item.id === id);
    if (!item) {
      throw new Error("No existe el item");
    }
    return item;
  }

  hasItem(id) {
    return this.items.some((item) => item.id === id);
  }
}
