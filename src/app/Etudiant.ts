export default class Etudiant {
    matricule: string|null="";
    nom:string|null="";
    datenaissance: Date | null;
    sexe: string|null="";
    sportif: boolean;
    telephone: number;
    id: number;
    static numero: number = 1;
    constructor(
            matricule: string|null="",
            nom:string|null="",
            datenaissance: Date | null,
            sexe: string|null="",
            sportif: boolean,
            telephone: number) {
        this.datenaissance = datenaissance;
        this.matricule = matricule;
        this.sexe = sexe;
        this.sportif = sportif;
        this.telephone = telephone;
        this.nom=nom;
        this.id = Etudiant.numero++;
    }
}