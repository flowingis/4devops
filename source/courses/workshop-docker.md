---
image: default.png
location: Savoia Hotel Regency, Bologna
title: Workshop Docker
duration: 1 giorno
level: intermedio # base | intermedio | avanzato
# price: 145€
date: 2018-03-09
participants: 10
# soldOut: false
# tickets: http://eventbrite.com/
teacherName: Francesco Tornieri
teacherImage: default.jpg
teacherUrl: https://twitter.com/alendmazz
teacherBio: Francesco Tornieri, si occupa di sicurezza informatica e di sistemi open-source da oltre quindici anni. Ha pubblicato numerosi articoli su riviste come Linux Journal e Hakin9. E' autore del libro "Linux. Configurarlo al meglio". È membro dell’AIPSI (Associazione Italiana Professionisti Sicurezza Informatica). E' certificatore CAcert per certificati SSL. Ricopre la carica di assistente universitario presso l'Università Cattolica di Milano, cattedre di "Informatica 2" e "Sistemi operativi per le banche on-line". E' trainer certificato Docker.
view: course.twig
collection: courses
---

Il workshop sarà introduttivo all'ecosistema Docker e ai principali concetti legati al mondo dei container.
Durante il workshop verranno presentate slide ed esercizi su argomenti avanzati: demo da istanze AWS (swarm e overlay inclusi) con immagini basate su alpine, incluse le nuove features di sicurezza e data volume.

### Prerequisiti

È richiesta familiarità con gli ambienti UN*X sia per quanto concerne i concetti di funzionamento (servizi, permessi, filesystem, etc.) sia per l'utilizzo dell'ambiente a riga di comando.

---

### Programma

Il workshop si svolgerà Giovedì 9 Marzo dalle 10:00 alle 18:00 a Bologna presso il Savoia Hotel Regency in via del Pilastro n. 2.

**Intro to containers**

- Containers vs virtualization
- Containers for isolation
- Shipping containers
- Docker, containers and images
- Running and managing containers
- Building images
- Managing and distributing images

**Dockerfile: FROM, RUN, ADD, ENV...**
- Container and service?
- Volumes and data volumes
- Bind and managed
- Link
- Demo (AWS)

**Networking**
- Container Network Model
- Demo (AWS)

**Manage resources**
- Memory limits, CPU, Access to devices

**Container Security**
- Seccomp, Userns, Capabilities...

**Clustering and orchestrator: swarm modeHost distribution: machine**
- Demo (AWS)
- Swarm network model

**Manage complex architecture: compose**
- Demo (AWS)
