import { NewAgent } from "../../../part2/agent.model.ts";
import { createAgent, getAgents, deleteAgent } from "../../../part2/agent.service.ts";

const toAdd: NewAgent = {code: 654};

const createdId = await createAgent(toAdd);

let found = await getAgents(654);

if (found.length != 1 || found[0]._id.toString() != createdId.toString()) {
    console.log(`getAgents: didn't found saved agent`);
    Deno.exit();
}

const success = await deleteAgent(createdId.toString());

if (!success) {
    console.log(`deleteAgent: returned false`);
    Deno.exit();
}

found = await getAgents(654);

if (found.length != 0)
    console.log(`getAgents: returned something that should have been deleted`);
else
    console.log(`Create -> get -> delete -> get: OK`);