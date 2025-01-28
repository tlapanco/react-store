import { WA_ME_URL } from '../constants.js'

export const createWaMeLink = (productos, total) => {
  let mensaje = `✨🐈‍⬛📦 Pedido de Meow Boutique 📦🐈‍⬛✨\nHola, quisiera realizar el siguiente pedido..! 😄\n`;

  productos.map(producto => {
    mensaje += ` *${producto.name}* 🛍️\n`;
    mensaje += `   - Cantidad: ${producto.quantity} \n`;
    mensaje += `   - Subtotal: $${producto.quantity * producto.price} MXN\n\n`;

  })  

  mensaje += `💵 💵 *Total:* $${total} MXN\n\n`;  

  const mensajeCodificado = encodeURIComponent(mensaje);
  return WA_ME_URL + mensajeCodificado + '&type=phone_number&app_absent=0';
};
