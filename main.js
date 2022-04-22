function aleatorio() {
    var numero = Math.floor(Math.random() * 5);
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var opcionUsuario;
var opcionMaquina = aleatorio();

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4");
if (opcionUsuario < 5 && opcionUsuario > -1) {
    alert("La máquina ha elegido: " + opciones[opcionMaquina]);
}
switch (opcionUsuario) {
    case "0":
        switch (opcionMaquina) {
            case piedra:
                alert("Empate");
                break;
            case papel:
                alert("Has perdido, papel cubre a piedra");
                break;
            case tijera:
                alert("Has ganado, piedra rompe a tijera");
                break;
            case lagarto:
                alert("Has ganado, piedra aplasta a lagarto");
                break;
            case spock:
                alert("Has perdido, Spock pulveriza a piedra");
                break;
        }
        break;
    case "1":
        switch (opcionMaquina) {
            case piedra:
                alert("Has ganado, papel envuelve a piedra");
                break;
            case papel:
                alert("Empate");
                break;
            case tijera:
                alert("Has perdido, tijera corta a papel");
                break;
            case lagarto:
                alert("Has perdido, lagarto se come a papel");
                break;
            case spock:
                alert("Has ganado, papel refuta a Spock");
                break;
        }
        break;
    case "2":
        switch (opcionMaquina) {
            case piedra:
                alert("Has perdido, piedra rompe tijera");
                break;
            case papel:
                alert("Has ganado, tijera corta a papel");
                break;
            case tijera:
                alert("Empate");
                break;
            case lagarto:
                alert("Has ganado, tijera decapita a lagarto");
                break;
            case spock:
                alert("Has perdido, Spock aplasta a tijera");
                break;
        }
        break;
    case "3":
        switch (opcionMaquina) {
            case piedra:
                alert("Has perdido, piedra aplasta a lagarto");
                break;
            case papel:
                alert("Has ganado, lagarto come a papel");
                break;
            case tijera:
                alert("Has perdido, tijera decapita a lagarto");
                break;
            case lagarto:
                alert("Empate");
                break;
            case spock:
                alert("Has ganado, lagarto envenena a Spock");
                break;
        }
        break;
    case "4":
        switch (opcionMaquina) {
            case piedra:
                alert("Has ganado, Spock pulveriza a piedra");
                break;
            case papel:
                alert("Has perdido, papel refuta a Spock");
                break;
            case tijera:
                alert("Has ganado, Spock aplasta a tijera");
                break;
            case lagarto:
                alert("Has perdido, lagarto envenena a Spock");
                break;
            case spock:
                alert("Empate");
                break;
        }
        break;

    default:
        alert("Elige un num del 0 al 4");
}