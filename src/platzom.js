export default function platzom(str) {
    let translation = str;
    const length = translation.length;

    // Si la palabra original es un palíndromo, 
    // nunguna regla anterior cuenta y se devuelve 
    // la misma palabra intercambiando mayúsculas y minúsculas

    const palindromo = (str) => str.split('').reverse().join('');
    function lowerUpper(str){
        let translation = '';
        let capitalize = true;
        for(let i = 0; i < length; i++){
            const char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    }

    if (str == palindromo(str)) {
        return lowerUpper(str)
    }

    // si la palabra termina en "ar", se le quitan esos dos caracteres
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2)
    }

    //Si la palabra termina con Z, se añade "pe" al final
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe'
    }

    // Si  la palabra traducida tiene 10 o mas letras, 
    // se debe partir a la mitad y unir con un guión del medio
    if (length >= 10) {
        const firstHalf = translation.slice(0, Math.round(length / 2));
        const secondHalf = translation.slice(Math.round(length / 2));
        translation = `${firstHalf}-${secondHalf}`
    }

    return translation;
}