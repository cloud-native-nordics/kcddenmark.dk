/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Modal from 'components/shared/modal';
import LINKS from 'constants/links';

import AdrianReberPhoto from './images/adrian-reber-photo.jpg';
import AnnieTalvastoPhoto from './images/annie-talvasto-photo.jpg';
import BillPhoto from './images/bill-mulligan-photo.jpg';
import FilipPhoto from './images/filip-nicolic-photo.jpg';
import JuliusVolzPhoto from './images/julius-volz-photo.jpg';
import KatieGamanjiPhoto from './images/katie-gamanji-photo.jpg';
import LenaPhoto from './images/lena-fuhrimann-photo.jpg';
import LisaFalcoPhoto from './images/lisa-falco-photo.jpg';
import LizRicePhoto from './images/liz-rice-photo.jpg';
import MatthiasPhoto from './images/matthias-bertschy-photo.jpg';
import MaxKorbacherPhoto from './images/max-korbacher-photo.jpg';
import PriyaWadhwaPhoto from './images/priya-wadhwa-photo.jpg';
import RetoLehmannPhoto from './images/reto-lehmann-photo.jpg';
import RicardoRochaPhoto from './images/ricardo-rocha-photo.jpg';
import SebastianKisterPhoto from './images/sebastian-kister-photo.jpg';
import ThomasGrafPhoto from './images/thomas-graf-photo.jpg';
import TimoSalmPhoto from './images/timo-salm-photo.jpg';
import ChevronDown from './svg/arrow-down.inline.svg';

const TITLE = 'Speakers';

// TODO: replace id => index connect with only id`s
const ITEMS = [
  {
    id: '2',
    name: 'Thomas Graf',
    position: 'CTO & CO-Founder <br/> Isovalent',
    content:
      'Thomas is the Co-Founder and CTO of Isovalent, long-time eBPF developer, and one of the creators of the Cilium project. Before working on Cilium, and eBPF, Thomas was a Linux kernel developer for 15+ years focusing on networking, security, and eBPF. Thomas currently serves as the Co-Chair of the eBPF Foundation. When not working on open source software, Thomas is enjoying the Swiss mountains on bike and foot with his family.',
    photo: ThomasGrafPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '9:00',
    title: 'Cilium Mesh - How to Connect Kubernetes with Legacy VM and Server Infrastructure',
    duration: '30 min',
  },
  {
    id: '2',
    name: 'Liz Rice',
    position: 'Chief Open Source Office <br/> Isovalent',
    content:
      "Liz Rice is Chief Open Source Officer with eBPF specialists Isovalent, creators of the Cilium cloud native networking, security and observability project. She was Chair of the CNCF's Technical Oversight Committee in 2019-2022, and Co-Chair of KubeCon + CloudNativeCon in 2018. She is also the author of Container Security, published by O'Reilly. She has a wealth of software development, team, and product management experience from working on network protocols and distributed systems, and in digital technology sectors such as VOD, music, and VoIP. When not writing code, or talking about it, Liz loves riding bikes in places with better weather than her native London, competing in virtual races on Zwift, and making music under the pseudonym Insider Nine.",
    photo: LizRicePhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '9:00',
    title: 'Cilium Mesh - How to Connect Kubernetes with Legacy VM and Server Infrastructure',
    duration: '30 min',
  },
  {
    id: '18',
    name: 'Katie Gamanji',
    position: 'Senior Field Engineer at Apple <br/> TOC at CNCF',
    content:
      'Katie is a cloud native leader, practitioner, and contributor, currently in a Senior Kubernetes Field Engineer role at Apple and a TOC for CNCF (Cloud Native Computing Foundation).  As a cloud platform engineer, Katie has built the infrastructure for Conde Nast and American Express, gravitating towards cloud-native technologies, principles, and Kubernetes as the focal point. At CNCF (Cloud Native Computing Foundation), she was a Technical Oversight Committee member and led the CNCF End User Community.  At present, Katie advises the Keptn startup and is part of the OpenUK C-suite.',
    photo: KatieGamanjiPhoto,
    twitterUrl: 'https://twitter.com/k_gamanji',
    linkedInUrl: 'https://www.linkedin.com/in/katie-gamanji/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '16:45',
    title: 'Reverse Engineering Cloud Native: Interoperability and Community',
    duration: '30 min',
  },
  {
    id: '12',
    name: 'Julius Volz',
    position: 'Co-Founder of prometheus.io <br/> Founder at PromLabs',
    content:
      'Julius co-founded the Prometheus monitoring system and originally led the project to success at SoundCloud and beyond. He now focuses on growing the Prometheus community, started PromCon, the first conference around Prometheus, and helps companies use and adapt Prometheus through his company PromLabs. Before creating Prometheus at SoundCloud, Julius was a Site Reliability Engineer at Google.',
    photo: JuliusVolzPhoto,
    twitterUrl: 'https://twitter.com/juliusvolz',
    linkedInUrl: 'https://www.linkedin.com/in/julius-volz/',
    githubUrl: '',
    communityUrl: 'https://community.cncf.io/u/mvhzxh/',
    instagramUrl: '',
    websiteUrl: 'https://juliusv.com/',
    time: '14:15',
    title: 'Native Histograms in Prometheus: A Better Histogram Experience for Everyone',
    duration: '30 min',
  },
  {
    id: '8',
    name: 'Annie Talvasto',
    position: 'CNCF Ambassador <br/> Azure MVP',
    content:
      'Annie Talvasto is an international technology speaker, CNCF Ambassador, Azure MVP and specialist in Kubernetes & open source. Annie hosts & produces the Cloud Gossip podcast and has been a co-organizer of Kubernetes & CNCF Finland meetup since 2017. She has worked at various tech companies from cloud start-ups to enterprises. Annie has spoken at tech conferences on multiple continents, including KubeCon + CloudNativeCon, Microsoft Build & Ignite, NDC, KCDC, Global Azure, Future Tech and more. During her career she has spoken to more than 30,000 developers at User Groups meetings & Conferences.',
    photo: AnnieTalvastoPhoto,
    twitterUrl: 'https://twitter.com/AnnieTalvasto',
    linkedInUrl: 'https://www.linkedin.com/in/talvasto/',
    githubUrl: '',
    communityUrl: 'https://community.cncf.io/u/mwwdtj/#/about',
    instagramUrl: '',
    websiteUrl: '',
    time: '11:30',
    title: 'What Anime Taught Me About K8s & Tech Careers',
    duration: '30 min',
    isCoincidedEvent: true,
  },
  {
    id: '6',
    name: 'Ricardo Rocha',
    position: 'Computing Engineer CERN <br/> TOC CNCF',
    content:
      'Ricardo is a Computing Engineer in the CERN cloud team focusing on containerized deployments, networking and more recently machine learning platforms. He has led for several years the internal effort to transition services and workloads to use cloud native technologies, as well as dissemination and training efforts. Ricardo got CERN to join the CNCF and is currently in the TOC and a lead of the CNCF Research User Group. Prior to this work Ricardo helped develop the grid computing infrastructure serving the Large Hadron Collider (LHC).',
    photo: RicardoRochaPhoto,
    twitterUrl: 'https://twitter.com/ahcorporto',
    linkedInUrl: 'https://www.linkedin.com/in/ricardo-rocha-739aa718/',
    githubUrl: 'https://github.com/rochaporto',
    communityUrl: 'https://community.cncf.io/u/m46hr5/#/about',
    instagramUrl: '',
    websiteUrl: '',
    time: '10:45',
    title: 'When Things Get Big: Scaling Cloud Native Workloads and Software Distribution',
    duration: '30 min',
  },
  {
    id: '4',
    name: 'Max Körbächer',
    position: 'Co-Founder of Liquid Reply <br/> Co-Chair CNCF TAG Environmental Sustainability',
    content:
      'Max is Co-Founder and Cloud Native Advocate at Liquid Reply. He is Co-Chair of the CNCF Environmental Sustainability Technical Advisory Group and served 3 years at the Kubernetes release team. Besides, he is part of different OSS Advisory Boards. His focus is on designing and building cloud-native solutions on/with Kubernetes and platform engineering to simplify the current challenges of complex systems.',
    photo: MaxKorbacherPhoto,
    twitterUrl: 'https://twitter.com/mkoerbi',
    linkedInUrl: 'https://www.linkedin.com/in/maxkoerbaecher/',
    githubUrl: '',
    communityUrl: 'https://community.cncf.io/u/m76gha/#/about',
    instagramUrl: '',
    websiteUrl: '',
    time: '9:45',
    title: 'The state of Green Washing - or how to build sustainable systems with Kubernetes',
    duration: '30 min',
  },
  {
    id: '14',
    name: 'Priya Wadhwa',
    position: 'Software Engineer <br/> Chainguard',
    content:
      'Priya Wadhwa is an engineering manager working on open source security at Chainguard. She serves on the Sigstore Technical Steering Committee and is a maintainer on many Sigstore projects and Tekton Chains. Priya is passionate about making security easy and available for everyone.',
    photo: PriyaWadhwaPhoto,
    twitterUrl: 'https://twitter.com/priyawadhwa16',
    linkedInUrl: '',
    githubUrl: 'https://github.com/priyawadhwa',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '15:15',
    title: 'Securing your Software Supply Chain on Kubernetes with Sigstore',
    duration: '30 min',
  },
  {
    id: '8',
    name: 'Lisa Falco',
    position: 'Consultant in Medical & Responsible AI <br/> Zühlke Group',
    content:
      'Lisa is a Lead Consultant in AI & Data with 15 years of industry experience in medical applications of Data Science and in bringing medical software products to market. She combines solid expertise in Machine Learning and AI with a passion for developing user-centric products, particularly in healthcare and medical technology. Among others she was previously Director of Data Science at Ava Women and Head of Product at Pipra. She has a PhD in Biomedical Imaging from EPFL, Switzerland.',
    photo: LisaFalcoPhoto,
    twitterUrl: 'https://twitter.com/lisafalco',
    linkedInUrl: 'https://www.linkedin.com/in/lisa-falco-jon',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: 'https://www.instagram.com/lisafalco_dsw/',
    websiteUrl: 'https://lisafalco.com',
    time: '11:30',
    title: 'Responsible AI: The Key to Ethical, Safe and Inclusive Software Development',
    duration: '30 min',
  },
  {
    id: '16',
    name: 'Sebastian Kister',
    position: 'Lead Kubernetes <br/> Competence Center Audi',
    content:
      'Sebastian is an awarded global thought leader for enterprise transformation and counts world wide as transformation evangelist. He is leading a competence center in IT infrastructure and aligning all brands in the VW Group with the mission to once again boldly go where no one has gone before. As an agile digital native with countless successfully implemented projects in 7 industries he can be described as well as a startup-professional who helped to shape products from genesis to market leader with bleeding-edge technology. Always striving to innovate and question the status quo, he helps to break dogmas, implement a new culture, and never settles while pursuing constant progress.',
    photo: SebastianKisterPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/sebastiankister/',
    githubUrl: '',
    communityUrl: 'https://community.cncf.io/u/mrku63/#/about',
    instagramUrl: '',
    websiteUrl: '',
    time: '16:00',
    title:
      "Process is what naturally follows - a cloud platform's guide on people-first transformation",
    duration: '30 min',
  },
  {
    id: '12',
    name: 'Reto Lehmann',
    position: 'Principal Software Engineer at Red Hat',
    content:
      'Reto Lehmann is a Principal Software Engineer at Red Hat and a contributor to the Knative project. He has been working on its various components, including Knative Serving, Client, and sandbox repositories. Reto has over ten years of experience in the field of containers and cloud-native technology, having built Kubernetes-based platforms\n' +
      'both on-premise and in various public clouds.\n' +
      '\n' +
      'Before his work at Red Hat, Reto gained valuable experience as a consultant, helping organizations adopt cloud- native technology and implement effective solutions. He is also an adjunct professor, where he teaches courses about these topics.',
    photo: RetoLehmannPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/retocode/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '14:15',
    title: 'Tales of Serverless - a story about building scalable applications',
    duration: '30 min',
    isCoincidedEvent: true,
  },
  {
    id: '10',
    name: 'Bill Mulligan',
    position: 'Cilium and eBPF Community Pollinator',
    content:
      'Bill Mulligan is a cloud native pollinator and community builder. He has given talks and written articles about\n' +
      'building the business case for cloud native. While at CNCF he restarted the Kubernetes Community Day program\n' +
      'and worked to grow the student community. He is currently at Isovalent strengthening the Cilium and eBPF\n' +
      'communities.',
    photo: BillPhoto,
    twitterUrl: 'https://twitter.com/breakawaybilly',
    linkedInUrl: 'https://www.linkedin.com/in/bamulligan/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '13:30',
    title: 'Buzzing Across the Cloud Native Landscape with eBPF',
    duration: '30 min',
  },
  {
    id: '4',
    name: 'Adrian Reber',
    position: 'Senior Principal Software Engineer at Red Hat',
    content:
      'Adrian is a Senior Principal Software Engineer at Red Hat and is migrating processes at least since 2010. He\n' +
      'started to migrate processes in a high performance computing environment and at some point he migrated so\n' +
      'many processes that he got a PhD for that. Most of the time he is now migrating containers but occasionally he still\n' +
      'migrates single processes.',
    photo: AdrianReberPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '9:45',
    title: 'Forensic container checkpointing and analysis',
    duration: '30 min',
    isCoincidedEvent: true,
  },
  {
    id: '6',
    name: 'Filip Nikolic',
    position: 'Architect Owner Kubernetes Postfinance',
    content:
      'Filip works for a financial institute and is a strong advocate of cloud-native technologies. As a speaker at the\n' +
      'conference, Filip will share insights into why an increasing number of CNCF projects decide to make use of eBPF.',
    photo: FilipPhoto,
    twitterUrl: 'https://twitter.com/f1kook1f',
    linkedInUrl: 'https://www.linkedin.com/in/filip-nikolic/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '10:45',
    title: 'Demystifying eBPF - eBPF Firewall from scratch',
    duration: '30 min',
    isCoincidedEvent: true,
  },
  {
    id: '14',
    name: 'Timo Salm',
    position: 'Lead Developer Experience Solutions Engineer VMware',
    content:
      'Timo Salm is based out of Stuttgart in southwest Germany and in the role of the first VMware Tanzu Solutions\n' +
      'Engineer for Developer Experience in EMEA with a focus on VMware Tanzu Application Platform and commercial\n' +
      "Spring products. In this role, he’s responsible for educating customers on these products' value, vision, and\n" +
      'strategy and ensuring that they succeed by working closely on different levels of abstractions of modern\n' +
      'applications and modern infrastructure.\n' +
      'Before Timo joined Pivotal and VMware, he worked for more than seven years for consulting firms in the\n' +
      'automotive industry as a software architect and full-stack developer on projects for customer-facing products.',
    photo: TimoSalmPhoto,
    twitterUrl: 'https://twitter.com/salmto',
    linkedInUrl: 'https://www.linkedin.com/in/timo-salm-8779a680/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '15:15',
    title: 'Closing the Developer Experience Gap of your Container Platforms',
    duration: '30 min',
    isCoincidedEvent: true,
  },
  {
    id: '10',
    name: 'Lena Fuhrimann',
    position: 'Co-Founder & Cloud Software Architect bespinian',
    content:
      'Lena is a passionate software engineer and architect. Together with Mathis Kretz she founded the company\n' +
      'bespinian in 2019 and has since worked with many customers and interesting technologies. Her main focus lies on\n' +
      'security, Kubernetes, serverless technologies, public clouds and Infrastructure as Code. However, she has also\n' +
      'worked a lot with Kubernetes and its ecosystem and has deployed many applications to those platforms using\n' +
      'automation and GitOps. She uses Arch btw.',
    photo: LenaPhoto,
    twitterUrl: 'https://twitter.com/the_cloudlena',
    linkedInUrl: 'https://www.linkedin.com/in/lena-fuhrimann/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '13:30',
    title: 'Streamlined Troubleshooting in Kubernetes',
    duration: '30 min',
    isCoincidedEvent: true,
  },
  {
    id: '16',
    name: 'Matthias Bertschy',
    position: 'Senior Kubernetes Developer at ARMO',
    content:
      'Matthias is a Senior Kubernetes Developer at ARMO working on Kubescape, the open-source Kubernetes security\n' +
      'platform. He started his career in 2005 as a System Administrator. In 2011 he joined a leading security solution\n' +
      'provider in Switzerland to become a Security System Engineer. He got certified as an Ethical Hacker in 2012\n' +
      '(GPEN certification) and validated his first four years as a professional with a CISSP in 2015. He discovered\n' +
      'Kubernetes in 2016 and has become a regular contributor, member of SIG Node and a reviewer for the kubelet\n' +
      'and test-infra. During the last 5 years, he has helped several Swiss banks through their digital transformations in\n' +
      'Senior DevOps Engineer, Productivity Manager and Platform Architect positions. His list of certifications include Red\n' +
      'Hat Certified Architect, every Kubernetes certifications, and many Linux Foundation courses on Open Source\n' +
      'Management & Strategy.',
    photo: MatthiasPhoto,
    twitterUrl: 'https://twitter.com/matthyx',
    linkedInUrl: 'https://www.linkedin.com/in/matthias-bertschy-b427b815/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '16:00',
    title: "What We've Learned from Scanning 10K+ Kubernetes Clusters",
    duration: '30 min',
    isCoincidedEvent: true,
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
