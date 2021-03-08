
async function test(text: string) {
    let success = true;
    const expected = [
        '^[[31mAlert !!!^[[31m$'
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
    console.log('ex8 external modules');

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