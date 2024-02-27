/**
 * Enums
 *
 * Un enum es un tipo de dato que nos permite crear un set de opciones. Estas opciones son almacenadas bajo una estructura llave-valor similar a un objeto.
 */

enum ROLES {
  ADMIN = "admin",
  SELLET = 'seller',
  CUSTOMER = 'customer'
}

type TUser = {
  username: string;
  role: ROLES
}

const andresUser: TUser = {
  username: 'andresmoreno',
  role: ROLES.ADMIN
}
