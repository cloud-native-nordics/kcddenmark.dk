/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Modal from 'components/shared/modal';
import LINKS from 'constants/links';

import AllanHoejgaardJensen from './images/allan-hoejgaard-jensen.jpg';
import EricDSchabell from './images/eric-d-schabell.jpg';
import KatharinaSick from './images/katharina-sick.jpg';
import LucySweet from './images/lucy-sweet.jpg';
import MathiasSchwarz from './images/mathias-schwarz.jpg';
import RoberthStrand from './images/roberth-strand.jpg';
import PavolHronsky from './images/pavol-hronsky.jpg';
import ThomasFangel from './images/thomas-fangel.jpg';
import FrancescaCarta from './images/francesca-carta.jpg';
import RasmusSteiniche from './images/rasmus-steiniche.jpg';
import JorgeLainfiesta from './images/jorge-lainfiesta.jpg';
import AndersLybecker from './images/anders-lybecker.jpg';
import EmilMunkso from './images/emil-munkso.jpg';
import TimothyMamo from './images/timothy-mamo.jpg';
import MadsDanquah from './images/mads-danquah.jpg';
import EnginDiri from './images/engin-diri.jpg';
import MikkelHegnhoj from './images/mikkel-hegnhoj.jpg';
import NicVermande from './images/nicolas-vermande.jpg';
import ThomasLabarussias from './images/thomas-labarussias.jpg';
import VicenteMiras from './images/vicente-miras.jpg';
import StephaneKaragulmez from './images/stephane-karagulmez.jpg';
import PeterRasmussen from './images/peter-rasmussen.jpg';
import RicardoRocha from './images/ricardo-rocha.jpg';
import LouiseOvergaard from './images/louise-overgaard.jpg';
import NicoloCambiaso from './images/nicolo-cambiaso.jpg';

import SpeakerPhoto from './images/speaker-placeholder-image.jpg';
import ChevronDown from './svg/arrow-down.inline.svg';

import CamillaPhoto from './images/organizer-camilla-larsen.jpg';
import JinhongPhoto from './images/organizer-jinhong-brejnholt.jpg';
import KasperPhoto from './images/organizer-kasper-nielsen.jpg';

const TITLE = 'Speakers';

// TODO: replace id => index connect with only id`s
const ITEMS = [
  {
    id: '9',
    name: 'Roberth Strand',
    position: 'Principal Cloud Engineer <br/> Amesto Fortytwo',
    content:
      'Roberth is a self-proclaimed "cloud automator", and works primarily with Microsoft Azure infrastructure, Platform Engineering, DevOps and Cloud Native technology. He has been awarded the title Microsoft Azure MVP, CNCF Ambassador, as well as HashiCorp Ambassador. He has been an active speaker for several years, talking at everything from small local meetups to KubeCon.',
    photo: RoberthStrand,
    twitterUrl: 'https://twitter.com/roberthtweets',
    linkedInUrl: 'https://linkedin.com/in/roberthstrand',
    time: '11:15',
    title: 'The Platform Engineering Journey',
    duration: '35 min',
  },
  {
    id: '9',
    name: 'Katharina Sick',
    position: 'Senior Software Engineer <br/> Dynatrace',
    content:
      'Katharina is a passionate software engineer at Dynatrace. With a strong focus on Cloud Native solutions, her expertise lies in creating user-friendly software that seamlessly integrates with the cloud. <br>Starting her journey as a mobile developer and later transitioning to backend development, she discovered her true passion in the world of Cloud Native. <br>Katharina thrives in communities that foster idea exchange and knowledge sharing, as she believes in the power of collaboration and learning from others. Join her on this exciting journey of innovation and growth!',
    photo: KatharinaSick,
    linkedInUrl: 'https://www.linkedin.com/in/katharinasick/',
    time: '11:15',
    title: 'Principle of Least Privilege: How to Secure Kubernetes Without Making Users Hate You',
    duration: '35 min',
    isCoincidedEvent: true,
  },
  {
    id: '7',
    name: 'Eric D. Schabell',
    position: 'Director Evangelism <br/> Chronosphere',
    content:
      "Eric is Chronosphere's Director Evangelism. He's renowned in the development community as a speaker, lecturer, author and baseball expert. His current role allows him to help the world understand the challenges they are facing with cloud native observability. He brings a unique perspective to the stage with a professional life dedicated to sharing his deep expertise of open source technologies, organizations, and is a CNCF Ambassador. Follow on https://www.schabell.org.",
    photo: EricDSchabell,
    twitterUrl: 'https://twitter.com/ericschabell',
    linkedInUrl: 'https://www.linkedin.com/in/ericschabell/',
    time: '10:25',
    title: 'Observability For You and Me with OpenTelemetry',
    duration: '35 min',
  },
  {
    // 3
    id: '13',
    name: 'Francesca Carta',
    position: 'Delivery Manager <br/> Mia-Platform',
    content:
      'Francesca Carta is Delivery Manager at Mia-Platform and is responsible for simplifying product use and adoption. With a background in philosophy, she brings a unique perspective to technology. For the past six years she has been responsible for managing the development of an Internal Developer Platform for developers in Cloud Native. Francesca is dedicated to making technology accessible to everyone. Through critical thinking and a drive for innovation, she aims to make a positive impact.',
    photo: FrancescaCarta,
    linkedInUrl: 'https://www.linkedin.com/in/francesca-carta-a403594b/',
    time: '13:40',
    title: 'Platform Engineering Is Not About Tech',
    duration: '35 min',
  },
  {
    // 4
    id: '15',
    name: 'Jorge Lainfiesta',
    position: 'Author <br/> Linux Foundation Backstage Course',
    content:
      "Jorge is the author of the Linux Foundation Introduction to Backstage (LFS142) course and has helped enterprises, consultancies, and startups adopt Backstage. He has a background in software engineering (ex-PayPal) and digital communication (UCLA). He's also a certified sommelier (CETT Barcelona).",
    photo: JorgeLainfiesta,
    linkedInUrl: 'https://www.linkedin.com/in/jrlainfiesta/',
    time: '14:30',
    title:
      'Is Backstage for me? A systematic approach to deciding if and how to use the framework successfully',
    duration: '35 min',
  },
  {
    // 5
    id: '1',
    name: 'Jinhong Brejnholt',
    position: 'Chief Cloud Architect & Product Owner <br/> Saxo Bank A/S',
    content:
      'Jinhong is a highly skilled cloud and platform developer/architect, with a strong passion for DevSecOps practice and cloud-native technologies. She holds an MSc. in Software Development and Technology, and is certified as a Kubernetes application developer, administrator, and security specialist.',
    photo: JinhongPhoto,
    linkedInUrl: 'https://www.linkedin.com/in/jbrejnholt',
    time: '9:00',
    title: 'Welcome',
    duration: '10 min',
  },
  {
    // 6
    id: '18',
    name: 'Timothy Mamo',
    position: 'Senior Developer Advocate <br/> DigitalOcean',
    content:
      'Timothy Mamo loves to help growing companies make the most of the cloud by focusing on Cloud Native technologies and processes. He’s had a varied experience, from studying aerospace engineering and working in the automotive industry before moving into the world of Cloud. He enjoys working and helping others improve and understand, at times with some Mediterranean gusto.',
    photo: TimothyMamo,
    linkedInUrl: 'https://www.linkedin.com/in/timothymamo/',
    twitterUrl: 'https://twitter.com/timothy_mamo',
    time: '15:45',
    title: 'DevOps Lessons from a Primary School Teacher',
    duration: '5 min',
  },
  {
    id: '1',
    name: 'Camilla Larsen',
    position: 'Platform Engineer <br/> Lunar',
    content: '',
    photo: CamillaPhoto,
    linkedInUrl: 'https://www.linkedin.com/in/camilla-larsen-tux',
    time: '9:00',
    title: 'Welcome',
    duration: '10 min',
  },
  {
    id: '15',
    name: 'Anders Lybecker',
    position: 'Principal Software Development Engineer Lead <br/> Microsoft',
    content:
      'Anders Lybecker is a Principal Software Engineering Lead, former Global Black Belt IoT specialist and Technical Evangelist at Microsoft. He has many years of experience as a cloud architect, working with some of the biggest accounts at Microsoft. VW, WHO, Vestas, NHS, Nokia.',
    photo: AndersLybecker,
    linkedInUrl: 'https://www.linkedin.com/in/anderslybecker/',
    twitterUrl: 'https://twitter.com/Lybecker',
    time: '14:30',
    title: 'Carbon-Aware Computing: Measuring and Reducing the Carbon Intensity of Software',
    duration: '35 min',
    isCoincidedEvent: true,
  },
  {
    // 9
    id: '4',
    name: 'Lucy Sweet',
    position: 'Senior Software Engineer <br/> Uber',
    content: "A Senior Software Engineer working on Uber's stateless compute platform.",
    photo: LucySweet,
    linkedInUrl: 'https://linkedin.com/in/intunderflow',
    time: '9:30',
    title: 'Keynote: Uber - Migrating 2 million CPU cores to Kubernetes',
    duration: '25 min',
  },
  {
    // 10
    id: '1',
    name: 'Kasper Borg Nissen',
    position: 'Lead Platform Architect <br/> Lunar',
    content: '',
    photo: KasperPhoto,
    twitterUrl: 'https://twitter.com/phennex',
    linkedInUrl: 'https://www.linkedin.com/in/kaspernissen',
    time: '9:00',
    title: 'Welcome',
    duration: '10 min',
  },
  {
    // 11
    id: '19',
    name: 'Mads Høgstedt Danquah',
    position: 'Engineering Lead - Edge Platform Team <br/> The LEGO Group',
    content:
      'Mads has been building Cloud Native solutions for a while now and thoroughly enjoys the work and a good discussion about complexity vs humans. When he is not doing tech work he enjoys building with LEGO bricks and doing volunteering work in various scout associations.',
    photo: MadsDanquah,
    linkedInUrl: 'https://www.linkedin.com/in/danquah',
    twitterUrl: 'https://twitter.com/danquah',
    time: '15:50',
    title: 'Prioritising the tricky stuff when building your platform',
    duration: '5 min',
  },
  {
    // 12
    id: '20',
    name: 'Stephane Karagulmez',
    position: 'Senior Solution Architect <br/> Isovalent',
    content:
      "I'm a Senior Solution Architect at Isovalent with a rich background in Kubernetes and networking. Starting as a Developer, I transitioned into a Sales Engineer role at Google Cloud, where I specialized in Kubernetes and ascended to the role of AppMod Practice Lead. Today, I leverage my expertise to architect complex solutions in Kubernetes and networking at Isovalent. A seasoned public speaker and writer, I'm passionate about demystifying technology and influencing product strategies with a customer-centric approach. Throughout my career, I've prioritized continuous learning and impactful leadership in the tech industry.",
    photo: StephaneKaragulmez,
    linkedInUrl: 'https://www.linkedin.com/in/stephane-karagulmez-b9699410a/',
    twitterUrl: 'https://twitter.com/skaragulm',
    time: '15:55',
    title: 'Keynote: Unlocking Next-Gen Networking and Security with Cilium Service Mesh',
    duration: '5 min',
  },
  {
    // 13
    id: '4',
    name: 'Mathias Schwarz',
    position: 'Senior Staff Software Engineer <br/> Uber',
    content: "A Senior Staff Software Engineer working on Uber's stateless compute platform.",
    photo: MathiasSchwarz,
    time: '9:30',
    title: 'Uber - Migrating 2 million CPU cores to Kubernetes',
    duration: '25 min',
  },
  {
    // 14
    id: '7',
    name: 'Allan Højgaard Jensen',
    position: 'Platform Development Specialist <br/> Netic',
    content:
      'Allan Højgaard Jensen is working as Platform Development Specialist for Netic - a Trifork Company. He has worked with platform development for more years than he would like to admit and have a background in parallel and distributed computing. Furthermore he is part of the Cloud Native Aalborg Group.',
    photo: AllanHoejgaardJensen,
    linkedInUrl: 'https://www.linkedin.com/in/allanhoejgaardjensen',
    time: '10:25',
    title: 'Running prioritised workload in Kubernetes',
    duration: '35 min',
    isCoincidedEvent: true,
  },
  {
    // 15
    id: '7',
    name: 'Pavol Hronsky',
    position: 'Head of Container Automation <br/> Nordea',
    content:
      'An applied mathematician who shortly after finishing studies followed his other passion and turned into a software developer. Upon realisation that many issues originate with an unstable, or rather sometimes accidentally changing underlying deployment environment, Pavol started a search for technologies that would help him and his team to overcome these challenges. The investigation led him to container technologies. Nowadays, additionally to heading the Container Automation team in Nordea, he spends his time by advocating Kubernetes and DevOps mindset in his workplace.',
    photo: PavolHronsky,
    linkedInUrl: 'https://www.linkedin.com/in/pavol-hronsky/',
    time: '12:05',
    title: 'GitOps or a Journey to a Production Incident and Swiftly Back Again',
    duration: '35 min',
  },
  {
    // 16
    id: '11',
    name: 'Thomas Bøgh Fangel',
    position: 'Tech Lead and Senior Software Engineer <br/> Lunar',
    content:
      "Thomas Bøgh Fangel is tech lead and backend developer at Lunar where he has been since the early startup days. He has been a part of the journey evolving the Lunar platform from a Rails monolith to the current event-driven microservice architecture on top of a Kubernetes based platform. Today, he spends most of his time as tech lead in the team responsible for Lunar's integration into the national clearings across the Nordics. He is a big fan of DDD, event sourcing and believes in the agile mindset of continuous improvement which lies at the heart of Lunar's journey.",
    photo: ThomasFangel,
    linkedInUrl: 'https://www.linkedin.com/in/thomasboeghfangel/',
    twitterUrl: 'https://twitter.com/tbfangel',
    time: '12:05',
    title: 'Event sourcing after page 1: How we built a cloud native bank',
    duration: '35 min',
    isCoincidedEvent: true,
  },
  {
    // 17
    id: '13',
    name: 'Rasmus Steiniche',
    position: 'CEO <br/> Neurospace',
    content:
      "Rasmus Steiniche is the CEO of Neurospace and has done everything from writing java applications. doing SaaS applications before it was cool, creating one of Denmark's biggest multi-cloud strategies, and creating big data and machine learning platforms.<br>Rasmus has been part of the Cloud Native and DevOps movement since 2014 and has since moved on to create data and machine learning applications.<br>Neurospace is a technology partner helping other companies on their data and machine learning journey to become better at what they do.",
    photo: RasmusSteiniche,
    linkedInUrl: 'https://www.linkedin.com/in/steiniche/',
    time: '13:40',
    title: 'Cloud Native Data Platforms - The why, what and how',
    duration: '35 min',
    isCoincidedEvent: true,
  },
  {
    // 18
    id: '17',
    name: 'Emil Munksø',
    position: 'Cheif Platform Architect <br/> Kamstrup A/S',
    content:
      'Lives in Silkeborg with my wife and kid. Leads Kamstrup cloud journey with Kubernetes in interest.',
    photo: EmilMunkso,
    linkedInUrl: 'https://www.linkedin.com/in/emil-munks%C3%B8-602b0514b',
    twitterUrl: 'https://twitter.com/EmilMunksoe',
    time: '15:40',
    title: 'Application promotion in GitOps',
    duration: '5 min',
  },
  {
    // 19
    id: '22',
    name: 'Ricardo Rocha',
    position: 'Computing Engineer <br/> CERN',
    content:
      'Ricardo is a Computing Engineer in CERN IT focusing on cloud native deployments, networking and more recently machine learning platforms. He has led for several years the internal effort to transition services and workloads to use cloud native technologies, as well as dissemination and training efforts.',
    photo: RicardoRocha,
    linkedInUrl: 'https://www.linkedin.com/in/ricardo-rocha-739aa718/?originalSubdomain=ch',
    twitterUrl: 'https://twitter.com/ahcorporto',
    time: '16:15',
    title: 'Keynote: CERN and Cloud Native Computing - Playing Platform LEGO',
    duration: '25 min',
  },

  // Workshops

  {
    // 20
    id: '50',
    name: 'Engin Diri',
    position: 'Customer Experience Architect <br/> Pulumi',
    content:
      'Engin is a Customer Experience Architect at Pulumi and has been in the IT industry for over 15 years. He started as a Java backend developer and later migrated to the fronted development. This is where he found his passion for CI/CD, Cloud technologies and in particular Kubernetes. Engin is a very curious person and loves learning and testing new technologies.',
    photo: EnginDiri,
    linkedInUrl: 'https://www.linkedin.com/in/engin-diri/',
    twitterUrl: 'https://twitter.com/_ediri',
    time: '10:25',
    title: 'How To Add Infrastructure Provisioning to Your Backstage Templates',
    duration: '90 min',
    isWorkshop: true,
  },

  {
    // 21
    id: '51',
    name: 'Mikkel Mørk Hegnhøj',
    position: 'Head of Product and DevRel <br/> Fermyon',
    content:
      'Mikkel Mørk Hegnhøj is leading the product and developer relationship team at Fermyon. He has a long background in product management, customer success, and developer engagement at Microsoft, working on products such as Service Fabric, Azure Kubernetes Services, Azure Container Instances, and the open-source project Virtual Kubelet. He’s passionate about developer and operator experiences, with a mission to make the path from idea to reality frictionless and quick. Mikkel lives in a tiny and beautiful village in Denmark.',
    photo: MikkelHegnhoj,
    linkedInUrl: 'https://www.linkedin.com/in/mikkelhegn',
    twitterUrl: 'https://twitter.com/mikkelhegn',
    time: '10:25',
    title: 'Hands on with WebAssembly and Kubernetes',
    duration: '90 min',
    isWorkshop: true,
  },

  {
    // 22
    id: '52',
    name: 'Nic Vermande',
    position: 'Head of Developer Relations <br/> Spectro Cloud',
    content:
      "Nicolas is an experienced hands-on technologist, evangelist and product owner who has been working in the fields of Cloud-Native technologies, Open Source Software, Virtualization and Datacenter networking for the past 18 years. Passionate about enabling users and building cool tech solving real-life problems, you'll often see him speaking at global tech conferences and online events, spreading the word and walking the walk with customers and users.",
    photo: NicVermande,
    linkedInUrl: 'https://www.linkedin.com/in/vnicolas/',
    twitterUrl: 'https://twitter.com/nvermande',
    time: '13:40',
    title:
      'Mastering Cluster API and GitOps: Deep Dive into Extensible Components for Building Production-Ready Kubernetes Clusters',
    duration: '90 min',
    isWorkshop: true,
  },

  {
    // 23
    id: '53',
    name: 'Thomas Labarussias',
    position: 'OSS and Ecosystem Advocate <br/> Sysdig',
    content:
      "Thomas is OSS/Ecosystem Advocate at Sysdig, the company which created and open-sourced Falco, the Security Runtime Engine for Kubernetes and Cloud-Native technologies. Thomas worked for Qonto, a modern banking for SMEs and freelancers, where he managed their Kubernetes clusters and the enthusiastic tools around, like ArgoCD, Traefik, Prometheus. He also assisted for many years pure-players and e-business companies for a large managed service provider, as an AWS expert and FinOps. He's one of the longest tenured members of the Falco community, and creator of Falcosidekick and Falcosidekick-UI, two major components of the Falco ecosystem.",
    photo: ThomasLabarussias,
    linkedInUrl: 'https://www.linkedin.com/in/thomas-labarussias-9229b522a/',
    twitterUrl: 'https://twitter.com/TLabarussias',
    time: '13:40',
    title: 'Detecting unexpected behavior and intrusions with Falco',
    duration: '90 min',
    isWorkshop: true,
  },

  {
    // 24
    id: '53',
    name: 'Vicente J. Jiménez Miras',
    position: 'Security Content Engineer <br/> Sysdig',
    content:
      "Vicente has a background as an infrastructure engineer and open source trainer. Being a digital nomad since early in his career, he's lived or worked in almost a hundred different locations. He also shares a passion for food, especially Indian cuisine, although, as a Spaniard, he's very proud of his tortilla española. <br> In 2021, after 4 years working as an instructor for Red Hat, he joined Sysdig to continue his work educating folks and creating awareness of cybersecurity.",
    photo: VicenteMiras,
    time: '13:40',
    title: 'Detecting unexpected behavior and intrusions with Falco',
    duration: '90 min',
    isWorkshop: true,
  },

  {
    // 25
    id: '3',
    name: 'Louise Overgaard',
    position: 'General Secretary <br/> Coding Pirates',
    content: 'Louise has been an innovation leader, consultant and managing expert, but is mainly a humanitarian. She calls herself a Humanist in IT and proudly works for cultural development along with her broad category of work. She believes that “My starting point is humans. They are the core of my work”. This throws light on her goal to focus on development and innovation for the world and she has been engaged in developing libraries, smart cities, NGOs, festivals and companies with this focus in mind. <br> Louise now works as the general secretary of Coding Pirates. A voluntary organisation that she has been a part of developing. In Coding Pirates kids and young people can learn about new technologies, programming languages etc through play and experimentation.',
    photo: LouiseOvergaard,
    linkedInUrl: 'https://www.linkedin.com/in/louiseovergaard',
    time: '9:20',
    title: 'Keynote: Coding Pirates (Sponsored)',
    duration: '10 min',
  },

  {
    // 26
    id: '13',
    name: 'Nicolò Cambiaso',
    position: 'Marketing Director<br/> Mia-Platform',
    content: 'Promoting better development through cloud native. Communications expert, event organizer, community gatherer. OSS contributor, sailing the K8s ocean since 2019. Marketing Director @Mia-Platform. Strong believer that better software engineering brings better development for the planet.',
    photo: NicoloCambiaso,
    linkedInUrl: 'https://www.linkedin.com/in/nicolò-cambiaso-319511bb/',
    time: '13:40',
    title: 'Platform Engineering Is Not About Tech',
    duration: '35 min',
  },

  // {
  //   // 27
  //   id: '2',
  //   name: 'Peter Rasmussen',
  //   position: 'Architect & Manager of the JYSK Java<br/> JYSK',
  //   content: '',
  //   photo: PeterRasmussen,
  //   time: '9:10',
  //   title: 'Keynote: JYSK (Sponsored)',
  //   duration: '90 min',
  // },

];

const Speakers = ({ location }) => {
  const [isSpeakersOpen, setIsSpeakersOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalDataId, setModalDataId] = useState(0);

  const handleModalShow = (id) => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
    setModalDataId(id);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
    setModalDataId(0);
  };

  const handleShowMoreClick = () => {
    setIsSpeakersOpen((isSpeakersOpen) => !isSpeakersOpen);
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { state = {} } = location;

      if (state?.modalId) {
        const element = document.getElementById('speakers');

        window.scrollTo({
          top: window.pageYOffset + element.getBoundingClientRect().top,
        });

        if (Number(state.modalId) > 7) {
          handleShowMoreClick();
        }

        handleModalShow(Number(state.modalId));
      }
    }
  }, [location]);

  return (
    <section className="safe-paddings relative bg-white pb-40 lg:pb-32 md:py-24 sm:py-16">
      <div className="container flex flex-col sm:items-center">
        <h2
          className="text-6xl font-bold leading-tight text-primary-1 md:text-center"
          id={LINKS.speakers.id}
        >
          {TITLE}
        </h2>
        <ul className="mt-14 grid w-full grid-cols-4 gap-8 lg:gap-6 md:grid-cols-3 md:justify-items-center md:gap-4 xs:flex xs:flex-wrap xs:justify-evenly [@media(max-width:620px)]:grid-cols-2">
          {ITEMS.map(({ name, position, photo }, index) => (
            <li
              className={clsx(
                'group flex w-[240px] cursor-pointer flex-col lg:w-52 md:w-48 sm:w-auto sm:max-w-[200px]',
                index > 7 && !isSpeakersOpen ? 'hidden' : 'flex'
              )}
              key={index}
              onClick={() => handleModalShow(index)}
            >
              <img
                className="w-full"
                src={photo}
                width={240}
                height={284}
                loading="lazy"
                alt={name}
              />
              <p className="mt-2.5 text-2xl font-bold leading-normal text-primary-1 transition-colors duration-200 group-hover:text-blue-1 sm:text-left">
                {name}
              </p>
              <span
                className="mt-1.5 text-primary-1"
                dangerouslySetInnerHTML={{ __html: position }}
              />
            </li>
          ))}
        </ul>
        <button
          className="mx-auto mt-10 flex items-center px-5 py-2 text-center text-lg font-bold leading-none text-primary-1 transition-colors duration-200"
          type="button"
          onClick={handleShowMoreClick}
        >
          <span>{isSpeakersOpen ? 'Hide all speakers' : 'View all speakers'}</span>
          <ChevronDown
            className={clsx(
              'ml-2 block w-2.5 shrink-0 transition-[transform,color] duration-200',
              isSpeakersOpen ? 'rotate-180' : ''
            )}
          />
        </button>
        <Modal
          modalData={ITEMS[modalDataId]}
          isVisible={isModalVisible}
          isPresentationShow={false}
          onModalHide={handleModalHide}
        />
      </div>
    </section>
  );
};

export default Speakers;
