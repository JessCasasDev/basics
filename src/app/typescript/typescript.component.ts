import { Component } from '@angular/core';
import { Color, Person, Rol } from './models.interface';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss'],
})
export class TypescriptComponent {
  edad: number;
  person: Person;
  array: Array<Person> = [];

  constructor() {
    //this.edad = 'algo';
    this.edad = 9;

    this.person = {
      address: {
        address: 'Avenida Siempre Viva',
        city: 'Springfield',
        country: 'EEUU',
        zipCode: 99223,
      },
      age: 10,
      name: 'Bart',
    };

    // this.array.push(this.edad);
    this.array.push(this.person);

    this.multiplesGenericos(this.person, 'name');
    //this.multiplesGenericos(this.person, 'lastname');

    //Casting
    this.casting();
  }

  displayString(value: string): string {
    return `${value} typeOf: ${typeof value}`;
  }

  displayBoolean(value: boolean) {
    return `${value} typeOf: ${typeof value}`;
  }

  //Con Generico
  display<T>(value: T) {
    return `${value} typeOf: ${typeof value}`;
  }

  metodoGenericoDeArreglos<T>(value: T[]) {
    return `${value.length}`;
  }

  /**
   * Siginifica que va a aceptar un tipo como primer parametro,
   * pero el segundo debe ser si o si una llave del primer parametro
   **/
  multiplesGenericos<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  casting(): void {
    //Tipo de este elemento es Element | null
    let input = document.getElementsByClassName('.in');
    //Por ello input.value no existe, porque Element es un tipo de dato muy general y no tiene value como clave
    //input.value
    (input[0] as HTMLInputElement)?.value;

    let numero: number = 9;
    let str = String(numero);
    console.log(typeof str);
  }

  llamarColor(color: Color) {
    return color;
  }

  validarUsuario(rol: Rol) {
    if (rol === Rol.Administrador || Rol.Desarrollador) {
      return true;
    }
    return false;
  }
}
