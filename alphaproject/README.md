
### Introduzione al Corso 

Per poter settare e startare il progetto di angular basta installare npm e nodejs, oltre a questo bisognerà poi lanciare il comando per installare la versione che si vuole ``` npm install -g @angular/cli@16```, successivamente possiamo controllare la versione con ```ng version``` e creare l'applicazione di prova con ``` ng new --skip-tests```.

Per invece far partire la nostra applicazione angular basterà usare ```ng serve [project]```.

_Package.json_ in angular è il file delle dipendenze del progetto dove vengono inserite anche le dipendenze aggiuntive, _angular.json_ invece contiene una serie di informazioni riguardanti i file di stile e js necessari a far girare l'applicazione.

##### /src 

Angular è <span class="red">singol page application SPA</span>, un unica pagina html che viene popolata dinamicamente dagli elementi angular. In questo caso è index.html 

main.ts è il file dell'entry point dell'applicazione 

##### Elementi 

Componenti - Moduli - Servizi - Direttive - Router - FormBuilder 

- Componenti : classi TypeScript che definiscono la logica e la vista della UI, che vengono composte da Template che è la vista del componente stesso, scritto in html, class che è la logica del componente, metadata che è un oggetto di info aggiuntive (già inseriti all'interno della classe) e infine lo style del component. 
- Moduli: container di componenti e dei file a loro correlati 
- Servizi: Classi che offrono funzionalità globali, come API o gestione errori 
- Direttive: trasmutazioni di html markup, come ad esempio ng-model 
- Router: gestisce la navigazione dell'applicazione tra i vari componenti. Il router è responsabile della mappatura degli URL alle viste. 
- FormBuilder: servizio angular che fornisce sintassi semplificata per la creazione di moduli


##### Generazione nuovo component 

Per generare un nuovo component è possibile usare il comando ```ng g component [nomecomponente] --skip-tests``` in questo modo verranno create le classi necessarie e verrà anche aggiornato l'app.component.ts che tiene traccia di modelli dichiarati e importati nella nostra applicazione. 

##### Creazione di metodo all'interno di modulo 

Se nel nostro modulo volessimo creare un metodo custom da bindare ad un evento, ad esempio on click potremmo fare così: 

```html
<button (click)=gestAuth()>Log-in</button>
```

nel nostro name.component.html richiamiamo un metodo sull'onclick di un buttone e invece nel name.component.ts definiamo il metodo richiesto 

```typescript
export class LoginComponent implements OnInit{
  userId: String = "marco";
  password: String ="marco";
  
  constructor() {}

  ngOnInit(): void {}

  gestAuth = () : void => {
    console.log(this.userId)
  }

}
```


##### BananaBox 

il bananabox serve per bindare in modo bidirezionale una variabile in input a quella del modello, insomma serve per prendere variabili dinamiche in input 

```html
<input type="text" id="userId" placeholder="Nome utente" [(ngModel)] = userId  value="{{userId}}">
```

In particolare : 

```html
[(ngModel)] = userId
```


##### *ngIf

Se volessimo invece introdurre contenuti a vista condizionata (li ho chiamati io così) ovvero che si vedono solo se una determinata condizione viene soddisfatta potremmo usare l' ngIf di angular, ad esempio, il messaggio di errore o di successo di un processo di login 

##### Routing 

definisce le rotte (sezioni applicazione o pagine) dell'applicazione, il modello di routing RouterModule deve essere aggiunto all'array di moduli dell'applicazione. 

Per definire una rotta si utilizza il metodo ```
RouterModule.forRoot()``` che ha come parametri un array di oggetti di tipo Route. 
Ogni oggetto Route deve contenere almeno le proprietà _path_ e _component_ che specificano path e componente da visualizzare. 

Esistono anche rotte con parametri ad es. ```path:nomeParametro  -> 'user/:id'```, e si può accedere al parametro specificato dalla rotta tramite l'oggetto ActivatedRoute.

Esistono anche le rotte figlio e rotte reindirizzamento, con rispettivamente le proprietà 'children' e 'redirectTo'.

Per aggiungere rotte nella nostra app andremo a modificare app-routing.module.ts

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'welcome', component: WelcomeComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
```

i due asterischi specificano una route non esistente 

```ts  
{path:'**', component: ErrorComponent}
```

##### Code Injection per routing

Si può effettuare una code injection tramite il costruttore del modulo, di un oggetto Router per gestire ad esempio l'attivazione di una route, in seguito ad una determinata condizione, ad esempio, nel mio modulo LoginComponent 
faccio: 

```ts 
  constructor(private route: Router) {}
```

per poi fare: 

```ts
gestAuth = () : void => {

    if(this.userId =="marco" && this.password == "123"){
      this.route.navigate(['welcome'])
      this.authenticated = true;
    }else{

      this.authenticated = false;
    }
  }
```

in questo modo in caso di successo della login, verrà reindirizzato alla route welcome specificata precedentemente. 

##### Route Params 

Per accedere ad un parametro specificato nella route come in questo caso: 

```ts
  {path:'welcome/:userid', component: WelcomeComponent},
```

Dobbiamo prima di tutto passarlo come argomento quando chiamiamo navigate

```ts
gestAuth = () : void => {
    if(this.userId =="marco" && this.password == "123"){
      this.route.navigate(['welcome', this.userId])
      this.authenticated = true;
    }else{
      this.authenticated = false;
    }
  } 
```

E poi nel costruttore di welcome dobbiamo iniettare ActivatedRoute e da route prendere lo snapshot 

```ts
    this.utente = this.route.snapshot.params['userid'];
```

##### NgFor 

Per ciclare  i dati di un array di oggetti, in questo caso di Articoli, possiamo usare il *ngFor* 

Sintassi ed uso : 

```html
 <tr *ngFor="let articolo of articoli">
        <td>{{articolo.codart}}</td>
        <td>{{articolo.descrizione}}</td>
        <td>{{articolo.um}}</td>
        <td>{{articolo.pzcart}}</td>
        <td>{{articolo.peso}}</td>
        <td>{{articolo.prezzo}}</td>
    </tr>
```

##### RouterLink

Direttiva angular che consente di gestire la navigazione all'interno della SPA.
Il routerLink può essere aggiunto ai tag html e definisce la rotta onclick dell'elemento. Si possono usare per path relativi ./ o assoluti /.
E' possibile inoltre la navigazione con parametri che fanno parte del path dopo il "?". E' possibile ovviamente anche navigare verso una rotta definita preventivamente nel app-routing.module.ts

```html
<p>Welcome!, {{utente}} clicca <a routerLink="/articoli"></a>qui per vedere l'elenco degli articoli</p>
```

##### Modello dati

si può create un modello dati custom utilizzando l'export interface nomeInterfaccia, in questo modo :

```ts 
export interface IArticoli {
  codart: string
  descrizione: string
  um: string
  pzcart: number
  peso: number
  prezzo: number
  active: boolean
  data: Date
}
```

Per poi poterlo usare come Oggetto in :

```ts
 articoli: IArticoli[]  = [
    {codart : '014600301', descrizione : 'BARILLA FARINA 1 KG', um : 'PZ', pzcart : 24, peso : 1, prezzo : 1.09, active : true, data : new Date()},
    {codart : "013500121", descrizione : "BARILLA PASTA GR.500 N.70 1/2 PENNE", um : "PZ", pzcart : 30, peso : 0.5, prezzo : 1.3, active : true, data : new Date()},
    {codart : "007686402", descrizione : "FINDUS FIOR DI NASELLO 300 GR", um : "PZ", pzcart : 8, peso : 0.3, prezzo : 6.46, active : true, data : new Date()},
    {codart : "057549001", descrizione : "FINDUS CROCCOLE 400 GR", um : "PZ", pzcart : 12, peso : 0.4, prezzo : 5.97, active : true, data : new Date()}
  ]
```


##### Moduli

I moduli in angular sono un insieme di servizi, direttive, componenti e altri elementi correlati, suddividendo in modo intelligente per organizzare il codice. Inoltre un un modulo può esporre un interfaccia per poter permettere la comunicazione con altri moduli. 

I moduli di angular sono costituiti principalmente da <span class="red">modulo radice</span> e i _moduli feature_. Il modulo root viene creato in auto, durante la creazione di un progetto angular.


##### Generare Modulo Core

Per generare un nuovo modulo, e un modulo non un componente, basterà cambiare il comando eseguito per la generazione di componenti così

```shell
ng g module core
```

Per poi creare un component rilegato al modulo appena creato: 

```shell
ng g component header --path=src/app/core --module=core --export 
```

da notare come venga specificato il path del modulo custom, il nome del modulo core, da notare anche il flag export che indica l'esposizione verso moduli esterni. 
per aggiungere poi i nostri componenti all'interno della pagina visualizzata, basterà aggiungerli al mostro app.component.html, e l'header e il footer saranno gli elementi fissi della nostra single page application. 

Note: credo che il punto di questa sigla sia proprio il fatto che SPA intenda che effettivamente la pagina sia sempre la stessa ma cambino i componenti all'interno della pagina, e che ci siano invece delle componenti fisse che rimangono, come ad esempio la navbar e il footer.


##### @Input 

La notazone input serve per passare dati da un componente padre ad un componente figlio. Questo sarà possibile importanto @angular/core. 
Si può utilizzare anche su una proprietà del componente figlio. 
La determinata proprietà con quella notazione diverrà anche _accessibile_ (NB: accessibile è accessibile dal padre per essere scritta, passando al filgio dati) dal componente padre.
All'interno del componente padre si può usare un binding per associarsi alla proprietà del figlio. 

Ad esempio qui nel nostro file welcome.component.html possiamo trovare:

```html
<app-jumbotron [Titolo]="titolo" [SottoTitolo]="sottotitolo" [Show]="false"></app-jumbotron>
````

ovvero il component welcome richiama le proprietà di app-jumbotron per scriverle come preferisce 

Le proprietà:

```ts
export class JumbotronComponent {

  @Input()
  Titolo: string = "";
  @Input()
  SottoTitolo: string = "";
  @Input()
  Show: boolean = true;

}
````

Con uso di annotation. Ovviamente in welcome.ts abbiamo anche la parte di codice dove sono effettivamente stati scritti questi dati 

```ts
export class WelcomeComponent implements OnInit {

  utente : string = "";
  titolo: string = "Benvenuti in Alphashop";
  sottotitolo: string = "Visualizza le offerte del giorno";
  constructor(private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.utente = this.route.snapshot.params['userid'];
  }
}
```

##### Serivices Angular

Un servizio è un tipo di classe che fornisce funzionalità, logica o dati condivisi da utilizzare in tutta l'applicazione. I servizi sono utilizzare per divide la logica di business e la gestione dei dati dai componenti, in modo da aumentare la granularità.

Si possono creare servizi in angular è possibile usare l'angular cli o una classe TS con l'annotazione @Injecatable(), iniettarlo successivamente in altri servizi o componenti, inoltre l'istanza è singleton. 

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userid: string, password: string):boolean => {
    return (userid === 'marco' && password === '123')?true: false; 
  }
}

```

