import {Museum, Statue, Room} from './classes'; // le ./ est obligatoire pour les fichiers de votre projet
import {Painting} from "./interfaces";

const p1: Painting = {
    name: "La joconde",
    author: "Leonard de Vinci",
    description: "La Joconde est le portrait d'une jeune femme, sur fond d'un paysage montagneux aux horizons lointains et brumeux",
    type: "oil",
    createdDate: new Date()
};

const s1 = new Statue("Alexandros d'Antioche", "Vénus de Milo", new Date());

const rooms: Room[] = [];
rooms.push(new Room('Antiquités grecques', [s1]));
rooms.push(new Room('Peinture Italie', [p1, p1, p1]));

const m = new Museum("Louvre", rooms, {
    street: 'Musée du Louvre',
    city: 'Paris',
    zipCode: '75001'
}); // le mot clé new permet d'instancier la classe Museum

console.log('' + m); // affichage du musée