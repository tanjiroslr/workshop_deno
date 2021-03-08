export function sayHello(name?: string): void {
  if (!name) {
    console.log("Hello " + name);
  } else {
    console.log("Hello world");
  }
}

export const magic: number = 42;
