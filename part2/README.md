# Part 2: Database
Welcome back developer. How did you like the evacuation drill from last time ?

Also, I called you to tell you that the big guys appreciate your production. So they went you to migrate our database.

To do this, they asked you to use this [deno_mongo](https://deno.land/x/mongo@v0.21.0) package, version 0.21.0.

Also I will be quite occupied, so I won't be able to say much more than the requirements. I advise you to go to the package page for more details.

## ex01 connection
file to turn in `database.ts`

First part of using database is to connect to it.
For this part, we ask you to export a `db` object of type `Database`.
Also, for this project, you need to connect to `mongodb://127.0.0.1:27017`. By the way, the guys asked you to use a db named `agent` and to use a collection named `agents`.

## ex02 object
file to turn in `agent.model.ts`

After making the conection, you can now create the document that we will save.

MongoDB is different from standart SQL based database. Where SQL is based on making list and adding new elements to these lists, MongoDB is based on making documents and quering them.
If you've seen JSON objects before, they look pretty similar.

You can find an exemple for schema [here](https://deno.land/x/mongo@v0.21.0) (look for the interface)

> For this exercice, you need to make an interface. It wasn't explained before. Compared to javascript, typescript is adding class and interfaces. It's a way to make new type, the difference being that class need a constructor and interfaces does not. If you want more detail: [class](https://www.typescriptlang.org/docs/handbook/classes.html) / [interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

You need to make 3 interfaces: `Agent`, `NewAgent` and `UpdateAgent`.

`Agent` is the interface representing an agent in database. It need to have a `_id` field (look at the [exemple](https://deno.land/x/mongo@v0.21.0)), `code` field, wich is a `number` and a `name` field wich is a `string` but can be undefined.

`NewAgent` is the interface representing a new agent that have yet to be given an id. It need to have `code` field wich is a `number` and a `name` field wich is a `string` but can be undefined.

`UpdateAgent` is the interface representing an update for an agent. It has the same field as `NewAgent` however every field can be undefined.

## ex03 creating object
file to turn in `agent.service.ts`

Good job developer.
Now that you have a model you can start with creating an agent.

For this part, you will need to make an async function named `createAgent` that take one `NewAgent` and return a `Document`.
In it, you need to insert the new agent in the database and return it's new id.

## ex04 getting object
file to turn in `agent.service.ts`

After creating an agent, you will need to fetch it.

So let's make a `getAgents` async function. It can take a `number` and it will return a `Agent[]`.
If a number is given, it will return each agents who have this number for `code`.
Else, it will return all agents.

## ex05 updating object
file to turn in `agent.service.ts`

Now let's make a function to update our agents.

Let's call this async function `updateAgent`. It will take a `string` and a `UpdateAgent` and return a `boolean`.
The `string` is the agent's `_id`, `updateAgent` is the field to update.
It will return `true` if something was modified else, it will return `false`.

> Also you will surely need to instantiate a new `ObjectId` from the agent's id
```
import { ObjectId } from "https://deno.land/x/mongo@v0.21.2/bson/mod.ts";
import {db} from './dataBase.ts';

const sheeps = db.collection<Sheep>('sheeps);
const stringId = "602aa2bddf8fe3c47519c1b1";
const id = new ObjectId(stringId);

const sheep = await sheeps.find({_id: id}).toArray();
```

## ex06 deleting object
file to turn in `agent.service.ts`

Finaly let's make it so we can remove agents who have retired.

Name this async funtion `deleteAgent`. It will take a `string` and return a `boolean`.
The `string` is the agent's `_id`.
It will return `true` if something was deleted. Else, it will return `false`.