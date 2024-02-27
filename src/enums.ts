/**
 * Enums
 *
 * Un enum es un tipo de dato que nos permite crear un set de opciones. Estas opciones son almacenadas bajo una estructura llave-valor similar a un objeto.
 */

export enum ROLES {
  ADMIN = "admin",
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type TUser = {
  username: string;
  role: ROLES
}

const andresUser: TUser = {
  username: 'andresmoreno',
  role: ROLES.ADMIN
}
