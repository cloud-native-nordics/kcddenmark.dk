/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';

import EnginDiri from './images/engin-diri.jpg';
import MikkelHegnhoj from './images/mikkel-hegnhoj.jpg';
import NicVermande from './images/nicolas-vermande.jpg';
import ThomasLabarussias from './images/thomas-labarussias.jpg';
import VicenteMiras from './images/vicente-miras.jpg';

// TODO: merge with ITEMS array from components/pages/home/speakers
const ITEMS = [
  {
    id: '50',
    time: '10:25',
    title: 'How To Add Infrastructure Provisioning to Your Backstage Templates',
    duration: '90 min',
    speakers: [
      {
        id: '20',
        name: 'Engin Diri',
        photo: EnginDiri,
      },
    ],
    presentation:
      'Are you interested in dipping your toes in the cloud native observability waters, but as an engineer you are not sure where to get started with tracing your microservices and applications on Kubernetes? Then this is the session for you, where we take you on your first steps in an active open-source project that offers a buffet of opportunities for getting started with telemetry data. <br><br> The project, openTelemetry (OTEL), is where we start with de-mystifying key concepts and terms such as observability, telemetry, instrumentation to lay a foundation. Then we’ll explore the OTEL community and how to become not only an end-user, but possibly a contributor.<br><br> We will wrap up with an overview of the components in this project, such as the Collector, the OTEL protocol (OTLP), its APIs, and its SDKs.<br><br> Attendees will leave with an understanding of key observability concepts in distributed tracing!',
    coincidedEvent: {
      id: '51',
      time: '10:25',
      title: 'Hands on with WebAssembly and Kubernetes',
      duration: '90 min',
      speakers: [
        {
          id: '21',
          name: 'Mikkel Mørk Hegnhøj',
          photo: MikkelHegnhoj,
        },
      ],
      presentation:
        'There are different ways to run workloads efficiently in kubernetes. Some workloads are using prioritisation at scheduling time, using a zero overcommit of resources like e.g. cpu and memory, others are ok with the overcommitment of cpu, and quite frankly there are some myths concerning the requests & limits and what they actually mean, preemption may happen unless you have additional validation against accumulated real capacity. If you have multiple workloads that are not equally important, then you may want to specify what is the priority of these workloads.  <br /> <br /> This session gives an introduction to the scheduling above and the PriorityClasses used in our Secure Cloud Stack are introduced. Furthermore, some of the concerns you may not initially consider e.g. using PriorityClasses together with e.g. Operators & other objects creating pods, which "may" or "may not" have the same priority.',
    },
  },
  {
    id: '52',
    time: '13:40',
    title: 'Mastering Cluster API and GitOps: Deep Dive into Extensible Components for Building Production-Ready Kubernetes Clusters',
    duration: '90 min',
    speakers: [
      { 
        id: '22', 
        name: 'Nic Vermande', 
        photo: NicVermande 
      }
    ],
    presentation:
      'More often than not, people in tech struggle with technical decisions and strategy, rather than technical implementations. <br><br>Over the years, I have observed trends come and go, but there have been a couple that truly make a difference. One of the more recent trends is that of Platform Engineering, which is the accumulation of what we have learned over the years in IT-operations, combining DevOps with a product mindset to make sure that developers can focus on creating business value instead of having to deal with infrastructure and cloud architecture decisions. <br><br> In this talk, I would like to explore some of the common pitfalls and benefits of Platform Engineering, talk about my experiences going from traditional sysadmin to platform engineer, and give you all a great start on your platform engineering journey.',
    coincidedEvent: {
      id: '53',
      time: '13:40',
      title: 'Detecting unexpected behavior and intrusions with Falco',
      duration: '90 min',
      speakers: [
        {
          id: '23',
          name: 'Thomas Labarussias',
          photo: ThomasLabarussias,
        },
        {
          id: '24',
          name: 'Vicente J. Jiménez Miras',
          photo: VicenteMiras,
        },
      ],
      presentation:
        "According to OWASP, insecure workload configuration is the top security problem in Kubernetes. As modern Kubernetes clusters evolve from mere container orchestrators to versatile control planes managing various resources, minimizing the attack surface of these clusters becomes even more critical. <br>But security shouldn't come at the expense of user experience. This talk will cover the Principle of Least Privilege (PoLP) and how it can be applied to balance robust security and a good experience for users and administrators. Moreover, it will extend this principle to ArgoCD and Crossplane and explore the differences between the PoLP and Zero Trust and how they're complementary. <br>Join me to discover how the Principle of Least Privilege, applied to Kubernetes, ArgoCD, and Crossplane, empowers you to safeguard your Kubernetes ecosystem without making yourself and your users suffer.",
    },
  },
];

const Workshops = ({ location }) => {
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

export default Workshops;
