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
    talkLocation: 'Room 1',
    speakers: [
      {
        id: '20',
        name: 'Engin Diri',
        photo: EnginDiri,
      },
    ],
    presentation:
      "Software templates in Backstage are vital for bootstrapping new projects, effectively reducing startup time and masking complexities. When provisioning infrastructure, questions arise on modeling both day-1 and day-2 operations and ensuring compliance with security and company policies. <br><br>  In this interactive workshop, I will lead participants through these essential concepts. We'll explore how to integrate infrastructure provisioning into software templates and provide a detailed walkthrough of a reference implementation, including day-2 operations. <br><br>  By the end, attendees will:" +
      '<br> - Understand the benefits of provisioning with Backstage' +
      '<br> - Identify challenges in provisioning infrastructure in templates' +
      '<br> - Apply best practices through Backstage' +
      '<br> - Automate continuous delivery and verification of changes using GitOps with Pulumi' +
      '<br> - Build self-service enabled software templates in Backstage',
    coincidedEvent: {
      id: '51',
      time: '10:25',
      title: 'Hands on with WebAssembly and Kubernetes',
      duration: '90 min',
      talkLocation: 'Room 2',

      speakers: [
        {
          id: '21',
          name: 'Mikkel Mørk Hegnhøj',
          photo: MikkelHegnhoj,
        },
      ],
      presentation:
        'Learning a new technology can be daunting, and getting started with WebAssembly on the server requires getting up to speed with both new concepts and new tooling. With Spin (https://github.com/fermyon/spin), we want to bring a delightful developer experience to building, distributing, and running serverless functions and microservices with WebAssembly. <br>As with any exciting early ecosystem, there are a lot of tools, libraries, and CLIs out there, and figuring out how and if they work together can be difficult. With Spin, our goal is to empower developers to go from nothing to building and iterating on their application in just a few commands: `spin new` , `spin build`, and `spin up` is all you need to remember. <br>In this tutorial, you will get hands-on with Spin and see how Spin applications can run in a Kubernetes environment.',
    },
  },
  {
    id: '52',
    time: '13:40',
    title:
      'Mastering Cluster API and GitOps: Deep Dive into Extensible Components for Building Production-Ready Kubernetes Clusters',
    duration: '90 min',
    talkLocation: 'Room 1',

    speakers: [
      {
        id: '22',
        name: 'Nic Vermande',
        photo: NicVermande,
      },
    ],
    presentation:
      "There are many different ways you can bootstrap Kubernetes clusters, with various degrees of complexity. Modern Kubernetes installers automate manual tasks but generally, the more they abstract away complexity, the more opinionated they are — and that restricts your choice. Cluster API is different. It is one of the most flexible and efficient tools for managing the Kubernetes lifecycle, whether used for deployments, upgrades or scaling operations. While Cluster API is a powerful tool for provisioning Kubernetes clusters, it doesn't cover everything. Essential add-on components and software, such as node auto-scalers, CNI, ingress controllers, and other key infrastructure elements, are not included. <br>In this workshop, you will delve into how to supercharge Cluster API by integrating it with various solutions to build production-ready clusters, with GitOps as the automation master.",
    coincidedEvent: {
      id: '53',
      time: '13:40',
      title: 'Detecting unexpected behavior and intrusions with Falco',
      duration: '90 min',
      talkLocation: 'Room 2',

      speakers: [
        {
          id: '23',
          name: 'Thomas Labarussias',
          photo: ThomasLabarussias,
        },
        {
          id: '24',
          name: 'Vicente J. Miras',
          photo: VicenteMiras,
        },
      ],
      presentation:
        'The adoption of containers and orchestration systems, such as Kubernetes, has skyrocketed over the last few years. The popularity of these platforms makes them common targets for cyber criminals. Kubernetes combats this risk with built in controls but what if you want to observe the behavior of your pods at runtime to detect intrusions? In this entry-level tutorial, the instructors will dive into cloud threat detection and explain how to detect unexpected behavior and intrusion. <br>This tutorial offers a hands-on introduction to Falco, an open source CNCF incubation project. Every participant will use a web browser to access their own lab environment, in which they will use Falco to identify and notify of suspicious behaviors and intrusions. This session targets security practitioners that are new to cloud native and want to expand their knowledge of runtime security and Falco.',
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
        {ITEMS.map(
          (
            { id, time, title, duration, isKeynote, speakers, coincidedEvent, talkLocation },
            index
          ) => {
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

                    <div className="mt-auto flex items-center gap-x-4 sm:gap-x-7">
                      {speakers && speakers.length > 0 && (
                        <ul className="relative inline-flex gap-x-5  sm:gap-x-4">
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

                    <div className="mt-0 flex items-center gap-x-2 sm:gap-x-4">
                      <span className="rounded-full bg-rasin px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-white text-primary-1 md:text-xs">
                        {duration}
                      </span>

                      {talkLocation && (
                        <span className="rounded-full bg-orange px-4 py-2 text-xs font-semibold leading-none tracking-tighter text-rasin">
                          {talkLocation}
                        </span>
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

                      <div className="mt-auto flex items-center gap-x-4 sm:gap-x-7">
                        {coincidedEvent.speakers && coincidedEvent.speakers.length > 0 && (
                          <ul className="relative inline-flex gap-x-5 sm:gap-x-4">
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
                      <div className="mt-0 flex items-center gap-x-2 sm:gap-x-4">
                        <span className="rounded-full bg-rasin px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-white text-primary-1 md:text-xs">
                          {coincidedEvent.duration}
                        </span>

                        {coincidedEvent.talkLocation && (
                          <span className="rounded-full bg-orange px-4 py-2 text-xs font-semibold leading-none tracking-tighter text-rasin">
                            {coincidedEvent.talkLocation}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          }
        )}
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
