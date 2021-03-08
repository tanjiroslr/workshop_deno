# Part 1: Basis
Hello developer, you've been called today to create a new program to manage our covert agents.

In it you will need to learn and use the basis of Deno

## ex01 hello world
file to turn in `helloWorld.ts`

First developer, we will start easy as we need to camouflage this program. And what is a better cover than a HelloWorld ?
So we need you to print `Hello World` in the terminal.

To start of Deno use file with `.ts` as an extension, so let's create a new `helloWorld.ts` file

Now, we need to show the message. For this we will need the [console](https://developer.mozilla.org/en-US/docs/Web/API/Console) object. More specificaly, we will use it's methode [log](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)

## ex02 variables
file to turn in `missionData.ts`

Good Job.
Now that our program is hiding in the crowd we can start adding data about our operation.

First we will need an `operationCode` of `42` (that's our secret code, don't talk about it to the anyone)
Then we will need an `operationAllowed` to `true`
After that, we need the `operationName` to be `KSW`
And finaly, we need a list of `agents`. Here the list:
  * The famous agent with the `name` `Kreog` and `code` `42`.
  * A newbie with the `name` `Mate` and `code` `21`.
  * An agent without `name` but with the `code` `0.07`

Now here an exemple of how you can do it in Deno:
```
const variable: number = 42;
```
  * `const` is a keyword that indicate a new variable, it can also be `let` the difference being in the possibility to change the variable. a variable declared with the keyword `const` cannot be reassigned.
  * `varialbe` is the name of the variable.
  * `: number` is the type of the variable. If a `?` is added before the `:` then the variable can be `undefined` (ex: `?: number` is either a number or undefined)
  * `= 42` is the value of the variable. As the variable is const, we need to directly assign the value.

A variable can have a lot of different types, here some:
  * `number` can be with a decimal or not
  * `string` can store text
  * `boolean` can store a `true` or `false`
  * A [class](https://www.typescriptlang.org/docs/handbook/classes.html) or [interface](https://www.typescriptlang.org/docs/handbook/interfaces.html) (Not mandatory for this workshop)
  * A List by adding `[]` after the type (ex: `boolean[]` for a list of boolean)
  * An object, defined with `{}` with the object fields inside (ex: `{ label: string, num: number }`)

A variable without type is either automaticaly given a type if declared with a value (ex: `const num = 9` is of type `number`) or of type `any` which mean it can be anythings. By the way developer, if you use `any`, you can go next door do some NodeJs.

A variable declared with let and without value is by default `undefined` and need to be checked before being used

> Ps, to assign a list of number, you can do `= [9, 10, 5]`

## ex03 functions
file to turn in `sayHello.ts`

Hello developer, Good Job on the mission data.
However, some of our guys said that the program wasn't camouflaged at all and asked for a function called `sayHello` that **can** take one parameter, a name.

If none is given, it should print `Hello world`.
Else, if a name is give, it should print `Hello ` + name (ex: `Hello Kreog`).

In Deno a function can look like this:
```
function add(a: number, b: number): number  {
    return (a + b);
}
```
  * `function` is the keyword for declaring a function
  * `add` is the function name
  * Between the parenthesis are the parameters
  * `: number` is the return type of the function. A function that don't return anything should be of type `void`
  * Between the curly bracket is the body of the function

## ex04 exports
file to turn in `sayHello.ts`

Good Job developer.
However we forgot to give access to the created function. They also asked to be given access to a number called `magic` with `42` for value

To do that, we need to `export` the function.
You can export multiple things with this keywords and not only function:
```
export function hello() {
    console.log('Hello');
}
export const name: string = "Joe";
```
To use this function in another file, you can then do:
```
import { hello } from './sayHello.ts';
```
With `hello` being the name of what you want to get and `'./sayHello.ts'` being the path to the file

> **From now on everythings asked will need to be exported**

## ex05 promises
file to turn in `mission.ts`

Now then developer, we will now ask you to make a simulation of the mission. However as it's a simulation, we need it to be [asynchrone](https://en.wikipedia.org/wiki/Asynchrony_(computer_programming)) so we can run a bunch of them.
Your function will be called `mission` and will need to take a list of agents (cf ex01) and return a `Promise` of a `boolean`.
If you find in this list an agent who has a `code` other than `42` or `0.01` then `reject` the mission with `'Bad agent'` as these agents are not authorized to go.
Also, if in this list you have an agent with the code `0.07` then you can `resolve` the mission with a `true` else, `resolve` it with a `false`

Here is an exemple of how `Promise` is working in Deno
```
function checkStr(str: string): Promise<number> {
  return new Promise((resolve, reject) => {
    if (str != 'ok')
      return reject('Bad str');
    return resolve(42);
  });
}
```
  * `Promise<number>` indicates that the function return a Promise of type number
  * `(resolve, reject) => {}` is an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
  * `resolve` is a function in a variable, when called it will resolve the promise
  * `reject` is a function in a variable, when called it will throw an exception

## ex06 asyncs
file to turn in `missionManager.ts`

Well done developer, now we need a way to test the simulation you made.
I want you to make a function called `missionTester` that will take a list of agents (cf ex01).
You will then call your `mission` function (use import). If `mission` return true then display `Mission report: success` else display `Mission report: failure`

To make this function, you will need to wait for the promise of `mission` to end. You can do that by using the `await` keyword however, to use `await` you will also need to use `async`
```
async function makeLaundry(laundry: string[]) {
    const result = await washingMachine(laundry);

    if (result == 'clean')
        console.log(`Yay, it's clean`)
    else
        console.error(`The washing machine is brobably broken`);
}
```
  * `async` keyword that make the function Asynchrone. It also transform the return into a Promise.
  * `await` make the function wait for the end of the promise. 

## ex07 exceptions
file to turn in `missionManager.ts`

Hello developer. we got some complaint from our engineers that when sending invalid agent to your `missionTester` their program exited with a `Bad agent` message.
So they asked us to catch all potentials errors and display `Mission report: ` + error.
Let's take this oportunity to replace our `Mission report: failure` log into an `failure` error.

Here is an exemple of how to throw and catch error in Deno
```
function isOk(ok: boolean): boolean {
    try {
        if (ok)
            return true;
        else
            throw('Not ok');
    } catch (err) {
        if (err == 'Not ok')
            return false;
    }
}
```
  * `throw` is a keyword that throw an exception. The exception can be anything, text, number or object.
  * `try {} catch (err) {}` Any exception raised in a try block will be catched and send into err.

> When an exception is throwed, the program execution will be stoped without starting the next instruction and will directly go to a catch block or exit the program.

## ex08 external modules
file to turn in `alert.ts`

Action stations to the ready!
Hey developer, we are attacked, we need you to sound the alarm. Print `Alert !!!` in red.

You don't have time to develope it yourself, you can use a module someone made. [Here](https://deno.land/x) you can find a lot of third party modules for deno.
You should use this one [ink](https://deno.land/x/ink@1.3)