# Server Node.js con IoC, TypeScript e npm

## Descrizione
Questo progetto fornisce un template per un server Node.js inizializzato con Inversion of Control (IoC) utilizzando `tsyringe`, scritto in TypeScript e gestito con npm.

## Tecnologie Utilizzate
- **Node.js** - Runtime JavaScript lato server
- **TypeScript** - Superinsieme tipizzato di JavaScript
- **Express.js** - Framework per server web
- **Mongoose** - ODM per MongoDB
- **dotenv** - Gestione delle variabili d'ambiente
- **tsyringe** - Inversion of Control Container per la gestione delle dipendenze

## Requisiti
- Node.js (versione consigliata: >= 18.x)
- npm (o yarn come alternativa)

## Installazione

1. Clona il repository:
   ```sh
   git clone <repository_url>
   cd s_one
   ```

2. Installa le dipendenze:
   ```sh
   npm install
   ```

3. Crea un file `.env` nella root del progetto e aggiungi le variabili d'ambiente richieste (vedi [Configurazione](#configurazione)).

## Configurazione
Il progetto utilizza `dotenv` per caricare le variabili d'ambiente. Assicurati di creare un file `.env` con le seguenti variabili:

```
PORT=3760
MONGO_URI=mongodb://localhost:27017/mydatabase
```

## Compilazione e Avvio

### In modalità sviluppo:
Se utilizzi TypeScript direttamente, puoi avviare il server con:
```sh
npm run start
```

### Per produzione:
Compila il codice TypeScript e avvia il server:
```sh
npm run build
node dist/index.js
```

## Struttura del Progetto
```
├── src/
│   ├── Config/               # Configurazioni del progetto
│   ├── IoC/                  # Registrazione dei moduli e dipendenze
│   ├── User/                 # Modulo utente
│   ├── Slots/                # Modulo slot
│   ├── JWT/                  # Middleware per autenticazione
│   ├── index.ts              # Entry point del server
├── dist/                     # Codice compilato
├── .env                      # Variabili d'ambiente (da creare)
├── package.json              # Configurazione npm
├── tsconfig.json             # Configurazione TypeScript
└── README.md                 # Documentazione del progetto
```

## API Endpoints

| Metodo | Endpoint    | Protezione | Descrizione                   |
|--------|------------|------------|-------------------------------|
| GET    | /user      | No         | Recupera informazioni utente  |
| GET    | /slot      | Sì (JWT)   | Recupera slot disponibili     |

## Middleware
Il progetto include un middleware di autenticazione JWT (`authMiddleware`) per proteggere determinati endpoint.

## Contributi
Se vuoi contribuire, sentiti libero di aprire una Pull Request o segnalare un problema nella sezione Issues.

## Licenza
Questo progetto è rilasciato sotto la licenza MIT.

