import { NewAgent } from "../../../part2/agent.model.ts";
import { createAgent, getAgents } from '../../../part2/agent.service.ts';

const toAdd1: NewAgent = {code: 456};
const toAdd2: NewAgent = {code: 789};

const agentId1 = await createAgent(toAdd1);
const agentId2 = await createAgent(toAdd2);

const foundOne = await getAgents(456);
const foundAll = await getAgents();

if (foundOne.length < 1)
    console.log('getAgents by code: found nothing');
else if (foundOne.length > 1)
    console.log('getAgents by code: found more than one');
else if (foundOne[0]._id.toString() != agentId1.toString())
    console.log('getAgents by code: found different agent');
else
    console.log('getAgents by code: OK');

let present1: boolean = false;
let present2: boolean = false;
for (let agent of foundAll) {
    if (agent._id.toString() == agentId1.toString())
        present1 = true;
    if (agent._id.toString() == agentId2.toString())
        present2 = true;
}

if (foundAll.length < 2)
    console.log(`getAgents all: didn't found enougth agents`);
else if (present1 != true || present2 != true)
    console.log(`getAgents all: didn't return created agent`);
else
    console.log('getAgents all: OK');
