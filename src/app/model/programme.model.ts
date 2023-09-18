import {Mosque} from "./mosque.model";

export interface Programme {
   id: string | null;
   title: string;
   organizer: string;
   daysTimes: string; // Ex: Lundi à 14:00, Mardi à 19:00
   description: string;
   mosque?: Mosque

}
