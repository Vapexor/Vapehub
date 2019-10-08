class Henkilo {
    constructor (etunimi, sukunimi, hetu) {
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.hetu = hetu;
    }

    get etunimi() {
        return this._etunimi;
    }
    set etunimi(newEtunimi) {
        this._etunimi = newEtunimi;
    }
    get sukunimi() {
        return this._sukunimi;
    }
    set sukunimi(newSukunimi) {
        this._sukunimi = newSukunimi;
    }
    get hetu() {
        return this._hetu;
    }
    set hetu(newHetu) {
        this._hetu = newHetu.match(/\d{6}[+-A]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]/);
    }

    tulosta() {
        console.log(this.newEtunimi + ' ' + this.newSukunimi + ' on henkilö, jonka henkilötunnus on ' + this.hetu);
    }
}

let jorma = new Henkilo('Jorma', 'Jokinen', '123456-123A');
jorma.tulosta();