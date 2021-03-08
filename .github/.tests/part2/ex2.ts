async function test(text: string) {
    let success = true;
    const expected = [
        'agent._id.$oid: test type: string',
        'agent.code: 132415 type: number',
        'agent.name: undefined type: undefined',
        'agent.name: smith type: string',
        'newAgent.code: 876 type: number',
        'newAgent.name: undefined type: undefined',
        'newAgent.name: john type: string',
        'updateAgent.code: undefined type: undefined',
        'updateAgent.name: undefined type: undefined',
        'updateAgent.code: 0.07 type: number',
        'updateAgent.name: John smith type: string'
    ]

    for (const expect of expected) {
        const max = (text.indexOf('\n') == -1) ? text.length : (text.indexOf('\n'));
        const line = text.slice(0, max);
        text = text.slice(max + 1);

        console.log();
        console.log(`expected: '${expect}'`);
        console.log(`got: '${line}'`);

        if (line == expect) {
            console.log('OK');
        } else {
            console.log('KO')
            success = false;
        }
    }
    Deno.exit(success ? 0 : 1);
}

export async function main() {
    console.log('------------------------');
    console.log('ex2 object');

    const filePath = Deno.args[0];
    try {
        const text = await Deno.readTextFile(filePath);
        await test(text);
    } catch (err) {
        if (err.message == 'missing field `path`' ||
                err.message == 'No such file or directory (os error 2)' ||
                err.message == 'Is a directory (os error 21)   ')
            console.log('File not found');
        else
            console.error(err);
    }
}

await main();