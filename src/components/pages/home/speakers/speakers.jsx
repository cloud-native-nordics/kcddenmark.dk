/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Modal from 'components/shared/modal';
import LINKS from 'constants/links';

import SpeakerPhoto from './images/speaker-placeholder-image.jpg';
import ChevronDown from './svg/arrow-down.inline.svg';

const TITLE = 'Speakers';

// TODO: replace id => index connect with only id`s
const ITEMS = [
  {
    id: '2',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '9:00',
    title: 'Cilium Mesh - How to Connect Kubernetes with Legacy VM and Server Infrastructure',
    duration: '30 min',
  },
  {
    id: '2',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '9:00',
    title: 'Cilium Mesh - How to Connect Kubernetes with Legacy VM and Server Infrastructure',
    duration: '30 min',
  },
  {
    id: '18',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '16:45',
    title: 'Reverse Engineering Cloud Native: Interoperability and Community',
    duration: '30 min',
  },
  {
    id: '12',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '14:15',
    title: 'Native Histograms in Prometheus: A Better Histogram Experience for Everyone',
    duration: '30 min',
  },
  {
    id: '8',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '11:30',
    title: 'What Anime Taught Me About K8s & Tech Careers',
    duration: '30 min',
    isCoincidedEvent: true,
  },
  {
    id: '6',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '10:45',
    title: 'When Things Get Big: Scaling Cloud Native Workloads and Software Distribution',
    duration: '30 min',
  },
  {
    id: '4',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '9:45',
    title: 'The state of Green Washing - or how to build sustainable systems with Kubernetes',
    duration: '30 min',
  },
  {
    id: '14',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '15:15',
    title: 'Securing your Software Supply Chain on Kubernetes with Sigstore',
    duration: '30 min',
  },
  {
    id: '8',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '11:30',
    title: 'Responsible AI: The Key to Ethical, Safe and Inclusive Software Development',
    duration: '30 min',
  },
  {
    id: '16',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '16:00',
    title:
      "Process is what naturally follows - a cloud platform's guide on people-first transformation",
    duration: '30 min',
  },
  {
    id: '12',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '14:15',
    title: 'Tales of Serverless - a story about building scalable applications',
    duration: '30 min',
    isCoincidedEvent: true,
  },
  {
    id: '10',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '13:30',
    title: 'Buzzing Across the Cloud Native Landscape with eBPF',
    duration: '30 min',
  },
  {
    id: '4',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '9:45',
    title: 'Forensic container checkpointing and analysis',
    duration: '30 min',
    isCoincidedEvent: true,
  },
  {
    id: '6',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '10:45',
    title: 'Demystifying eBPF - eBPF Firewall from scratch',
    duration: '30 min',
    isCoincidedEvent: true,
  },
  {
    id: '14',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '15:15',
    title: 'Closing the Developer Experience Gap of your Container Platforms',
    duration: '30 min',
    isCoincidedEvent: true,
  },
  {
    id: '10',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
    time: '13:30',
    title: 'Streamlined Troubleshooting in Kubernetes',
    duration: '30 min',
    isCoincidedEvent: true,
  },
  {
    id: '16',
    name: 'Cloud Zefra',
    position: 'Cloudy Engineer <br/> Cloud9',
    photo: SpeakerPhoto,
    twitterUrl: '#',
    linkedInUrl: '#',
    githubUrl: '#',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '#',
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
