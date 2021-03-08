
async function test(text: string) {
    let success = true;
    const expected = [
        'operationCode: 42 type: number',
        'operationAllowed: true type: boolean',
        'operationName: KSW type: string',
        'agents.length: 3',
        'agents[0].name: Kreog type: string',
        'agents[0].code: 42 type: number',
        'agents[1].name: Mate type: string',
        'agents[1].code: 21 type: number',
        'agents[2].name: undefined type: undefined',
        'agents[2].code: 0.07 type: number'
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
    console.log('ex2 variables');

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