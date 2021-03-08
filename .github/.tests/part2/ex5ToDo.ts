import { delay } from "https://deno.land/std@0.83.0/async/delay.ts";
import { NewAgent } from "../../../part2/agent.model.ts";
import { createAgent, getAgents, updateAgent } from '../../../part2/agent.service.ts';

const toAdd: NewAgent = {code: 321};

const madeId = await createAgent(toAdd);

let found = await getAgents(321);

if (found.length != 1 || found[0]._id.toString() != madeId.toString()) {
    console.log(`getAgents: didn't found saved agent`);
    Deno.exit();
}

let success = await updateAgent(madeId.toString(), {name: "John smith"});

if (!success) {
    console.log(`updateAgent: returned false`);
    Deno.exit();
}

found = await getAgents(321);

if (found.length != 1 || found[0]._id.toString() != madeId.toString()) {
    console.log(`getAgents: didn't found updated agent`);
    Deno.exit();
}

if (found[0].name != 'John smith')
    console.log(`updateAgent: didn't set name`);
else
    console.log('Save -> get -> update -> get: OK');