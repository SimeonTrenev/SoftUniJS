function solve(input){

    let visochinaNaKushtata = Number(input.shift());
    let duljinaNaStranichnataStena = Number(input.shift());
    let visochinaNaTriugulnataStena = Number(input.shift());

    let stranichniSteni = (visochinaNaKushtata * duljinaNaStranichnataStena) * 2;
    let predniSteni = (visochinaNaKushtata * visochinaNaKushtata) * 2;
    let pokriv1 = (visochinaNaKushtata * duljinaNaStranichnataStena) * 2;
    let pokriv2 = 2 * (visochinaNaKushtata * visochinaNaTriugulnataStena) / 2;
    let pokriv = pokriv1 + pokriv2;

    let vrata = 1.2 * 2;
    let prozorec = 1.5 * 1.5;

    let steniKvadrati = stranichniSteni - (prozorec * 2) + predniSteni - vrata;
    
    let zelenaBoq = 3.4 / 1;
    let chervenaBoq = 4.3 /1;

    let boqZaSteni = steniKvadrati / zelenaBoq;
    let boqZaPokriv = pokriv / chervenaBoq;

    console.log(boqZaSteni.toFixed(2));
    console.log(boqZaPokriv.toFixed(2));
    







}

solve(["6", "10", "5.2"])