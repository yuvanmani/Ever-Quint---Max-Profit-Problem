let n = 13;

//------ calculating the profit for each property & no.of properties developed ------//

function profit(n) {
    let theatreTime = 5;
    let pubTime = 4;
    let comParkTime = 10;

    let theatreIncome = 1500;
    let pubIncome = 1000;
    let comParkIncome = 2000;

    let theatre = 0;
    let pub = 0;
    let comPark = 0;

    //--------- calculate the no.of theatres developed & earnings from theatre ---------//

    let theatreBalTime = n - theatreTime;
    let T = theatre + 1;
    let theatreEarnings = theatreBalTime * theatreIncome;

    while (theatreBalTime >= theatreTime) {
        theatreBalTime = theatreBalTime - theatreTime;
        T = T + 1;
        theatreEarnings = theatreEarnings + (theatreBalTime * theatreIncome);
    }

    //--------- calculate the no.of pubs developed & earnings from pubs ---------//

    let pubBalTime = n - pubTime;
    let P = pub + 1;
    let pubEarnings = pubBalTime * pubIncome;

    while (pubBalTime >= pubTime) {
        pubBalTime = pubBalTime - pubTime;
        P = P + 1;
        pubEarnings = pubEarnings + (pubBalTime * pubIncome)
    }

    //--------- calculate the no.of commercial parks developed & earnings from commercial park ---------//

    let comParkBalTime = n - comParkTime;
    let C = comPark + 1;
    let comParkEarnings = comParkBalTime * comParkIncome;

    while (comParkBalTime >= comParkTime) {
        comParkBalTime = comParkBalTime - comParkTime;
        C = C + 1;
        comParkEarnings = comParkEarnings + (comParkBalTime * comParkIncome)
    }

    let theatreProfit = { theatreEarnings, T };
    let pubProfit = { pubEarnings, P };
    let comParkProfit = { comParkEarnings, C };

    return { theatreProfit, pubProfit, comParkProfit };
}

// store the values(profit and no.of properties for each) in variable.
let earnings = profit(n);

//-------- Calculate the max profit & print the no.of properties developed for each property -------//

let keyValues = [
    { key: "T", value: earnings.theatreProfit.theatreEarnings, originalKeyValue: earnings.theatreProfit.T },
    { key: "P", value: earnings.pubProfit.pubEarnings, originalKeyValue: earnings.pubProfit.P },
    { key: "C", value: earnings.comParkProfit.comParkEarnings, originalKeyValue: earnings.comParkProfit.C }
]

let maxEarning = Math.max(...keyValues.map(Obj => Obj.value));

console.log(`Earnings : $${maxEarning}`);
console.log("Solutions");

// separate the properties which matches the max profit
let maxEarningKeys = keyValues.filter(Obj => Obj.value === maxEarning);

// separate the key value pairs from the properties which matches the max profit
let possibleSolutions = maxEarningKeys.reduce((acc, Obj) => {
    acc[Obj.key] = Obj.originalKeyValue;
    return acc;
}, {});

//------------ Print the possible solutions ------------//

let valueT = possibleSolutions.T;
let valueP = possibleSolutions.P;
let valueC = possibleSolutions.C;

function findSolutions(T = 0, P = 0, C = 0) {
    if (T > 0 && P > 0 && C > 0) {
        console.log(`1.T:${T} P:0 C:0`);
        console.log(`2.T:0 P:${P} C:0`);
        console.log(`3.T:0 P:0 C:${C}`);
    } else if (T > 0 && P > 0) {
        console.log(`1.T:${T} P:0 C:0`);
        console.log(`2.T:0 P:${P} C:0`);
    } else if (P > 0 && C > 0) {
        console.log(`1.T:0 P:${P} C:0`);
        console.log(`2.T:0 P:0 C:${C}`);
    } else if (T > 0 && C > 0) {
        console.log(`1.T:${T} P:0 C:0`);
        console.log(`2.T:0 P:0 C:${C}`);
    } else if (T > 0) {
        console.log(`1.T:${T} P:0 C:0`);
    } else if (P > 0) {
        console.log(`1.T:0 P:${P} C:0`);
    } else if (C > 0) {
        console.log(`1.T:0 P:0 C:${C}`);
    }
}

findSolutions(valueT, valueP, valueC);
