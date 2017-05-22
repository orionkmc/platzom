#Platzom

Platzom es un idoma inventado para el [Curso de fundamentos de JavaScript](https://platzi.com/js) de [platzi](https://platzi.com/).

## Descripción del idioma

- Si la palabra termina en "ar", se le quitan esos dos caracteres
- Si la palabra termina con Z, se añade "pe" al final
- Si  la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guión del medio
- Si la palabra original es un palíndromo,  nunguna regla anterior cuenta y se devuelve la misma palabra intercambiando mayúsculas y minúsculas

## instalación

```
npm install platzom
```

##Uso

```
import platzom from 'platzom'
```
idioma("programar") //program
idioma("Zorro")  //Zorrope
idioma("Zarpar")  //Zarppe
idioma("Abecedario") ); //Abece-dario
idioma("sometemos") ); //SoMeTeMoS

##Creditos
- [kuai mare](https://twitter.com/orionkmc)

##Licencía

[MIT](https://opensource.org/licenses/MIT)