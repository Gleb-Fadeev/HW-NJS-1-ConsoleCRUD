const readline = require('readline');

let filmArr = ['Quick', 'Paradise Hills', 'Dr. Sleep', 'Alladin', 'Inside'];

console.log('Hello, thats my CLI with CRUD function');

startApp();

async function startApp(){

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let answer;

    console.log('Enter C or R or U or D');
    answer = await getInput(rl);

    switch(answer){

        case 'C': 
            console.log('Enter Title film');
            answer = await getInput(rl);
            filmArr.push(answer);
            console.log('Film Updated');
            filmArr.forEach(element => {
                console.log(element);
            });
            break;

        case 'R':   
            filmArr.forEach(element => {
                console.log(element);
            });
            break

        case 'U':
            console.log('Enter number film');
            answer = await getInput(rl);

            console.log( answer);
            
            for(let i = 0; i < filmArr.length; i++){
                let count = i+1;
                if(answer == count){
                    console.log('Enter new Film');
                    answer = await getInput(rl);
                    filmArr[i] = answer;
                }
            }
            console.log('Film Updated');
            filmArr.forEach(element => {
                console.log(element);
            })
            break;

        case 'D':
            console.log('Enter number for Delete');
            answer = await getInput(rl);
            for(let i = 0; i < filmArr.length; i++){
                let count = i + 1;
                if(answer == count){
                    filmArr.splice(i, 1);
                }
            }
            console.log('Film Updated');
            filmArr.forEach(element => {
                console.log(element);
            })
            break;

        }

        console.log('Do you want continue? Y/N');
        answer = await getInput(rl);
        if(answer == 'N'){
            rl.close();
        } else {
            rl.close();
            startApp();
        }
}

function getInput(rl) {
    return new Promise(resolve => {
        rl.question("> ", answer => {
            resolve(answer);
        });
    });
}