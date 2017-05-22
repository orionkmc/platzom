const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){
    it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function(){
        const translation = platzom("Programar");
        expect(translation).to.equal("Program");
    });

    it('Si la palabra termina con Z, se añade "pe" al final', function(){
        const translation = platzom("Zorro");
        const translation2 = platzom("Zarpar");

        expect(translation).to.equal("Zorrope");
        expect(translation2).to.equal("Zarppe");
    });

    it('Si  la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guión del medio', function(){
        const translation = platzom("Abecedario");
        expect(translation).to.equal("Abece-dario");
    });

    it('Si la palabra original es un palíndromo,  nunguna regla anterior cuenta y se devuelve la misma palabra intercambiando mayúsculas y minúsculas', function(){
        const translation = platzom("sometemos");
        expect(translation).to.equal("SoMeTeMoS");
    });
});