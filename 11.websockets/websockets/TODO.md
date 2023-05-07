# Se debe entregar

## Requisitos 
- puerto 8080
- ruta /products
- ruta /carts

## /api/products

### GET /
enviar todos los productos
- param: limit

### GET /:pid
enviar producto con el id : pid

### POST /
crear producto:
  - id: string | number ( el cliente no debe mandar id)
  - title: string
  - description: string
  - code: string
  - price: number
  - status: boolean
  - stock: number
  - category: string
  - thumbnails?: string[] (rutas de img)
  - status: boolean (default: true)

### PUT /:pid
actualizar productor segun campos
  - no actualizar/eliminar id
### DELETE /:pid
borrar producto

## /api/carts

### POST /

crear carrito:
  - id: string | number (no incluir al mandarlo al cliente)