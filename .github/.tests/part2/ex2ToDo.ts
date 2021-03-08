import { Agent, NewAgent, UpdateAgent } from '../../../part2/agent.model.ts';

const agent: Agent = {_id: {$oid: 'test'}, code: 132415};
const newAgent: NewAgent = {code: 876};
const update: UpdateAgent = {};

console.log(`agent._id.$oid: ${agent._id.$oid} type: ${typeof agent._id.$oid}`);
console.log(`agent.code: ${agent.code} type: ${typeof agent.code}`);
console.log(`agent.name: ${agent.name} type: ${typeof agent.name}`);
agent.name = 'smith';
console.log(`agent.name: ${agent.name} type: ${typeof agent.name}`);

console.log(`newAgent.code: ${newAgent.code} type: ${typeof newAgent.code}`);
console.log(`newAgent.name: ${newAgent.name} type: ${typeof newAgent.name}`);
newAgent.name = 'john';
console.log(`newAgent.name: ${newAgent.name} type: ${typeof newAgent.name}`);

console.log(`updateAgent.code: ${update.code} type: ${typeof update.code}`);
console.log(`updateAgent.name: ${update.name} type: ${typeof update.name}`);
update.code = 0.07;
update.name = 'John smith';
console.log(`updateAgent.code: ${update.code} type: ${typeof update.code}`);
console.log(`updateAgent.name: ${update.name} type: ${typeof update.name}`);