export default function (item, items) {
  // TODO: validar tipos de datos para cada propiedad del item
  const allInputsNotNull =
    !!item.title &&
    !!item.description &&
    !!item.price &&
    !!item.code &&
    !!item.stock;

  const codeIsNotRepeated = !this.items.some(
    (product) => product.code === item.code
  );

  if (!item.status) {
    item.status = true;
  }

  let hasValidThumbnails = true;
  if (
    !!item.thumbnails &&
    Array.isArray(item.thumbnails) &&
    item.thumbnails.length > 0
  ) {
    hasValidThumbnails = item.thumbnails.every((thumbnail) => {
      return typeof thumbnail === "string" && thumbnail.length > 0;
    });
  }

  return allInputsNotNull && codeIsNotRepeated && hasValidThumbnails;
}
