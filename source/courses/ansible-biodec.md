---
image: default.png
location: Da definire
title: Corso Ansible
duration: 1 giorno
level: base # base | intermedio | avanzato
price: 500€
date: Da definire
participants: 10
soldOut: false
#tickets: http://eventbrite.com/
#teacherName: Giovanni Ragazzini
#teacherBio: Giovanni Ragazzini è nato a forlì ed è un boss delle uccisioni multiple
view: course.twig
collection: courses
---

Automatizzare le attività ripetitive e standardizzare gli ambienti sono
problemi che investono il mondo IT sia dal lato della gestione dei
sistemi (Ops) che dal lato dello sviluppo (Dev). Il proliferare delle
piattaforme e in particolare l'uso delle soluzioni Cloud ha accentuato
il problema, rendendo necessario avere strumenti veloci, affidabili e
facili per la gestione di configurazioni e per il continuo rilascio di
codice.

**Ansible** è uno strumento per orchestrare l'installazione e la
configurazione di sistemi ed applicazioni: permette di definire lo stato
di uno o più server in modo prevedibile, replicabile e consistente.
Simile in questo a software come Puppet, Chef, Saltstack o CFEngine,
esso basa la propria filosofia su una parola chiave: la semplicità
d'uso.

A differenza di altri sistemi, Ansible non necessita di altro che di una
connessione SSH tra la macchina che funge da controllore e i server da
controllare, e tutto si gestisce con semplici direttive di
configurazione contenute in file testuali. Ancora: è una soluzione
agentless per cui non è necessario installare nessun client sugli hosts
da configurare, ma solo Python e - cosa che non guasta - è anche un
prodotto che presenta una curva di apprendimento molto agevole.

Il corso ha come obiettivo imparare ad usare Ansible per fare partire,
fermare e configurare dei server Linux su Cloud Amazon (_AWS_); si
imparerà come si definiscono con Ansible i profili di configurazione di
vari server, corrispondenti ad usi differenti (_i.e._ web server,
database server, server di monitoraggio, eccetera). Si imparerà inoltre
come svolgere alcune azioni ripetitive su tutti i server
dell’infrastruttura, come ad esempio aggiornare dei pacchetti software,
fare deploy di nuovi programmi, eccetera. Infine, nella parte finale del
corso si affronteranno alcuni temi specifici della _continuous
integration_, mostrando come usare Docker all'interno della CI di GitLab
per verificare che il nostro codice sia corretto.

1. È un corso di una giornata.

2. È un corso per principianti e per chi ha provato ad utilizzare
   Ansible ma non è ancora riuscito a farlo diventare una pratica
   quotidiana. 

3. È possibile avere dei moduli di mezza giornata più specifici su
   aspetti tecnici come l'integrazione con le tecnologie di AWS,
   Cloudformation, eccetera.

4. Il corso è rivolto agli sviluppatori di software, agli amministratori
   di sistema, DevOps e agli amministratori di database.

2. L’esperienza dei partecipanti può anche essere bassa (ovvero neo
   assunti).
