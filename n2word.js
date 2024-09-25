const enice = ["", "ena", "dve", "tri", "štiri", "pet", "šest", "sedem", "osem", "devet"];
const desetine = ["", "deset", "dvajset", "trideset", "štirideset", "petdeset", "šestdeset", "sedemdeset", "osemdeset", "devetdeset"];
const teen = ["deset", "enajst", "dvanajst", "trinajst", "štirinajst", "petnajst", "šestnajst", "sedemnajst", "osemnajst", "devetnajst"];
const stotine = ["", "sto", "dvesto", "tristo", "štiristo", "petsto", "šesto", "sedemsto", "osemsto", "devetsto"];

function pretvoriVBesede(stevilo) {
    if (stevilo === 0) return "nič";
    if (stevilo < 0) return "minus " + pretvoriVBesede(-stevilo);

    let besede = "";
    let milijoni = Math.floor(stevilo / 1000000);
    let tisoce = Math.floor((stevilo % 1000000) / 1000);
    let enot = stevilo % 1000;

    if (milijoni > 0) {
        throw Error
    }
    if (tisoce > 0) {
        besede += pretvoriTrojko(tisoce) + " tisoč ";
    }
    if (enot > 0 || stevilo === 0) {
        besede += pretvoriTrojko(enot);
    }

    return besede.trim();
}

function pretvoriTrojko(stevilo) {
    let result = "";
    let sto = Math.floor(stevilo / 100);
    let deset = Math.floor((stevilo % 100) / 10);
    let ena = stevilo % 10;

    if (sto > 0) {
        result += stotine[sto] + " ";
    }

    if (deset === 1) {
        result += teen[ena] + " ";
    } else {
        if (deset > 0) {
            if (ena > 0) {
                result += enice[ena] + "in" + desetine[deset] + " ";
            } else {
                result += desetine[deset] + " ";
            }
        } else if (ena > 0) {
            result += enice[ena] + " ";
        }
    }

    return result.trim();
}

// Primeri uporabe:
console.log(pretvoriVBesede(13));        // trinajst
console.log(pretvoriVBesede(56));        // šestinpetdeset
console.log(pretvoriVBesede(300));       // tristo
console.log(pretvoriVBesede(106));       // sto šest
console.log(pretvoriVBesede(207));       // dvesto sedem
console.log(pretvoriVBesede(3000));      // tri tisoč
console.log(pretvoriVBesede(5679));      // pet tisoč šesto devetinsedemdeset
console.log(pretvoriVBesede(214355));     // deset tisoč
