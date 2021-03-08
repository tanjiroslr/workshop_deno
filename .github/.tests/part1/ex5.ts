import { mission } from "../../../part1/mission.ts";

export async function test() {
    let res: boolean;
    let success = true;

    console.log('------------------------');
    console.log('ex5 promise');
    
    console.log();
    console.log('Is mission a promise')
    await mission([]).then(res => console.log('OK')).catch(err => console.log('KO'));

    res = await mission([ { name: 'player', code: 42 } ]);
    console.log();
    console.log('Mission with normal agent');
    console.log('expected: ' + false);
    console.log('got: ', res)
    if (res == false)
        console.log('OK');
    else {
        console.log('KO');
        success = false;
    }

    res = await mission([
            { name: 'player', code: 42 },
            { code: 0.07 }
        ])
    console.log();
    console.log('Mission with the best agent');
    console.log('expected: ' + true);
    console.log('got: ', res)
    if (res == true)
        console.log('OK');
    else {
        console.log('KO');
        success = false;
    }

    try {
        console.log();
        console.log('Mission with incompetent agent');
        console.log('expected: Bad agent');
        res = await mission([
                { name: 'player', code: 42 },
                { name: 'mate', code: 21 }
            ]);
        console.log('got: ', res);
        console.log('KO');
        success = false;
    } catch (err) {
        console.log('got: ', err);
        if (err == 'Bad agent') {
            console.log('OK');
        } else {
            console.log('KO');
            success = false;
        }
    }

    Deno.exit(success ? 0 : 1);
}

await test();