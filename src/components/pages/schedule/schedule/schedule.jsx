/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';

import SpeakerPhoto from './images/speaker-placeholder-image.jpg';

// TODO: merge with ITEMS array from components/pages/home/speakers
const ITEMS = [
  {
    time: '8:00',
    title: 'Registration',
    duration: '45 min',
  },
  {
    time: '8:45',
    title: 'Welcome',
    duration: '15 min',
  },
  {
    id: '01',
    time: '9:00',
    title: 'Cilium Mesh - How to Connect Kubernetes with Legacy VM and Server Infrastructure',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        id: '0',
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
      {
        id: '1',
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
    ],
    presentation:
      'Kubernetes has taken the industry by storm and has become the standard platform for new workloads. It is ideal for containerized workloads. However, a majority of workloads will remain where they are for another while, running on VMs or physical servers in either public or private cloud. How do we connect the new world of Kubernetes consisting of services, identities and CI/CD with the existing world of VMs, servers, and existing network infrastructure?\n' +
      'In this session, we will look into the brand new Cilium Mesh layer. Cilium Mesh is a new universal networking layer to connect workloads and machines across cloud, on-prem, and edge. It consists of a Kubernetes networking component (CNI), a multi-cluster connectivity plane (Cluster Mesh), and a transit gateway to connect with VMs and servers in existing networks.',
  },
  {
    time: '9:30',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '6',
    time: '9:45',
    title: 'The state of Green Washing - or how to build sustainable systems with Kubernetes ',
    duration: '30 min',
    speakers: [
      {
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
    ],
    presentation:
      'Kubernetes is not the answer to everything, but where it is, it is a great companion to designing systems and putting environmental sustainability into your mind. But being eco-friendly invites people to greenwash their intentions, so let us start the story from the end and clarify some myths. Saving money on infrastructure may reduce your Carbon impact, but we can do more. In this presentation, we will look at what is currently possible, what are the recent developments and what we need in the future to create a carbon-aware system landscape. You will learn how designing system architectures for eco-friendliness, will have a sustainable impact, in many ways.',
    coincidedEvent: {
      id: '12',
      time: '9:45',
      title: 'Forensic container checkpointing and analysis',
      duration: '30 min',
      speakers: [
        {
          name: 'Cloud Zefra',
          photo: SpeakerPhoto,
        },
      ],
      presentation:
        'With the introduction of "Forensic Container Checkpointing" in Kubernetes 1.25 it is possible to checkpoint\n' +
        'containers. The ability to checkpoint containers opens up many new use cases. Containers can be migrated\n' +
        'without loosing the state of the container, fast startup from existing checkpoints, using spot instances more\n' +
        'effective. The primary use case, based on the title of the Kubernetes enhancement proposal, is the forensic\n' +
        'analysis of the checkpointed containers.\n' +
        '\n' +
        'In this session I want to introduce the different possible use cases of "Forensic Container Checkpointing" with a\n' +
        'focus on how to perform forensic analysis on the checkpointed containers. The presented use cases and\n' +
        'especially the forensic analysis will be done as a live demo giving the audience a hands on experience.',
    },
  },
  {
    time: '10:15',
    title: 'Coffee Break',
    duration: '30 min',
  },
  {
    id: '5',
    time: '10:45',
    title: 'When Things Get Big: Scaling Cloud Native Workloads and Software Distribution',
    duration: '30 min',
    speakers: [
      {
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
    ],
    presentation:
      'The move to containers has significantly improved the way services and workloads are deployed and managed in large scale computing infrastructures. It also brought new challenges that can be handled with intrusive changes in the workflows or hidden in the stack. This session will focus on one of those challenges and go in detail on how you can efficiently distribute very large software packages across thousands of nodes for your batch, HPC or ML workloads.',
    coincidedEvent: {
      id: '13',
      time: '10:45',
      title: 'Demystifying eBPF - eBPF Firewall from scratch',
      duration: '30 min',
      speakers: [
        {
          name: 'Cloud Zefra',
          photo: SpeakerPhoto,
        },
      ],
      presentation:
        'eBPF has emerged as a powerful technology for extending the Linux kernel, enabling users to safely and\n' +
        'efficiently run custom code within the kernel. One of the most popular applications of eBPF is in the realm of\n' +
        'networking, where it is used to implement high-performance firewalls and other security-related functionality.\n' +
        '\n' +
        'eBPF is becoming increasingly popular in the cloud-native ecosystem, with many CNCF projects utilizing its\n' +
        'capabilities, including Cilium, Calico, and Pixie to name a few.\n' +
        '\n' +
        'This talk aims to demystify eBPF and demonstrate how it can be used to build a firewall from scratch. By\n' +
        'highlighting core concepts of eBPF, attendees can better understand how it is being used in real-world scenarios,\n' +
        'by various CNCF projects and how it can be applied to their own use cases.',
    },
  },
  {
    time: '11:15',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '8',
    time: '11:30',
    title: 'Responsible AI: The Key to Ethical, Safe and Inclusive Software Development',
    duration: '30 min',
    speakers: [
      {
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
      id: '4',
      time: '11:30',
      title: 'What Anime Taught Me About K8s & Tech Careers',
      duration: '30 min',
      speakers: [
        {
          name: 'Cloud Zefra',
          photo: SpeakerPhoto,
        },
      ],
      presentation:
        'From One piece and Naruto to Neon Genesis Evangelion and DragonBall, Japanese animation is a cultural phenomena. This session will take you through both the landscape of anime and Kubernetes development, with helpful beginner tips to get you started on your cloud native journey. The session will also cover what the hero’s of East blue and Planet 4032-877 can tech us about career development tech world. Importance of perseverance, inclusion & diversity as well as always having a snack at hand - come and learn how anime can your boost you Kubernetes and tech career to next level!\n',
    },
  },
  {
    time: '12:00',
    title: 'Lunch',
    duration: '1h 30min',
  },
  {
    id: '11',
    time: '13:30',
    title: 'Buzzing Across the Cloud Native Landscape with eBPF',
    duration: '30 min',
    speakers: [
      {
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
      id: '15',
      time: '13:30',
      title: 'Streamlined Troubleshooting in Kubernetes',
      duration: '30 min',
      speakers: [
        {
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
    time: '14:00',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '3',
    time: '14:15',
    title: 'Native Histograms in Prometheus: A Better Histogram Experience for Everyone',
    duration: '30 min',
    speakers: [
      {
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
    ],
    presentation:
      'Histograms are crucial for anyone who wants to track service latency and other numeric value distributions in Prometheus. However, the existing "legacy" histograms in Prometheus come with a number of painful drawbacks: they require manual and static bucket configuration, generate a separate time series for each configured histogram bucket, and thus require you to make hard tradeoffs between a histogram\'s resolution and cost.\n' +
      '\n' +
      'In this talk, Prometheus co-founder Julius Volz will present a new "native" histogram metric type that is currently being added to Prometheus. These native histograms allow you to track value distributions in higher detail at a significantly lower storage and processing cost, while also reducing the manual bucket configuration effort. Julius will explain how native histograms work, how they achieve these key benefits, and how you can use them in Prometheus today in an experimental fashion.',
    coincidedEvent: {
      id: '10',
      time: '14:15',
      title: 'Tales of Serverless - a story about building scalable applications',
      duration: '30 min',
      speakers: [
        {
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
    time: '14:45',
    title: 'Coffee Break',
    duration: '30 min',
  },
  {
    id: '7',
    time: '15:15',
    title: 'Securing your Software Supply Chain on Kubernetes with Sigstore',
    duration: '30 min',
    speakers: [
      {
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
    ],
    presentation:
      'How secure are the images running in your Kubernetes cluster right now? If you don’t know, then this talk is for you! In this talk, Priya Wadhwa will discuss how to determine the composition and vulnerability risk of your images. She’ll cover how to secure your images with easy container signing through Sigstore, and how to enforce policies against your images in your Kubernetes cluster with the Sigstore policy-controller. This talk will demo how to set this up while diving in to the SLSA principles of software supply chain security and how they can be applied to secure a build pipeline. \n',
    coincidedEvent: {
      id: '14',
      time: '15:15',
      title: 'Closing the Developer Experience Gap of your Container Platforms',
      duration: '30 min',
      speakers: [
        {
          name: 'Cloud Zefra',
          photo: SpeakerPhoto,
        },
      ],
      presentation:
        'Due to the lack of user focus, many container platforms have a big developer experience gap.\n' +
        "That's not only because building a Kubernetes platform is complex but also because deploying applications on\n" +
        'Kubernetes requires expertise in many Container and Kubernetes concepts. And once developers learn them,\n' +
        'they still must spend a lot of time maintaining containers, writing YAML templates, and orchestrating many moving\n' +
        'Kubernetes parts.\n' +
        'Like in the days when the Waterfall model was the standard for software development, developers today shouldn’t\n' +
        'have to care where and how their applications run and focus on adding business value by implementing new\n' +
        'features.\n' +
        'In this session, we will explore some of the powerful open-source technologies available within the Kubernetes\n' +
        'ecosystem to close the developer experience gap like Backstage, Cloud Native Buildpacks, Knative, and\n' +
        'Cartographer.',
    },
  },
  {
    time: '15:45',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '9',
    time: '16:00',
    title:
      "Process is what naturally follows - a cloud platform's guide on people-first transformation",
    duration: '30 min',
    speakers: [
      {
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
    ],
    presentation:
      "The fastest way to change the world is by making it a business case. Let's talk about real transformation hands-on, about time-to-market and the priorities when it's necessary to change cultural paradigms.",
    coincidedEvent: {
      id: '16',
      time: '16:00',
      title: "What We've Learned from Scanning 10K+ Kubernetes Clusters",
      duration: '30 min',
      speakers: [
        {
          name: 'Cloud Zefra',
          photo: SpeakerPhoto,
        },
      ],
      presentation:
        'The number of misconfigurations, unpatched vulnerabilities, & overly-privileged users in K8s systems is\n' +
        "ASTOUNDING. We learned this from analyzing the data from more than 10K+ unique K8s cluster scans, and we've\n" +
        'learned a great deal about the state of K8s risk, compliance, & security vulnerabilities.\n' +
        '\n' +
        "In this talk we'll shed light on the most common misconfigurations according to multiple frameworks (NSA-CISA,\n" +
        'MITRE ATT&CK), alongside known vulnerabilities, & RBAC violations in CI/CD pipelines.\n' +
        '\n' +
        "We'll also provide interesting insights on why and where Kubernetes deployments mostly commonly fail and\n" +
        'statistics on which controls fail most, as well as the weak spots and gotchas to pay attention to. Stick around\n' +
        "though, as we'll wrap up with some simple measures your can take immediately to work towards eliminating these\n" +
        'risks and improving your overall cloud native security posture.',
    },
  },
  {
    time: '16:30',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '2',
    time: '16:45',
    title: 'Reverse Engineering Cloud Native: Interoperability and Community',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        name: 'Cloud Zefra',
        photo: SpeakerPhoto,
      },
    ],
    presentation:
      'Kubernetes has become the default container orchestrator framework, setting the standards for application deployment in a distributed environment. In the past years, numerous tools have been developed to extend Kubernetes capabilities and enhance its features. Simultaneously, the expansion of the technology landscape prompted the growth of the adopter base and the number of scenarios where cloud native can be applied. The organic adoption and development of new tools, created the ecosystem and community as we know it today.\n' +
      '\n' +
      "This keynote will feature the core principles that define the next generation's identity of cloud native practitioners using a reverse engineering approach. It will present the interoperability of tools, inclusivity at the community and adopters level, and a culture of change and education that drives the ubiquity of the cloud native.",
  },
  {
    time: '17:15',
    title: 'Closing',
    duration: '15 min',
  },
  {
    time: '17:30',
    title: 'Apéro',
    duration: '3h 45min',
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
