import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {
    this.tipos();
    //this.diferenciaEntreVarYLet();
    //this.destructuringArrays();
    //this.destructuringObjects();
    //this.spreadoperator();
    //this.operators();
    // this.promises();
    //this.promiseWithAsync();
    //this.promiseWithAsyncReject();
    //this.tryCatch();
    //this.promesasEnParalelo();
    //this.promesaRace();
  }

  tipos() {
    console.log(typeof this.indefinido);
    console.log(typeof this.boleano);
    console.log(typeof this.numero);
    console.log(typeof this.texto);
    console.log(typeof this.symbol);
    const obj1 = { '1': 1 };
    const obj2 = { 1: 1 };
    console.log(obj1[1], obj2['1']);
    //Con Symbol
    const s1 = Symbol('id');
    const s2 = Symbol('id');
    const obj3 = { s1: 1 };
    const obj4 = { s2: 1 };
    /*    console.log(obj3.s2);
    console.log(obj4.s1); */
    console.log(obj3.s1);
    console.log(obj4.s2);
    console.log(typeof this.nulo);
    console.log(typeof this.objecto);
    console.log(typeof this.funcion);
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

  promises() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('promised :)');
      }, 300);
    });
    console.log('Before');
    promise.then(console.log);
    console.log('After');
  }

  async promiseWithAsync() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('promised :)');
      }, 300);
    });

    console.log('Before');
    //await promise.then(console.log);
    //o uno puede crear una variable con el resultado
    const resultado = await promise;
    console.log(resultado);
    console.log('After');
  }

  async promiseWithAsyncReject() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Error :(');
      }, 300);
    });

    //await promise.then(console.log);

    try {
      await promise.then(console.log);
    } catch (error) {
      console.log('Estoy deteniendo el error!', error);
    }
  }

  tryCatch() {
    try {
      throw 'Error :O';
    } catch (error) {
      console.log('Siempre detengo los errores', error);
    }
  }

  promesa(timeout: number) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Yes!, solved in ${timeout}`), timeout);
    });
  }

  promesasEnParalelo() {
    const promise1 = this.promesa(100);
    const promise2 = this.promesa(400);
    const promise3 = this.promesa(200);

    promise1.then(console.log);
    promise2.then(console.log);
    promise3.then(console.log);

    //Todas van a correr al mismo tiempo
    const result = Promise.all([
      this.promesa(100),
      this.promesa(300),
      this.promesa(200),
    ]);

    result.then(console.log);
  }

  promesaRace() {
    //Se cumple cuando al menos una de la lista se cumpla
    const promise1 = this.promesa(1000);
    const promise2 = this.promesa(400);
    const promise3 = this.promesa(200);
    const promiseError = new Promise((resolve, reject) =>
      reject('Nop, not in my watch')
    );

    const result = Promise.race([promise1, promise2, promise3]);
    //Aca solo retorna el primer valor que termina
    result.then(console.log);

    //  Si es con error, falla al si alguna falla
    /* const resultWithError = Promise.race([promise1, promise2, promise3, promiseError])
    resultWithError.then(console.log) */
  }

  promesaAllSettled() {
    //Se retorna el resultado de todas las promesas, así hayan fallado
    const promise1 = this.promesa(1000);
    const promise2 = this.promesa(400);
    const promise3 = this.promesa(200);
    const promiseError = new Promise((resolve, reject) =>
      reject('Nop, not in my watch')
    );

    // const result = Promise.allSettled([promise1, promise2, promise3])
    //Aca solo retorna el primer valor que termina
    //result.then(console.log)
    //Ejemplo
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
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
