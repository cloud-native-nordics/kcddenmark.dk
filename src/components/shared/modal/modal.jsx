import { AnimatePresence, m, LazyMotion, domAnimation, useReducedMotion } from 'framer-motion';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useId } from 'react';

import CommunityIcon from 'icons/cncf-icon.inline.svg';
import GithubIcon from 'icons/github-icon.inline.svg';
import InstagramIcon from 'icons/instagram-icon.inline.svg';
import LinkedInIcon from 'icons/linkedin-icon.inline.svg';
import TwitterIcon from 'icons/twitter-icon.inline.svg';
import WebsiteIcon from 'icons/webpage-icon.inline.svg';

const defaultModalAnimation = {
  transition: { duration: 0.2, delay: 0.1, ease: 'easeInOut' },
  initial: { opacity: 0, scale: 0.9, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const defaultModalBackdropAnimation = {
  transition: { duration: 0.2, ease: 'easeInOut' },
  initial: { opacity: 0 },
  animate: { opacity: 0.4 },
  exit: { opacity: 0 },
};

const calcDuration = (start, end) => {
  const startDate = Date.parse(start);
  const endDate = Date.parse(end);
  return Math.abs(endDate - startDate) / 1000 / 60;
};

const Modal = ({ isVisible, modalData, onModalHide, isPresentationShow }) => {
  const shouldReduceMotion = useReducedMotion();
  const headingId = useId();
  const modalAnimation = shouldReduceMotion ? {} : defaultModalAnimation;
  const modalBackdropAnimation = shouldReduceMotion ? {} : defaultModalBackdropAnimation;

  const handleWindowKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onModalHide();
      }
    },
    [onModalHide]
  );

  const formatStartDate = (date) => {
    const parsed = new Date(Date.parse(date));
    return `${parsed.getHours()}:${parsed.getMinutes() < 10 ? '0' : ''}${parsed.getMinutes()}`;
  };

  useEffect(() => {
    window.addEventListener('keydown', handleWindowKeyDown);
    return () => window.removeEventListener('keydown', handleWindowKeyDown);
  }, [handleWindowKeyDown]);

  if (isVisible === false) {
    return null;
  }

  const {
    id = '',
    fullName = '',
    profilePicture = '',
    tagLine = '',
    bio = '',
    twitterUrl = '',
    linkedInUrl = '',
    githubUrl = '',
    communityUrl = '',
    instagramUrl = '',
    websiteUrl = '',
    startsAt = '',
    endsAt = '',
    title = '',
    sessions = [],
    description = '',
    speakers = [],
    isWorkshop = false,
    room = '',
    slideDeck = undefined,
    video = undefined,
  } = modalData;

  return (
    <AnimatePresence>
      {isVisible && (
        <LazyMotion features={domAnimation}>
          <m.div
            className="fixed inset-0 z-20 m-auto flex h-[fit-content] max-h-[calc(100%-60px)] max-w-[592px] flex-col overflow-y-auto rounded bg-white p-10 text-primary-1 sm:left-2 sm:right-2 sm:p-5"
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={headingId}
            {...modalAnimation}
          >
            {isPresentationShow ? (
              <>
                <div className="flex items-center">
                  <time className="text-sm font-semibold leading-none tracking-tight text-primary-1 opacity-60">
                    {formatStartDate(startsAt)}
                  </time>
                  <span className="relative ml-8 rounded-full bg-rasin px-2 py-1.5 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 text-white before:absolute before:-left-4 before:bottom-0 before:top-0 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3">
                    {calcDuration(startsAt, endsAt)} min
                  </span>
                  <span className="relative ml-2 rounded-full bg-gray-7 px-2 py-1.5 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 text-white">
                    {room}
                  </span>
                  <div className="before:absolute before:-left-4 before:bottom-0 before:top-0 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3">
                    {speakers.length > 0 &&
                      speakers.map(({ id: speakerId, fullName, profilePicture }, index) => (
                        <Link
                          className="relative ml-8 inline-flex items-center gap-x-2 text-left text-lg font-semibold leading-normal text-primary-5 transition-colors duration-200 hover:text-blue-1"
                          to="/#speaker"
                          state={{ speakerId: speakerId || id }}
                          key={index}
                        >
                          <img
                            className="h-7 w-7 rounded-full"
                            src={profilePicture}
                            width={28}
                            alt={fullName}
                            loading="lazy"
                          />
                          <p className="whitespace-nowrap text-sm font-medium leading-none sm:whitespace-normal">
                            {fullName}
                          </p>
                        </Link>
                      ))}
                  </div>
                </div>
                <h2 className="mt-7 text-2xl font-semibold leading-tight tracking-[-0.01em] text-primary-1 sm:text-lg">
                  {title}
                </h2>
                {video && (
                  <div className="mt-3">
                    <iframe
                      width="512"
                      height="288"
                      src={video}
                      title={title}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                )}
                {slideDeck && (
                  <div className="mt-3">
                    <span className="text-s inline-flex items-center rounded-full bg-gray-5 px-2 py-1 font-medium text-primary-1 text-white">
                      <a href={slideDeck}>Presentation</a>
                    </span>
                  </div>
                )}
                {/*
                  !title.includes('Keynote') &&
                  !title.includes('Welcome') &&
                  !title.includes('Surprises') &&
                  !title.includes('Closing') && (
                    <div>
                      <img
                        src={'/images/' + id + '.png'}
                        alt="QR code for rating"
                        style={{ width: '150px' }}
                      />
                    </div>
                  )
                  */}
                <p
                  className="mt-3 text-lg leading-normal text-primary-1 sm:text-base"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {description}
                </p>
              </>
            ) : (
              <>
                <div className="flex items-start">
                  <img
                    className="mb-7 mr-7 h-auto w-[120px] sm:mb-4 sm:mr-4"
                    src={profilePicture}
                    width={120}
                    alt={fullName}
                  />
                  <div>
                    <h2
                      id={headingId}
                      className="whitespace-nowrap text-4xl font-bold leading-tight tracking-[-0.01em] sm:whitespace-normal sm:text-2xl"
                    >
                      {fullName}
                    </h2>
                    <p className="mt-2 text-lg font-semibold leading-normal sm:text-base">
                      {tagLine}
                    </p>
                  </div>
                </div>
                <div
                  className="text-lg leading-normal sm:text-base"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {bio}
                </div>
                <ul className="flex items-center gap-5">
                  {twitterUrl && (
                    <li>
                      <a
                        className="mt-8 block transition-colors duration-200 hover:text-blue-1"
                        href={twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon className="h-[20px]" />
                        <span className="sr-only">Twitter link</span>
                      </a>
                    </li>
                  )}
                  {linkedInUrl && (
                    <li>
                      <a
                        className="mt-8 block transition-colors duration-200 hover:text-blue-1"
                        href={linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon className="h-[21px]" />
                        <span className="sr-only">Linkedin link</span>
                      </a>
                    </li>
                  )}
                  {githubUrl && (
                    <li>
                      <a
                        className="mt-8 block transition-colors duration-200 hover:text-blue-1"
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon className="h-[20px]" />
                        <span className="sr-only">Github link</span>
                      </a>
                    </li>
                  )}
                  {communityUrl && (
                    <li>
                      <a
                        className="mt-8 block transition-colors duration-200 hover:text-blue-1"
                        href={communityUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CommunityIcon className="h-[22px]" />
                        <span className="sr-only">Cloud native community link</span>
                      </a>
                    </li>
                  )}
                  {instagramUrl && (
                    <li>
                      <a
                        className="mt-8 block transition-colors duration-200 hover:text-blue-1"
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InstagramIcon className="h-[21px]" />
                        <span className="sr-only">Instagram link</span>
                      </a>
                    </li>
                  )}
                  {websiteUrl && (
                    <li>
                      <a
                        className="mt-8 block transition-colors duration-200 hover:text-blue-1"
                        href={websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WebsiteIcon className="h-[21px]" />
                        <span className="sr-only">Personal website link</span>
                      </a>
                    </li>
                  )}
                </ul>
                <div className="mt-8">
                  <h3 className="text-lg font-bold leading-normal text-primary-1">
                    Speaker’s schedule
                  </h3>
                  <div className="mt-4 border-l-2 border-l-primary-1 pl-8">
                    {/*}
                    <time className="text-sm font-semibold leading-none tracking-tight text-primary-1 opacity-60">
                      {time}
                    </time>
                    <span className="relative ml-8 rounded-full bg-yellow px-2 py-1.5 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 before:absolute before:top-0 before:bottom-0 before:-left-4 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3">
                      {duration}
                    </span>
                    {*/}
                    {isWorkshop ? (
                      <a
                        className="mt-3 block text-left text-lg font-semibold leading-normal text-primary-1 transition-colors duration-200 hover:text-blue-1"
                        href="/workshops"
                      >
                        {title}
                      </a>
                    ) : (
                      <Link
                        className="mt-3 block text-left text-lg font-semibold leading-normal text-primary-1 transition-colors duration-200 hover:text-blue-1"
                        to="/schedule"
                        state={{ sessionId: sessions[0].id.toString() }}
                      >
                        {sessions[0].name}
                      </Link>
                    )}
                  </div>
                </div>
              </>
            )}
          </m.div>

          <m.div
            className="fixed inset-0 z-10 bg-primary-1 opacity-40"
            key="modal-backdrop"
            onClick={onModalHide}
            {...modalBackdropAnimation}
          />
        </LazyMotion>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  onModalHide: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  isPresentationShow: PropTypes.bool.isRequired,
  modalData: PropTypes.object,
};
export default Modal;
