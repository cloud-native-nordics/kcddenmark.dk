/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';

import AllanHoejgaardJensen from './images/allan-hoejgaard-jensen.jpg';
import EricDSchabell from './images/eric-d-schabell.jpg';
import KatharinaSick from './images/katharina-sick.jpg';
import LucySweet from './images/lucy-sweet.jpg'
import MathiasSchwarz from './images/mathias-schwarz.jpg'
import RoberthStrand from './images/roberth-strand.jpg';
import SpeakerPhoto from './images/speaker-placeholder-image.jpg';
import CamillaPhoto from './images/organizer-camilla-larsen.jpg';
import JinhongPhoto from './images/organizer-jinhong-brejnholt.jpg';
import KasperPhoto from './images/organizer-kasper-nielsen.jpg';

// TODO: merge with ITEMS array from components/pages/home/speakers
const ITEMS = [
  {
    time: '8:00',
    title: 'Registration and Breakfast',
    duration: '60 min',
  },
  {
    id: '1',
    time: '9:00',
    title: 'Welcome',
    duration: '10 min',
    speakers: [
      {
        id: '1',
        name: 'Jinhong Brejnholt',
        photo: JinhongPhoto,
      },
      {
        id: '2',
        name: 'Camilla Larsen',
        photo: CamillaPhoto,
      },
      {
        id: '3',
        name: 'Kasper Borg Nissen',
        photo: KasperPhoto,
      },
    ],
  },
  {
    time: '9:10',
    title: 'Keynote: Jysk',
    duration: '10 min',
    isKeynote: true,
    // TODO thv: add speaker
  },
  {
    time: '9:20',
    title: 'Keynote: Coding Pirates',
    duration: '10 min',
    isKeynote: true,
    // TODO thv: add speaker
  },
  {
    id: '2',
    time: '9:30',
    title: 'Uber - Migrating 2 million CPU cores to Kubernetes',
    duration: '25 min',
    isKeynote: true,
    speakers: [
      {
        id: '4',
        name: 'Lucy Sweet',
        photo: LucySweet,
      },
      {
        id: '5',
        name: 'Mathias Schwarz',
        photo: MathiasSchwarz,
      },
    ],
    presentation:
      'Uber has been migrating all of its stateless compute fleet from a pre-Kubernetes system called Peloton to Kubernetes, in this presentation we want to share with you why we decided to migrate our fleet to Kubernetes, the challenges we\'ve faced and how we\'re adapting our systems to run millions of workloads on top of dozens of Kubernetes clusters.',
  },
  {
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
    id: '3',
    time: '10:25',
    title: 'Observability For You and Me with OpenTelemetry',
    duration: '35 min',
    speakers: [
      {
        id: '6',
        name: 'Eric D. Schabell',
        photo: EricDSchabell,
      },
    ],
    presentation:
      'Are you interested in dipping your toes in the cloud native observability waters, but as an engineer you are not sure where to get started with tracing your microservices and applications on Kubernetes? Then this is the session for you, where we take you on your first steps in an active open-source project that offers a buffet of opportunities for getting started with telemetry data. The project, openTelemetry (OTEL), is where we start with de-mystifying key concepts and terms such as observability, telemetry, instrumentation to lay a foundation. Then we\’ll explore the OTEL community and how to become not only an end-user, but possibly a contributor. We will wrap up with an overview of the components in this project, such as the Collector, the OTEL protocol (OTLP), its APIs, and its SDKs. Attendees will leave with an understanding of key observability concepts in distributed tracing!',
    coincidedEvent: {
      id: '4',
      time: '10:25',
      title: 'Running prioritised workload in Kubernetes',
      duration: '35 min',
      speakers: [
        {
          id: '7',
          name: 'Allan Højgaard Jensen',
          photo: AllanHoejgaardJensen,
        },
      ],
      presentation:
        'There are different ways to run workloads efficiently in kubernetes. Some workloads are using prioritisation at scheduling time, using a zero overcommit of ressources like e.g. cpu and memory, others are ok with the overcommitment of cpu, and quite frankly there are some myths concerning the requests & limits and what they actually mean, preemption may happen unless you have additional validation against accumulated real capacity. If you have multiple workloads that are not equally important, then you may want to specify what is the priority of these workloads. This session gives an introduction to the scheduling above and the PriorityClasses used in our Secure Cloud Stack are introduced. Furthermore, some of the concerns you may not initially consider e.g. using PriorityClasses together with e.g. Operators & other objects creating pods, which "may" or "may not" have the same priority.',
    },
  },
  {
    time: '11:00',
    title: 'Coffee Break',
    duration: '15 min',
  },
  {
    id: '5',
    time: '11:15',
    title: 'The Platform Engineering Journey',
    duration: '35 min',
    speakers: [
      {
        id: '8',
        name: 'Roberth Strand',
        photo: RoberthStrand,
      },
    ],
    presentation:
      'More often than not, people in tech struggle with technical decisions and strategy, rather than technical implementations. Over the years, I have observed trends come and go, but there have been a couple that truly make a difference. One of the more recent trends is that of Platform Engineering, which is the accumulation of what we have learned over the years in IT-operations, combining DevOps with a product mindset to make sure that developers can focus on creating business value instead of having to deal with infrastructure and cloud architecture decisions. <br> In this talk, I would like to explore some of the common pitfalls and benefits of Platform Engineering, talk about my experiences going from traditional sysadmin to platform engineer, and give you all a great start on your platform engineering journey.',
    coincidedEvent: {
      id: '6',
      time: '11:15',
      title: 'Principle of Least Privilege: How to Secure Kubernetes Without Making Users Hate You',
      duration: '35 min',
      speakers: [
        {
          id: '9',
          name: 'Katharina Sick',
          photo: KatharinaSick,
        },
      ],
      presentation:
        'According to OWASP, insecure workload configuration is the top security problem in Kubernetes. As modern Kubernetes clusters evolve from mere container orchestrators to versatile control planes managing various resources, minimizing the attack surface of these clusters becomes even more critical. <br>But security shouldn\'t come at the expense of user experience. This talk will cover the Principle of Least Privilege (PoLP) and how it can be applied to balance robust security and a good experience for users and administrators. Moreover, it will extend this principle to ArgoCD and Crossplane and explore the differences between the PoLP and Zero Trust and how they\'re complementary. <br>Join me to discover how the Principle of Least Privilege, applied to Kubernetes, ArgoCD, and Crossplane, empowers you to safeguard your Kubernetes ecosystem without making yourself and your users suffer.',
    },
  },
  {
    time: '11:50',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '7',
    time: '12:05',
    title: 'Responsible AI: The Key to Ethical, Safe and Inclusive Software Development',
    duration: '35 min',
    speakers: [
      {
        id: '10',
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
    ],
    presentation:
      'The development of artificial intelligence (AI) has the potential to \n' +
      'revolutionize many aspects of society, but it also poses significant ethical \n' +
      'and societal challenges. Responsible AI refers to the development and use\n' +
      'of AI in a manner that is ethical, transparent, and accountable, and is \n' +
      'crucial to ensure that the potential benefits of AI are realized while \n' +
      'minimizing negative consequences.\n' +
      'In her talk, Lisa Falco will present frameworks and advice to develop \n' +
      'ethical and interpretable AI. The frameworks are based on a long \n' +
      'experience of developing machine learning applications within the \n' +
      'medically regulated field. They cover multiple layers of the development \n' +
      'process - the data, the model, and the human interaction. These are \n' +
      'hands-on frameworks that clearly indicate which considerations are \n' +
      'needed at every phase of the implementation and distributes roles and \n' +
      'responsibilities. \n' +
      'The principles and practices of responsible AI can be extended to the \n' +
      'development of software in general. By placing a focus on ethics, \n' +
      'transparency, and accountability, software development can be done in a \n' +
      'way that is more inclusive and beneficial for society, and that minimizes \n' +
      'negative consequences. Additionally, considering issues such as fairness, \n' +
      'bias, privacy, security, and transparency in the software development \n' +
      'process can help ensure that the software is safe and secure to use.',
    coincidedEvent: {
      id: '8',
      time: '12:05',
      title: 'What Anime Taught Me About K8s & Tech Careers',
      duration: '35 min',
      speakers: [
        {
          id: '11',
          name: 'Cloud Zefra',
          photo: SpeakerPhoto,
        },
      ],
      presentation:
        'From One piece and Naruto to Neon Genesis Evangelion and DragonBall, Japanese animation is a cultural phenomena. This session will take you through both the landscape of anime and Kubernetes development, with helpful beginner tips to get you started on your cloud native journey. The session will also cover what the hero’s of East blue and Planet 4032-877 can tech us about career development tech world. Importance of perseverance, inclusion & diversity as well as always having a snack at hand - come and learn how anime can your boost you Kubernetes and tech career to next level!\n',
    },
  },
  {
    time: '12:40',
    title: 'Lunch',
    duration: '1h',
  },
  {
    id: '9',
    time: '13:40',
    title: 'Buzzing Across the Cloud Native Landscape with eBPF',
    duration: '35 min',
    speakers: [
      {
        id: '12',
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
    ],
    presentation:
      'The buzz around eBPF in cloud native is growing quickly and it can be hard to know where to start or how to keep\n' +
      'up. In this talk, Bill will trace how he got into eBPF, explore where eBPF fits on the cloud native landscape, and\n' +
      'teach others how to dive into the hive of activity around eBPF.\n' +
      '\n\n\n' +
      'People just beginning with eBPF will learn how eBPF makes it possible to have efficient networking, observability\n' +
      'without instrumentation, effortless tracing, and real-time security (among other things). Those already familiar with\n' +
      'eBPF will get an overview of the eBPF landscape and learn about many eBPF applications on the cloud native\n' +
      'landscape that allow them to harness the power without needing to dive into the bytecode. The audience will walk\n' +
      'away with an understanding of the buzz around eBPF and knowledge of tools that may solve some of their\n' +
      'problems in networking, observability, and security.',
    coincidedEvent: {
      id: '10',
      time: '13:40',
      title: 'Streamlined Troubleshooting in Kubernetes',
      duration: '35 min',
      speakers: [
        {
          id: '13',
          name: 'Cloud Zefra',
          photo: SpeakerPhoto,
        },
      ],
      presentation:
        'In this talk, we will highlight different methods to make debugging and troubleshooting in Kubernetes more streamlined and organized. People tend to mostly make the same mistakes and run into errors others have already dealt with. There are different methodologies and tools that help us to benefit from that and to more easily find where the problem lies when something goes wrong by adhering to clear solving strategies and automation tools.\n' +
        '\n' +
        'We will go through some of these techniques and see the respective open source tools in action. Live coding\n' +
        'included!',
    },
  },
  {
    time: '14:15',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '11',
    time: '14:30',
    title: 'Native Histograms in Prometheus: A Better Histogram Experience for Everyone',
    duration: '35 min',
    speakers: [
      {
        id: '14',
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
    ],
    presentation:
      'Histograms are crucial for anyone who wants to track service latency and other numeric value distributions in Prometheus. However, the existing "legacy" histograms in Prometheus come with a number of painful drawbacks: they require manual and static bucket configuration, generate a separate time series for each configured histogram bucket, and thus require you to make hard tradeoffs between a histogram\'s resolution and cost.\n' +
      '\n' +
      'In this talk, Prometheus co-founder Julius Volz will present a new "native" histogram metric type that is currently being added to Prometheus. These native histograms allow you to track value distributions in higher detail at a significantly lower storage and processing cost, while also reducing the manual bucket configuration effort. Julius will explain how native histograms work, how they achieve these key benefits, and how you can use them in Prometheus today in an experimental fashion.',
    coincidedEvent: {
      id: '12',
      time: '14:30',
      title: 'Tales of Serverless - a story about building scalable applications',
      duration: '35 min',
      speakers: [
        {
          id: '15',
          name: 'Cloud Zefra',
          photo: SpeakerPhoto,
        },
      ],
      presentation:
        'In this talk Reto is going to tell a story about building Scalable Serverless cloud-native Applications. Using the magic of the Knative serverless platform, you are going to experience applications that are going to appear and\n' +
        "disappear. We'll wander the foreign lands of the Serverless ecosystem, guided by fairies, conquering mythical beings and unimaginable challenges. \n" +
        "Together, we'll get to know the mechanics and inner workings of this magical world. Hopefully, by the end of this talk, we'll be able to lift the spell and enchantments to see and understand the mechanics behind the curtains.\n" +
        '\n' +
        'Whether you are a brave developer-knight, a mighty operator-king or simply an interested serverless-bard, this presentation should not be scaled-to-zero.',
    },
  },
  {
    time: '15:05',
    title: 'Coffee and Cake Break',
    duration: '35 min',
  },
  {
    id: '13',
    time: '15:40',
    title: 'Securing your Software Supply Chain on Kubernetes with Sigstore',
    duration: '5 min',
    speakers: [
      {
        id: '16',
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
    ],
    presentation:
      'How secure are the images running in your Kubernetes cluster right now? If you don’t know, then this talk is for you! In this talk, Priya Wadhwa will discuss how to determine the composition and vulnerability risk of your images. She’ll cover how to secure your images with easy container signing through Sigstore, and how to enforce policies against your images in your Kubernetes cluster with the Sigstore policy-controller. This talk will demo how to set this up while diving in to the SLSA principles of software supply chain security and how they can be applied to secure a build pipeline. \n',
    coincidedEvent: {
      time: '15:40',
      title: 'Networking',
      duration: '5 min',
    },
  },
  {
    id: '14',
    time: '15:45',
    title: 'Securing your Software Supply Chain on Kubernetes with Sigstore',
    duration: '5 min',
    speakers: [
      {
        id: '17',
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
    ],
    presentation:
      'How secure are the images running in your Kubernetes cluster right now? If you don’t know, then this talk is for you! In this talk, Priya Wadhwa will discuss how to determine the composition and vulnerability risk of your images. She’ll cover how to secure your images with easy container signing through Sigstore, and how to enforce policies against your images in your Kubernetes cluster with the Sigstore policy-controller. This talk will demo how to set this up while diving in to the SLSA principles of software supply chain security and how they can be applied to secure a build pipeline. \n',
    coincidedEvent: {
      time: '15:45',
      title: 'Networking',
      duration: '5 min',
    },
  },
  {
    id: '15',
    time: '15:50',
    title: 'Securing your Software Supply Chain on Kubernetes with Sigstore',
    duration: '5 min',
    speakers: [
      {
        id: '18',
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
    ],
    presentation:
      'How secure are the images running in your Kubernetes cluster right now? If you don’t know, then this talk is for you! In this talk, Priya Wadhwa will discuss how to determine the composition and vulnerability risk of your images. She’ll cover how to secure your images with easy container signing through Sigstore, and how to enforce policies against your images in your Kubernetes cluster with the Sigstore policy-controller. This talk will demo how to set this up while diving in to the SLSA principles of software supply chain security and how they can be applied to secure a build pipeline. \n',
    coincidedEvent: {
      time: '15:50',
      title: 'Networking',
      duration: '5 min',
    },
  },
  {
    id: '16',
    time: '15:55',
    title: 'Securing your Software Supply Chain on Kubernetes with Sigstore',
    duration: '5 min',
    speakers: [
      {
        id: '19',
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
    ],
    presentation:
      'How secure are the images running in your Kubernetes cluster right now? If you don’t know, then this talk is for you! In this talk, Priya Wadhwa will discuss how to determine the composition and vulnerability risk of your images. She’ll cover how to secure your images with easy container signing through Sigstore, and how to enforce policies against your images in your Kubernetes cluster with the Sigstore policy-controller. This talk will demo how to set this up while diving in to the SLSA principles of software supply chain security and how they can be applied to secure a build pipeline. \n',
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
    id: '17',
    time: '16:15',
    title:
      "Process is what naturally follows - a cloud platform's guide on people-first transformation",
    duration: '25 min',
    isKeynote: true,
    speakers: [
      {
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
    ],
    presentation:
      "The fastest way to change the world is by making it a business case. Let's talk about real transformation hands-on, about time-to-market and the priorities when it's necessary to change cultural paradigms.",
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
                  'bg-lightGreen': title === 'Welcome',
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
                  <span className="ml-4 hidden rounded-full bg-blue-1 px-2 py-1.5 text-xs font-semibold leading-none tracking-tighter text-white sm:inline-flex">
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
                      <span className="rounded-full bg-blue-1 px-2 py-2 text-xs font-semibold leading-none tracking-tighter text-white sm:hidden">
                        Keynote
                      </span>
                    )}
                  </h3>
                  <div className="mt-auto flex items-center gap-x-8 sm:gap-x-7">
                    <span className="rounded-full bg-yellow px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 md:text-xs">
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
                        <span className="rounded-full bg-blue-1 px-4 py-2 text-xs font-semibold leading-none tracking-tighter text-white sm:hidden">
                          Keynote
                        </span>
                      )}
                    </h3>
                    <div className="mt-auto flex items-center gap-x-8 sm:gap-x-7">
                      <span className="rounded-full bg-yellow px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 md:text-xs">
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
