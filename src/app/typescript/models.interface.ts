export interface Address {
  city: string;
  country: string;
  address: string;
  zipCode: number;
}
export interface Person {
  name: string;
  age: number;
  address: Address;
  languages?: string[]; //Propiedad opcional
}

export enum Color {
  Rojo,
  Verde,
  Azul,
  Gris,
}

function llamarColor(color: Color) {
  return color;
}
llamarColor(Color.Azul);

export enum Rol {
  Desarrollador,
  Administrador,
  Usuario,
  Invitado,
}

function validarUsuario(rol: Rol) {
  console.log(Rol[0]);
  if (rol === Rol.Administrador || Rol.Desarrollador) {
    return true;
  }
  return false;
}

validarUsuario(Rol.Desarrollador);
