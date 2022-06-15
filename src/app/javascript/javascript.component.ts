import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss'],
})
export class JavascriptComponent {
  //tipos de datos
  indefinido: undefined;
  boleano: boolean = true;
  numero: number = 10;
  texto: string = 'Texto';
  //bigInt: bigint = 9007199254740992n ;// No funciona porque el target de javascript en el proyecto es menor al estandar ES2020
  symbol: symbol = Symbol('unique-key');
  nulo: null = null;
  objecto: object = { obj: 'obj' };

  funcion = function name() {
    return true;
  };

  constructor() {
    console.log(typeof this.indefinido);
    console.log(typeof this.boleano);
    console.log(typeof this.numero);
    console.log(typeof this.texto);
    console.log(typeof this.symbol);
    console.log(typeof this.nulo);
    console.log(typeof this.objecto);
    console.log(typeof this.funcion);
    //this.diferenciaEntreVarYLet();
    //this.destructuringArrays();
    //this.destructuringObjects();
    //this.spreadoperator();
    this.operators();
  }

  variables() {
    let variable1 = 1;
    const variable2 = 2;
    var variable3 = 3;

    // Let deja reasignar el valor
    variable1 = 900;

    // Const no permite reasignar el valor
    //variable2 = 0;

    //VAr también deja reasignar el valor

    variable3 = 9;
    this.diferenciaEntreVarYLet();
  }

  diferenciaEntreVarYLet() {
    //Let tiene un alcance de bloque, el var tiene un enfoque mas global
    let i = 1;
    if (i === 0) {
      let i = 2; //este i es diferente al de la linea 53
    } else {
      let i = 3; //este i es diferente al de la linea 55 y 57
    }

    console.log(i); // Va a imprimir 1

    //var tiene enfoque mas global
    var t = 1;
    if (t === 1) {
      var t = 2;
    } else {
      var t = 3;
    }

    console.log(t); //Va a imprimir 2

    // console.log(bar); // undefined
    // console.log(foo); // ReferenceError: foo no está definido
    var bar = 1;
    let foo = 2;
  }

  stringYTemplateLiteral() {
    const n = 9;
    let str = 'String normalito';
    let templateLiteral = `Este número será un string ahora: ${n}`;
  }

  /* 
  function f1(a: number, b:number) {
    let y = 1;
    return a+b;
  } 
  y ya no tiene valor fuera de la funcion
  */

  /* El problema con las funciones y el this
  
  function Person() {
  this.age = 0;

  setTimeout(function growUp() {
    this.age++;
  }, 1000);
}

  var p = new Person();
  
  */

  /* Con la funcion flecha
  
  function Person() {
  this.age = 0;

  setTimeout(() => {
    this.age++; 
  }, 1000);
}

var p = new Person();
  
  */

  destructuringArrays() {
    const arr = [1, 2, 3, 4, 5];
    const [first, second, ...last] = arr;
    console.log('Primer valor del arreglo', first);
    console.log('Segundo valor del arreglo', second);
    console.log('El resto del arreglo', last);
  }

  destructuringObjects() {
    const obj = {
      name: 'Jess',
      lastName: 'Casas',
      programmingLanguage: 'Angular',
    };
    const { name, lastName, programmingLanguage: languages } = { ...obj };

    console.log('Name', name);
    console.log('Lastname', lastName);
    console.log('languages', languages);
  }

  spreadoperator() {
    const array = [1, 2, 3, 4, 5];
    const array2 = [99, 98, 97];
    const nuevoArray = [...array, ...array2];
    array2.pop();
    array.splice(1, 2);
    console.log({ array });
    console.log({ array2 });
    console.log({ nuevoArray });

    const obj = {
      name: 'Pedro',
      lastname: 'Perez',
      age: 9,
      music: 'Pop',
    };

    const obj2 = {
      name: 'Juana',
      lastname: 'Jimenez',
    };

    const obj3 = { ...obj, ...obj2 };
    obj.age = 15;
    console.log({ obj });
    console.log({ obj2 });
    console.log({ obj3 });
  }

  operators() {
    //Opertor ||
    console.log('||');
    const y = this.indefinido || this.numero;
    console.log({ y });
    const x = this.texto || this.numero;
    console.log({ x });
    //Valor falsy
    const m = 0 || this.texto;
    console.log({ m });
    console.log('&&');
    // operator &&
    const q = this.indefinido && this.numero;
    console.log({ q });
    const r = this.texto && this.numero;
    console.log({ r });
    //Valor falsy
    const n = 0 && this.texto;
    console.log({ n });

    //Uno lo puede usar para ejecutar funciones
    true && this.f();

    //Nulish Operator
    const g = 0 ?? 1;
    const p = undefined ?? 9;
    const j = null ?? 15;

    console.log({ g, p, j });
  }

  f() {
    console.log('mirame');
  }
}

/* Closures */
function a() {
  let y = 9;
  function b() {
    let u = 10;
    console.log(y + u);
  }
}

const fa = a();
const fb = a();

console.log(fa);
console.log(fb);
//https://developer.mozilla.org/es/docs/Web/JavaScript/Closures
