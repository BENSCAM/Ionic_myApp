export default class Contact{
    public Nom:string |null="";
    public Prenom: string|null="";
    public Numero: number|null=0;
    public id: number;
    static indice=1;
  
    constructor(Nom:string |null="",Prenom: string|null="",Numero: number|null=0){
      
      this.Nom=Nom;
      this.Numero=Numero;
      this.Prenom=Prenom;
      this.id=Contact.indice++;
    }
  }