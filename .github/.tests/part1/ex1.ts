
async function test(text: string) {
    const max = (text.indexOf('\n') == -1) ? text.length : (text.indexOf('\n'));
    const line = text.slice(0, max);
    const expected = 'Hello World';

    console.log(`expected: '${expected}'`);
    console.log(`got: '${line}'`)
    if (line == expected) {
        console.log('OK');
        Deno.exit(0);
    } else {
        console.log('KO');
        Deno.exit(1);
    }
}

export async function main() {
    console.log('------------------------');
    console.log('ex1 hello world');
    console.log();
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