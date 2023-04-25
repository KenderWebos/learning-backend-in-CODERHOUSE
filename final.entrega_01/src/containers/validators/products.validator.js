export default function(item,items){
    const allInputsNotNull = !!item.title && !!item.description && !!item.price && !!item.thumbnail && !!item.code && !!item.stock;
    const codeIsNotRepeated = !this.items.some(product => product.code === item.code);
    return allInputsNotNull && codeIsNotRepeated
}