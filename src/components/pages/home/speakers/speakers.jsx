/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Modal from 'components/shared/modal';
import LINKS from 'constants/links';

import AllanHoejgaardJensen from './images/allan-hoejgaard-jensen.jpg';
import EricDSchabell from './images/eric-d-schabell.jpg';
import KatharinaSick from './images/katharina-sick.jpg';
import LucySweet from './images/lucy-sweet.jpg'
import MathiasSchwarz from './images/mathias-schwarz.jpg'
import RoberthStrand from './images/roberth-strand.jpg';
import PavolHronsky from './images/pavol-hronsky.jpg';
import ThomasFangel from './images/thomas-fangel.jpg';
import FrancescaCarta from './images/francesca-carta.jpg';
import RasmusSteiniche from './images/rasmus-steiniche.jpg';
import JorgeLainfiesta from './images/jorge-lainfiesta.jpg';
import AndersLybecker from './images/anders-lybecker.jpg';

import SpeakerPhoto from './images/speaker-placeholder-image.jpg';
import ChevronDown from './svg/arrow-down.inline.svg';

import CamillaPhoto from './images/organizer-camilla-larsen.jpg';
import JinhongPhoto from './images/organizer-jinhong-brejnholt.jpg';
import KasperPhoto from './images/organizer-kasper-nielsen.jpg';

const TITLE = 'Speakers';

// TODO: replace id => index connect with only id`s
const ITEMS = [
  {
    id: '1',
    name: 'Jinhong Brejnholt',
    position: 'Chief Cloud Architect & Product Owner <br/> Saxo Bank A/S',
    content: '',
    photo: JinhongPhoto,
    linkedInUrl: 'https://www.linkedin.com/in/jbrejnholt',
    time: '9:00',
    title: 'Welcome',
    duration: '10 min',
  },
  {
    id: '2',
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
    id: '3',
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
    id: '4',
    name: 'Lucy Sweet',
    position: 'Senior Software Engineer <br/> Uber',
    content: 'A Senior Software Engineer working on Uber\'s stateless compute platform.',
    photo: LucySweet,
    linkedInUrl: 'https://linkedin.com/in/intunderflow',
    time: '9:30',
    title: 'Uber - Migrating 2 million CPU cores to Kubernetes',
    duration: '25 min',
  },
  {
    id: '5',
    name: 'Mathias Schwarz',
    position: 'Lead Platform Architect <br/> Lunar',
    content: 'A Senior Staff Software Engineer working on Uber\'s stateless compute platform.',
    photo: MathiasSchwarz,
    time: '9:30',
    title: 'Uber - Migrating 2 million CPU cores to Kubernetes',
    duration: '25 min',
  },
  {
    id: '8',
    name: 'Roberth Strand',
    position: 'Principal Cloud Engineer <br/> Amesto Fortytwo',
    content: 'Roberth is a self-proclaimed "cloud automator", and works primarily with Microsoft Azure infrastructure, Platform Engineering, DevOps and Cloud Native technology. He has been awarded the title Microsoft Azure MVP, CNCF Ambassador, as well as HashiCorp Ambassador. He has been an active speaker for several years, talking at everything from small local meetups to KubeCon.',
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
    content: 'Katharina is a passionate software engineer at Dynatrace. With a strong focus on Cloud Native solutions, her expertise lies in creating user-friendly software that seamlessly integrates with the cloud. <br>Starting her journey as a mobile developer and later transitioning to backend development, she discovered her true passion in the world of Cloud Native. <br>Katharina thrives in communities that foster idea exchange and knowledge sharing, as she believes in the power of collaboration and learning from others. Join her on this exciting journey of innovation and growth!',
    photo: KatharinaSick,
    linkedInUrl: 'https://www.linkedin.com/in/katharinasick/',
    time: '11:15',
    title: 'Principle of Least Privilege: How to Secure Kubernetes Without Making Users Hate You',
    duration: '35 min',
  },
  {
    id: '6',
    name: 'Eric D. Schabell',
    position: 'Director Evangelism <br/> Chronosphere',
    content: 'Eric is Chronosphere\'s Director Evangelism. He\'s renowned in the development community as a speaker, lecturer, author and baseball expert. His current role allows him to help the world understand the challenges they are facing with cloud native observability. He brings a unique perspective to the stage with a professional life dedicated to sharing his deep expertise of open source technologies, organizations, and is a CNCF Ambassador. Follow on https://www.schabell.org.',
    photo: EricDSchabell,
    twitterUrl: 'https://twitter.com/ericschabell',
    linkedInUrl: 'https://www.linkedin.com/in/ericschabell/',
    time: '10:25',
    title: 'Observability For You and Me with OpenTelemetry',
    duration: '35 min',
  },
  {
    id: '7',
    name: 'Allan Højgaard Jensen',
    position: 'Platform Development Specialist <br/> Netic',
    content: 'Allan Højgaard Jensen is working as Platform Development Specialist for Netic - a Trifork Company. He has worked with platform development for more years than he would like to admit and have a background in parallel and distributed computing. Furthermore he is part of the Cloud Native Aalborg Group.',
    photo: AllanHoejgaardJensen,
    linkedInUrl: 'https://www.linkedin.com/in/allanhoejgaardjensen',
    time: '10:25',
    title: 'Running prioritised workload in Kubernetes',
    duration: '35 min',
  },
  {
    id: '10',
    name: 'Pavol Hronsky',
    position: 'Head of Container Automation <br/> Nordea',
    content: 'An applied mathematician who shortly after finishing studies followed his other passion and turned into a software developer. Upon realisation that many issues originate with an unstable, or rather sometimes accidentally changing underlying deployment environment, Pavol started a search for technologies that would help him and his team to overcome these challenges. The investigation led him to container technologies. Nowadays, additionally to heading the Container Automation team in Nordea, he spends his time by advocating Kubernetes and DevOps mindset in his workplace.',
    photo: PavolHronsky,
    linkedInUrl: 'https://www.linkedin.com/in/pavol-hronsky/',
    time: '12:05',
    title: 'Observability For You and Me with OpenTelemetry',
    duration: '35 min',
  },
  {
    id: '11',
    name: 'Thomas Bøgh Fangel',
    position: 'Tech Lead and Senior Software Engineer <br/> Lunar',
    content: 'Thomas Bøgh Fangel is tech lead and backend developer at Lunar where he has been since the early startup days. He has been a part of the journey evolving the Lunar platform from a Rails monolith to the current event-driven microservice architecture on top of a Kubernetes based platform. Today, he spends most of his time as tech lead in the team responsible for Lunar\'s integration into the national clearings across the Nordics. He is a big fan of DDD, event sourcing and believes in the agile mindset of continuous improvement which lies at the heart of Lunar\'s journey.',
    photo: ThomasFangel,
    linkedInUrl: 'https://www.linkedin.com/in/thomasboeghfangel/',
    twitterUrl: 'https://twitter.com/tbfangel',
    time: '12:05',
    title: 'Event sourcing after page 1: How we built a cloud native bank',
    duration: '35 min',
  },
  {
    id: '12',
    name: 'Francesca Carta',
    position: 'Delivery Manager <br/> Mia-Platform',
    content: 'Francesca Carta is Delivery Manager at Mia-Platform and is responsible for simplifying product use and adoption. With a background in philosophy, she brings a unique perspective to technology. For the past six years she has been responsible for managing the development of an Internal Developer Platform for developers in Cloud Native. Francesca is dedicated to making technology accessible to everyone. Through critical thinking and a drive for innovation, she aims to make a positive impact.',
    photo: FrancescaCarta,
    linkedInUrl: 'https://www.linkedin.com/in/francesca-carta-a403594b/',
    time: '13:40',
    title: 'Platform Engineering Is Not About Tech',
    duration: '35 min',
  },
  {
    id: '13',
    name: 'Rasmus Steiniche',
    position: 'CEO <br/> Neurospace',
    content: 'Rasmus Steiniche is the CEO of Neurospace and has done everything from writing java applications. doing SaaS applications before it was cool, creating one of Denmark\'s biggest multi-cloud strategies, and creating big data and machine learning platforms.<br>Rasmus has been part of the Cloud Native and DevOps movement since 2014 and has since moved on to create data and machine learning applications.<br>Neurospace is a technology partner helping other companies on their data and machine learning journey to become better at what they do.',
    photo: RasmusSteiniche,
    linkedInUrl: 'https://www.linkedin.com/in/steiniche/',
    time: '13:40',
    title: 'Cloud Native Data Platforms - The why, what and how',
    duration: '35 min',
  },
  {
    id: '14',
    name: 'Jorge Lainfiesta',
    position: 'Developer Relations <br/> Roadie.io',
    content: 'Jorge is the author of the Linux Foundation Introduction to Backstage (LFS142) course and has helped enterprises, consultancies, and startups adopt Backstage. He has a background in software engineering (ex-PayPal) and digital communication (UCLA). He\'s also a certified sommelier (CETT Barcelona).',
    photo: JorgeLainfiesta,
    linkedInUrl: 'https://www.linkedin.com/in/jrlainfiesta/',
    time: '14:30',
    title: 'Is Backstage for me? A systematic approach to deciding if and how to use the framework successfully',
    duration: '35 min',
  },
  {
    id: '15',
    name: 'Anders Lybecker',
    position: 'Principal Software Development Engineer Lead <br/> Microsoft',
    content: 'Anders Lybecker is a Principal Software Engineering Lead, former Global Black Belt IoT specialist and Technical Evangelist at Microsoft. He has many years of experience as a cloud architect, working with some of the biggest accounts at Microsoft. VW, WHO, Vestas, NHS, Nokia.',
    photo: AndersLybecker,
    linkedInUrl: 'https://www.linkedin.com/in/anderslybecker/',
    twitterUrl: 'https://twitter.com/Lybecker',
    time: '14:30',
    title: 'Carbon-Aware Computing: Measuring and Reducing the Carbon Intensity of Software',
    duration: '35 min',
  },
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
