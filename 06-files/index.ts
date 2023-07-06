import {appendFile, readFile, writeFile} from "fs/promises";

//https://nodejs.org/dist/latest-v10.x/docs/api/fs.html

function readFileSince2012(): void {
    // readFile retourne une Promise
    // Une Promise est un traitement plus ou moins long en tache de fond
    // Il va falloir s'enregistrer en écouteur pour faire un traitement
    // lorsque la tache est terminée.
    console.log("1");
    const p = readFile("esgi.txt");
    console.log("2");
    p.then(function(buf) { // .then permet d'enregistrer un traitement
                                        // lorsque la Promise est finie
        const str = buf.toString('utf-8');
        console.log(str);
        console.log("3");
    }).catch(function(err) { // .catch permet de gerer les erreurs en cas
                                   // de soucis avec la lecture du fichier
       console.error("Il y a une erreur" + err);
        console.log("4");
    });
    console.log("5");
}

// async/await
// Depuis 2017 il est possible d'utiliser le mot clé async sur une fonction
// Cela permet de rendre la fonction automatiquement asynchrone ET permet l'usage
// du mot clé await dans la fonction pour attendre les resolutions des Promises.
async function readFileSince2017(): Promise<void> {
    try {
        const buf = await readFile("esgi.txt");
        const str = buf.toString('utf-8');
        console.log(str);
    } catch(err) {
        console.error("Il y a une erreur" + err);
    }
}

async function write2017(): Promise<void> {
    const helloList: string[] = [
        "bonjour",
        "hello",
        "gutten tag",
        "buenos dias",
        "yassas"
    ];
    const randIndex = Math.floor(Math.random() * helloList.length);
    await appendFile("hello.txt", `${helloList[randIndex]}\n`);
    /*
    for (let i = 0; i < helloList.length; i++) {
        const hello = helloList[i];
        //await writeFile("hello.txt", hello); // ecrase le fichier a chaque fois
        await appendFile("hello.txt", hello);
    }
    */
}

//readFileSince2012(); // on lance la fonction
//readFileSince2017(); // fonction async/await
write2017();