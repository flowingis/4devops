---
image: default.png
location: Milano, Roma, Bologna, On-site
title: Build, Test and Run a Microservice in AWS ECS
duration: 1 giorno
level: intermedio # base | intermedio | avanzato
price: € 450 i.e.
# soldOut: false
# tickets: 10
teacherName: Paolo Latella
teacherImage: paolo.latella.jpg
teacherUrl: https://twitter.com/LatellaPaolo
teacherBio: Cloud e DevOps @XPeppers, AWS Technical Trainer
view: course.twig
collection: courses
---


Le sfide che portano ad un **sistema distribuito** basato su microservizi sono molte. Le aziende devono spesso modificare il loro modo di sviluppare, il loro modello organizzativo deve adattarsi ai processi DevOps e le scelte tecniche devono essere orientate a disaccoppiare il più possibile i componenti. 
Amazon Web Services sta rapidamente abbracciando architetture basate su microservizi cloud-native. Per velocizzare l’adozione dei microservizi AWS ha introdotto Docker come sistema per “containerizzare” i carichi di lavoro. In particolare AWS ha lanciato il servizio ECS (**Amazon Elastic Container Service**) per gestire in maniera semplice ed efficiente un cluster di tali container e ECR (**Elastic Container Registry**) come registro di contenitori Docker completamente gestito. 
Durante il workshop impareremo a usare tali servizi insieme ai servizi di CI/CD come CodeBuild e Codepipeline con l’obiettivo di creare una **Pipeline di CI** che va dalla build dell’immagine docker fino al deploy su un Cluster ECS in maniera completamente automatizzata.

#### Cosa Imparerai
Impareremo a creare un Cluster ECS in grado di scalare e adattarsi al Workload. Impareremo a passare dal docker compose ai task/service di ECS utilizzando la CLI di Amazon con l’obiettivo di lanciare sul cluster in nostri container. Impareremo a creare una Pipeline di CI/CD che va dal test di un microservizio fino al deploy su ECS passando per la creazione automatica dell’infrastruttura con Cloudformation.

#### Argomenti 
- Deploy a containerized service on Amazon ECS
- Build and Test a Docker image with AWS CodePipeline and CodeBuild
- Create Infrastructure with AWS CodePipeline and AWS Cloudformation
- Make a simple UAT with AWS Lambda
 

#### A chi è dedicato

DevOps Engineer, Systems Engineer, Developer

#### Prerequisiti
- Docker engine and compose
- AWS CLI
- Editor (Atom, Sublime, etc)
- Maven
