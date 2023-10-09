/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';

import AllanHoejgaardJensen from './images/allan-hoejgaard-jensen.jpg';
import EricDSchabell from './images/eric-d-schabell.jpg';
import KatharinaSick from './images/katharina-sick.jpg';
import LucySweet from './images/lucy-sweet.jpg';
import MathiasSchwarz from './images/mathias-schwarz.jpg';
import RoberthStrand from './images/roberth-strand.jpg';
import SpeakerPhoto from './images/speaker-placeholder-image.jpg';
import CamillaPhoto from './images/organizer-camilla-larsen.jpg';
import JinhongPhoto from './images/organizer-jinhong-brejnholt.jpg';
import KasperPhoto from './images/organizer-kasper-nielsen.jpg';
import PavolHronsky from './images/pavol-hronsky.jpg';
import ThomasFangel from './images/thomas-fangel.jpg';
import FrancescaCarta from './images/francesca-carta.jpg';
import RasmusSteiniche from './images/rasmus-steiniche.jpg';
import JorgeLainfiesta from './images/jorge-lainfiesta.jpg';
import AndersLybecker from './images/anders-lybecker.jpg';
import EmilMunkso from './images/emil-munkso.jpg';
import TimothyMamo from './images/timothy-mamo.jpg';
import MadsDanquah from './images/mads-danquah.jpg';
import StephaneKaragulmez from './images/stephane-karagulmez.png';
import EnginDiri from './images/engin-diri.jpg';
import MikkelHegnhoj from './images/mikkel-hegnhoj.jpg';
import NicVermande from './images/nicolas-vermande.jpg';
import ThomasLabarussias from './images/thomas-labarussias.jpg';
import VicenteMiras from './images/vicente-miras.jpg';
import PeterRasmussen from './images/peter-rasmussen.jpg';
import RicardoRocha from './images/ricardo-rocha.jpg';

// TODO: merge with ITEMS array from components/pages/home/speakers
const ITEMS = [
  {
    time: '8:00',
    title: 'Registration and Breakfast',
    duration: '60 min',
  },
  {
    time: '9:00',
    title: 'Welcome',
    duration: '10 min',
    speakers: [
      {
        id: '5',
        name: 'Jinhong Brejnholt',
        photo: JinhongPhoto,
      },
      {
        id: '7',
        name: 'Camilla Larsen',
        photo: CamillaPhoto,
      },
      {
        id: '10',
        name: 'Kasper Borg Nissen',
        photo: KasperPhoto,
      },
    ],
  },
  {
    id: '2',
    time: '9:10',
    title: 'Keynote: JYSK (Sponsored)',
    duration: '10 min',
    isKeynote: true,
    // speakers: [
    //   {
    //     id: '25',
    //     name: 'Peter Rasmussen',
    //     photo: PeterRasmussen,
    //   },
    // ],
  },
  {
    id: '3',
    time: '9:20',
    title: 'Keynote: Coding Pirates (Sponsored)',
    duration: '10 min',
    isKeynote: true,
    // TODO thv: add speaker
  },
  {
    // 4
    id: '4',
    time: '9:30',
    title: 'Uber - Migrating 2 million CPU cores to Kubernetes',
    duration: '25 min',
    isKeynote: true,
    speakers: [
      {
        id: '9',
        name: 'Lucy Sweet',
        photo: LucySweet,
      },
      {
        id: '13',
        name: 'Mathias Schwarz',
        photo: MathiasSchwarz,
      },
    ],
    presentation:
      "Uber has been migrating all of its stateless compute fleet from a pre-Kubernetes system called Peloton to Kubernetes, in this presentation we want to share with you why we decided to migrate our fleet to Kubernetes, the challenges we've faced and how we're adapting our systems to run millions of workloads on top of dozens of Kubernetes clusters.",
  },
  {
    id: '5',
    time: '9:55',
    title: 'Platinum Sponsors Pitches',
    duration: '15 min',
  },
  {
    time: '10:10',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '7',
    time: '10:25',
    title: 'Observability For You and Me with OpenTelemetry',
    duration: '35 min',
    speakers: [
      {
        id: '15',
        name: 'Eric D. Schabell',
        photo: EricDSchabell,
      },
    ],
    presentation:
      'Are you interested in dipping your toes in the cloud native observability waters, but as an engineer you are not sure where to get started with tracing your microservices and applications on Kubernetes? Then this is the session for you, where we take you on your first steps in an active open-source project that offers a buffet of opportunities for getting started with telemetry data. <br><br> The project, openTelemetry (OTEL), is where we start with de-mystifying key concepts and terms such as observability, telemetry, instrumentation to lay a foundation. Then we’ll explore the OTEL community and how to become not only an end-user, but possibly a contributor.<br><br> We will wrap up with an overview of the components in this project, such as the Collector, the OTEL protocol (OTLP), its APIs, and its SDKs.<br><br> Attendees will leave with an understanding of key observability concepts in distributed tracing!',
    coincidedEvent: {
      id: '71',
      time: '10:25',
      title: 'Running prioritised workload in Kubernetes',
      duration: '35 min',
      speakers: [
        {
          id: '14',
          name: 'Allan Højgaard Jensen',
          photo: AllanHoejgaardJensen,
        },
      ],
      presentation:
        'There are different ways to run workloads efficiently in kubernetes. Some workloads are using prioritisation at scheduling time, using a zero overcommit of resources like e.g. cpu and memory, others are ok with the overcommitment of cpu, and quite frankly there are some myths concerning the requests & limits and what they actually mean, preemption may happen unless you have additional validation against accumulated real capacity. If you have multiple workloads that are not equally important, then you may want to specify what is the priority of these workloads.  <br /> <br /> This session gives an introduction to the scheduling above and the PriorityClasses used in our Secure Cloud Stack are introduced. Furthermore, some of the concerns you may not initially consider e.g. using PriorityClasses together with e.g. Operators & other objects creating pods, which "may" or "may not" have the same priority.',
    },
  },
  {
    // 8
    time: '11:00',
    title: 'Coffee Break',
    duration: '15 min',
  },
  {
    id: '9',
    time: '11:15',
    title: 'The Platform Engineering Journey',
    duration: '35 min',
    speakers: [{ id: '0', name: 'Roberth Strand', photo: RoberthStrand }],
    presentation:
      'More often than not, people in tech struggle with technical decisions and strategy, rather than technical implementations. <br><br>Over the years, I have observed trends come and go, but there have been a couple that truly make a difference. One of the more recent trends is that of Platform Engineering, which is the accumulation of what we have learned over the years in IT-operations, combining DevOps with a product mindset to make sure that developers can focus on creating business value instead of having to deal with infrastructure and cloud architecture decisions. <br><br> In this talk, I would like to explore some of the common pitfalls and benefits of Platform Engineering, talk about my experiences going from traditional sysadmin to platform engineer, and give you all a great start on your platform engineering journey.',
    coincidedEvent: {
      id: '91',
      time: '11:15',
      title: 'Principle of Least Privilege: How to Secure Kubernetes Without Making Users Hate You',
      duration: '35 min',
      speakers: [
        {
          id: '1',
          name: 'Katharina Sick',
          photo: KatharinaSick,
        },
      ],
      presentation:
        "According to OWASP, insecure workload configuration is the top security problem in Kubernetes. As modern Kubernetes clusters evolve from mere container orchestrators to versatile control planes managing various resources, minimizing the attack surface of these clusters becomes even more critical. <br>But security shouldn't come at the expense of user experience. This talk will cover the Principle of Least Privilege (PoLP) and how it can be applied to balance robust security and a good experience for users and administrators. Moreover, it will extend this principle to ArgoCD and Crossplane and explore the differences between the PoLP and Zero Trust and how they're complementary. <br>Join me to discover how the Principle of Least Privilege, applied to Kubernetes, ArgoCD, and Crossplane, empowers you to safeguard your Kubernetes ecosystem without making yourself and your users suffer.",
    },
  },
  {
    time: '11:50',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '11',
    time: '12:05',
    title: 'GitOps or a Journey to a Production Incident and Swiftly Back Again',
    duration: '35 min',
    speakers: [
      {
        id: '15',
        name: 'Pavol Hronsky',
        photo: PavolHronsky,
      },
    ],
    presentation:
      'GitOps is a modern approach to managing and automating the deployment and operations of applications and infrastructure. Yet, a small configuration change can cause a large production incident.<br><br>During the presentation we introduce an audience to the main GitOps principles and actors. Subsequently, using a real life example of a production incident caused by a series of wrong decisions and bad controls, we highlight the pitfalls of GitOps mechanisms. We will discuss a series of simple tricks to future-proof and remedy those. <br><br>Lastly, to finish on a positive note, a swift troubleshooting by inspecting audit logs will reveal the culprit and the same way how we caused the incident we will be able to fix it.',
    coincidedEvent: {
      id: '111',
      time: '12:05',
      title: 'Event sourcing after page 1: How we built a cloud native bank',
      duration: '35 min',
      speakers: [
        {
          id: '16',
          name: 'Thomas Bøgh Fangel',
          photo: ThomasFangel,
        },
      ],
      presentation:
        'Lunar has been cloud native from the beginning. With our banking license in 2019 came the challenge of building a banking backend in the cloud. Since page 1 of any book on event sourcing contains a bank account as example, Lunar’s backend of course had to be event-sourced. Our account ledger has now scaled to serve nearly 1M Danish bank accounts, and event sourcing has become a sharp knife in our toolbox - widely in use across many domains and teams. <br> This hasn’t just been an easy ride. <br /> <br />  In this talk, I will share the journey of building the Lunar banking backend with event sourcing at the center. Among other things, expect to hear about snapshotting, long-lived event streams, event evolution, event replay, and unbounded state. Possibly mixed with some bits about the challenges - or advantages - of doing event sourcing in a cloud native environment.',
    },
  },
  {
    time: '12:40',
    title: 'Lunch',
    duration: '1 hr',
  },
  {
    id: '13',
    time: '13:40',
    title: 'Platform Engineering Is Not About Tech',
    duration: '35 min',
    speakers: [
      {
        id: '3',
        name: 'Francesca Carta',
        photo: FrancescaCarta,
      },
    ],
    presentation:
      "“What are we using for pipelines? Which infrastructure do we support? Is service mesh enabled?”. These types of questions - revolving on tech choices and implementation - currently occupy most of the conversations around platform engineering. <br> According to most evidence, though, these are not the only things that make a cloud-native platform successful: cultural change, communication and collaboration, - among others - play a key role in determining the success of platform transformation. If we don't address change comprehensively, the risk is that in a few years we'll discover that platforms are not bringing the results we expected. <br> In this talk we'll see some key aspects that are often overlooked in implementing a platform and how it's possible to address them along the way. Learn from our pitfalls and lessons to build a successful cloud-native platform.",
    coincidedEvent: {
      id: '131',
      time: '13:40',
      title: 'Cloud Native Data Platforms - The why, what and how',
      duration: '35 min',
      speakers: [
        {
          id: 17,
          name: 'Rasmus Steiniche',
          photo: RasmusSteiniche,
        },
      ],
      presentation:
        'It is exciting times in the data world, where new methods, technologies and especially AI and machine learning is on the rise. But how do you support other teams on this journey as a Cloud Native practitioner? This talk will do a developer based introduction to the history of data platforms and machine learning. It will take the participants through the history from the early data warehouses up until the data mesh. Cloud Native practitioners will see that many of the movements we had in the Cloud Native circle, such as micro services and platform engineering, is now on the rise in the data world. We are seeing data contract, distributed computing, specialized databases and software principles being applied to Machine Learning, even portable / in a box data stacks. After this talk the participants should be able to talk with the data, data scientists and analytics teams they have at home.',
    },
  },
  {
    id: '14',
    time: '14:15',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '15',
    time: '14:30',
    title:
      'Is Backstage for me? A systematic approach to deciding if and how to use the framework successfully',
    duration: '35 min',
    speakers: [
      {
        id: '4',
        name: 'Jorge Lainfiesta',
        photo: JorgeLainfiesta,
      },
    ],
    presentation:
      "You've heard of Backstage and its sweet promises. However, as you talk with more and more people about their experience, you'll notice people are using Backstage in different ways and achieving varied levels of success. <br> Jorge has talked with dozens of Backstage adopters, including teams who have used it for over two years. Where do people see success in their Internal Developer Portal journey? Where do people struggle? <br> In this talk, Jorge will share common approaches and pitfalls companies have seen when driving their Platform using Backstage. The talk will dive into which features to use, when, and how to overcome limitations to make the most out of Backstage.",
    coincidedEvent: {
      id: '151',
      time: '14:30',
      title: 'Carbon-Aware Computing: Measuring and Reducing the Carbon Intensity of Software',
      duration: '35 min',
      speakers: [
        {
          name: 'Anders Lybecker',
          photo: AndersLybecker,
        },
      ],
      presentation:
        "In today's world, software technologies have become an integral part of our lives. However, the rapid growth in software technologies and democratization through cloud services has provided organizations with unprecedented access to computational power, which could incur high energy usage and associated emissions costs. <br /> <br /> To accelerate our technological progress in a sustainable manner, software itself needs the ability to measure and reduce its impact on carbon emissions.  <br /> <br /> This presentation will introduce the concept of carbon-aware computing and discuss how it can you design solution to lower the carbon footprint. By attending this presentation, you will gain a better understanding of how to make your organization's software stack more environmentally friendly while still maintaining its functionality and performance.",
    },
  },
  {

    time: '15:05',
    title: 'Coffee and Cake Break',
    duration: '35 min',
  },
  {
    id: '17',
    time: '15:40',
    title: 'Application promotion in GitOps',
    duration: '5 min',
    speakers: [
      {
        id: '18',
        name: 'Emil Munksø',
        photo: EmilMunkso,
      },
    ],
    presentation:
      'GitOps is easy to adopt when you have a single cluster and a single environment. But when you scale out the solution you will encounter the issue of promoting your application through environment tiers. I will shed some light on what the issue of adopting GitOps in relation to promotion does to your ecosystem, and then present some possible solution ideas for how to approach the challenge based on different aspects of a company context.',
    coincidedEvent: {
      time: '15:40',
      title: 'Networking',
      duration: '5 min',
    },
  },
  {
    id: '18',
    time: '15:45',
    title: 'DevOps Lessons from a Primary School Teacher',
    duration: '5 min',
    speakers: [
      {
        id: '6',
        name: 'Timothy Mamo',
        photo: TimothyMamo,
      },
    ],
    presentation:
      "Over the years I've heard from my wife about strategies implemented by teachers to enable children in class to learn, thinking this would be great for the tech industry! <br> In this talk I'll go over some strategies common place to primary school teachers that are novel to us, but shouldn't be, and how it will help us in our day to day activities.",
    coincidedEvent: {
      time: '15:45',
      title: 'Networking',
      duration: '5 min',
    },
  },
  {
    id: '19',
    time: '15:50',
    title: 'Prioritising the tricky stuff when building your platform',
    duration: '5 min',
    speakers: [
      {
        id: '11',
        name: 'Mads Høgstedt Danquah',
        photo: MadsDanquah,
      },
    ],
    presentation:
      'We sure are building a lot of platforms these days, and man - they are not easy to build. <br> Platform are products and products-work includes a lot of challenges we as busy tech-focused people can have a bad habit of forgetting. <br> This talk will present 3 super-concrete things you can do to ensure that you prioritise some of the tricky stuff that will make your customers love your product.',
    coincidedEvent: {
      time: '15:50',
      title: 'Networking',
      duration: '5 min',
    },
  },
  {
    id: '20',
    time: '15:55',
    title: 'Unlocking Next-Gen Networking and Security with Cilium Service Mesh',
    duration: '5 min',
    speakers: [
      {
        id: '12',
        name: 'Stephane Karagulmez',
        photo: StephaneKaragulmez,
      },
    ],
    presentation:
      "Unlock the power of eBPF with Cilium Service Mesh: a transformational tool redefining Kubernetes' networking and security landscape. In just five minutes, we'll journey through how Cilium bypasses conventional networking limitations, creating high-performance, fine-grained security policies. Witness the magic of seamless service-to-service communication and learn why Cilium Service Mesh is not just another tool, but the future blueprint for cloud-native networking and security.",
    coincidedEvent: {
      time: '15:55',
      title: 'Networking',
      duration: '5 min',
    },
  },
  {
    time: '16:00',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '22',
    time: '16:15',
    title: 'Closing Keynote',
    duration: '25 min',
    isKeynote: true,
    speakers: [
      {
        id: '19',
        name: 'Ricardo Rocha',
        photo: RicardoRocha,
      },
    ],
  },
  {
    time: '16:40',
    title: 'Thank you by Coding Pirates',
    duration: '5 min',
  },
  {
    time: '16:45',
    title: 'Surprises and raffles',
    duration: '5 min',
  },
  {
    time: '16:50',
    title: 'Closing',
    duration: '10 min',
  },
];

const Schedule = ({ location }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCoincidedEvent, setIsCoincidedEvent] = useState(false);
  const [modalDataId, setModalDataId] = useState(0);

  const handleModalShow = (id) => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
    setModalDataId(id);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
    setIsCoincidedEvent(false);
    setModalDataId(0);
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { state = {} } = location;

      if (state?.modalId) {
        handleModalShow(Number(state.modalId));
      }

      if (state?.isCoincidedEvent) {
        setIsCoincidedEvent(true);
      }
    }
  }, [location]);

  return (
    <section className="safe-paddings pt-9 pb-48 lg:px-8 md:px-5 sm:pt-10 xs:px-0">
      <ul className="mx-auto w-[1072px] max-w-full rounded-[10px] border border-primary-2 shadow-lg">
        {ITEMS.map(({ id, time, title, duration, isKeynote, speakers, coincidedEvent }, index) => {
          const isEven = index % 2 === 1;

          return (
            <li
              className={clsx(
                'grid grid-cols-[114px_1fr] md:grid-cols-[106px_1fr] sm:grid-cols-1',
                {
                  'bg-primary-4': isEven,
                  'bg-primary-6': title === 'Welcome',
                  'bg-lightYellow': title === 'Lunch',
                  'bg-lightOrange': title === 'Closing',
                }
              )}
              key={index}
            >
              <div className="flex items-center justify-center sm:justify-start sm:px-5 sm:pt-5">
                <time className="mb-auto mt-7 text-[15px] font-semibold leading-none tracking-tight text-primary-1 opacity-60 md:mt-5 md:text-sm sm:my-0">
                  {time}
                </time>
                {isKeynote && (
                  <span className="ml-4 hidden rounded-full bg-red px-2 py-1.5 text-xs font-semibold leading-none tracking-tighter text-white sm:inline-flex">
                    Keynote
                  </span>
                )}
              </div>
              <div
                className={clsx('border-l border-l-primary-2 sm:border-none', {
                  'grid grid-cols-2 sm:grid-cols-1': coincidedEvent,
                })}
              >
                <div
                  className={clsx(
                    'flex flex-col gap-y-3 px-7 py-6 md:py-4 sm:gap-y-2 sm:px-5 sm:pb-4',
                    isKeynote ? 'sm:pt-2' : 'sm:pt-3'
                  )}
                >
                  <h3 className="inline-flex items-center gap-x-3">
                    {id ? (
                      <Button
                        className="!whitespace-normal !text-left text-lg !font-semibold !leading-snug tracking-tight text-primary-1 transition-colors duration-200 hover:text-blue-1 md:text-base"
                        theme="link-primary"
                        onClick={() => handleModalShow(index)}
                      >
                        {title}
                      </Button>
                    ) : (
                      <span className="text-lg font-semibold leading-snug tracking-tight text-primary-1 md:text-base">
                        {title}
                      </span>
                    )}
                    {isKeynote && (
                      <span className="rounded-full bg-red px-2 py-2 text-xs font-semibold leading-none tracking-tighter text-white sm:hidden">
                        Keynote
                      </span>
                    )}
                  </h3>
                  <div className="mt-auto flex items-center gap-x-8 sm:gap-x-7">
                    <span className="rounded-full bg-rasin px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-white text-primary-1 md:text-xs">
                      {duration}
                    </span>
                    {speakers && speakers.length > 0 && (
                      <ul className="relative inline-flex gap-x-5 before:absolute before:top-0 before:bottom-0 before:-left-4 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3 sm:gap-x-4">
                        {speakers.map(({ name, photo }, index) => (
                          <li className="" key={index}>
                            <figure className="flex items-center gap-x-2">
                              <img
                                className="h-7 w-7 rounded-full"
                                src={photo}
                                width={28}
                                height={28}
                                alt={name}
                                loading="lazy"
                              />
                              <figcaption className="text-sm font-medium leading-none text-primary-5 md:text-[13px]">
                                {name}
                              </figcaption>
                            </figure>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                {coincidedEvent && (
                  <div
                    className={clsx(
                      'flex flex-col gap-y-3 border-l border-primary-2 px-7 py-6 md:py-4 sm:gap-y-2 sm:border-t sm:border-l-0 sm:px-5 sm:pb-4',
                      isKeynote ? 'sm:pt-2' : 'sm:pt-3'
                    )}
                  >
                    <h3 className="inline-flex items-center gap-x-3">
                      {coincidedEvent.id ? (
                        <Button
                          className="!whitespace-normal !text-left text-lg !font-semibold !leading-snug tracking-tight text-primary-1 transition-colors duration-200 hover:text-blue-1 md:text-base"
                          theme="link-primary"
                          onClick={() => {
                            handleModalShow(index);
                            setIsCoincidedEvent(true);
                          }}
                        >
                          {coincidedEvent.title}
                        </Button>
                      ) : (
                        <span className="text-lg font-semibold leading-snug tracking-tight text-primary-1 md:text-base">
                          {coincidedEvent.title}
                        </span>
                      )}
                      {coincidedEvent.isKeynote && (
                        <span className="rounded-full bg-red px-4 py-2 text-xs font-semibold leading-none tracking-tighter text-white sm:hidden">
                          Keynote
                        </span>
                      )}
                    </h3>
                    <div className="mt-auto flex items-center gap-x-8 sm:gap-x-7">
                      <span className="rounded-full bg-rasin px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-white text-primary-1 md:text-xs">
                        {coincidedEvent.duration}
                      </span>
                      {coincidedEvent.speakers && coincidedEvent.speakers.length > 0 && (
                        <ul className="relative inline-flex gap-x-5 before:absolute before:top-0 before:bottom-0 before:-left-4 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3 sm:gap-x-4">
                          {coincidedEvent.speakers.map(({ name, photo }, index) => (
                            <li className="" key={index}>
                              <figure className="flex items-center gap-x-2">
                                <img
                                  className="h-7 w-7 rounded-full"
                                  src={photo}
                                  width={28}
                                  height={28}
                                  alt={`${name} photo`}
                                  loading="lazy"
                                />
                                <figcaption className="text-sm font-medium leading-none text-primary-5 md:text-[13px]">
                                  {name}
                                </figcaption>
                              </figure>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <Modal
        modalData={isCoincidedEvent ? ITEMS[modalDataId].coincidedEvent : ITEMS[modalDataId]}
        isVisible={isModalVisible}
        isPresentationShow
        onModalHide={handleModalHide}
      />
    </section>
  );
};

export default Schedule;
