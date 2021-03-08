import { createAgent } from '../../../part2/agent.service.ts';
import { Agent, NewAgent } from '../../../part2/agent.model.ts';
import { db } from "../../../part2/dataBase.ts";

const toAdd: NewAgent = {code: 123};

const agentId = await createAgent(toAdd);

const found = await db.collection<Agent>('agents').findOne({_id: agentId})

if (found == undefined)
    console.log('createAgent: id returned not found in database');
else if (found.code != 123)
    console.log(`createAgent: saved agent don't have the same values`);
else
    console.log('createAgent: OK');