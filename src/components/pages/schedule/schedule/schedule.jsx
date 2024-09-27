/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';

import { useSessionizeSchedule } from 'hooks/use-sessionize';

const Schedule = ({ location }) => {
  const {schedule} = useSessionizeSchedule();
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [modalSession, setModalSession] = useState(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalShow = (session) => {
    document.body.classList.add('overflow-hidden');
    setModalSession(session);
    setIsModalVisible(true);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
    setModalSession(undefined);
  };

  const handleSelectDate = ({ date }) => {
    setSelectedDate(date);
  };

  const calcDuration = (start, end) => {
    const startDate = Date.parse(start);
    const endDate = Date.parse(end);
    return Math.abs(endDate - startDate) / 1000 / 60;
  };

  const formatDate = (date) => {
    const parsed = new Date(Date.parse(date));
    return `${parsed.getDate()}.${parsed.getMonth() + 1}.${parsed.getFullYear()}`;
  };

  const formatSlotStart = (slotStart) => {
    return slotStart.substring(0, slotStart.lastIndexOf(':'))
  };

  useEffect(() => {
    if (schedule.length > 0 && selectedDate === undefined) {
      setSelectedDate(schedule[0].date);
    }
  }, [schedule,selectedDate])

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { state = {} } = location;
      if (state?.sessionId && schedule.length > 0) {
        schedule.forEach(({ date, timeSlots }) => {
          timeSlots.forEach(({ rooms }) => { 
            rooms.forEach(({ session }) => {
              if (session.id === state.sessionId) {
                setSelectedDate(date);
                handleModalShow(session);
                state.sessionId = undefined;
              }
            });
          });
        });
      }
    }
  }, [location, schedule, selectedDate]);

  return (
    <section className="safe-paddings pt-9 pb-48 lg:px-8 md:px-5 sm:pt-10 xs:px-0">

      <div className={clsx('mx-auto w-[1072px] max-w-full py-5')}>
        { schedule?.map(({ date }, index) => (
          <Button className={clsx('rounded-full mx-2 px-2 py-2 text-xs font-semibold leading-none tracking-tighter w-20',
            {
              'bg-red': date === selectedDate,
              'text-white': date === selectedDate,
              'bg-primary-4': date !== selectedDate,
            })} onClick={() => handleSelectDate({ date: date })} key={index}>{formatDate(date)}</Button>
        ))}
      </div>

      <ul className="mx-auto w-[1072px] max-w-full rounded-[10px] border border-primary-2 shadow-lg">
        {schedule?.filter(({ date }) => date === selectedDate).map(({ timeSlots }) => {
          return timeSlots.map(({ slotStart, rooms }, index) => {
            const isEven = index % 2 === 1;
            return (
              <li
                className={clsx(
                  'grid grid-cols-[114px_1fr] md:grid-cols-[106px_1fr] sm:grid-cols-1',
                  {
                    //'bg-primary-6': title === 'Welcome',
                    'bg-lightYellow': rooms.length === 1 && rooms[0].session.isServiceSession,
                    //'bg-lightOrange': title === 'Closing',
                    'bg-primary-4': isEven && !!!(rooms.length === 1 && rooms[0].session.isServiceSession),
                  }
                )}
                key={index}
              >
                <div className="flex items-center justify-center sm:justify-start sm:px-5 sm:pt-5">
                  <time className="mb-auto mt-7 text-[15px] font-semibold leading-none tracking-tight text-primary-1 opacity-60 md:mt-5 md:text-sm sm:my-0">
                    {formatSlotStart(slotStart)}
                  </time>
                  {/*isKeynote && (
                    <span className="ml-4 hidden rounded-full bg-red px-2 py-1.5 text-xs font-semibold leading-none tracking-tighter text-white sm:inline-flex">
                      Keynote
                    </span>
                  )*/}
                </div>
                <div
                  className={clsx('border-l border-l-primary-2 sm:border-none', {
                    'grid grid-cols-2 sm:grid-cols-1': rooms.length > 1,
                  })}
                >

                  {rooms.map(({ name, session }, index) => (
                  <div
                    className={clsx(
                      'flex flex-col gap-y-3 px-7 py-6 md:py-4 sm:gap-y-2 sm:px-5 sm:pb-4',
                      session.isPlenumSession ? 'sm:pt-2' : 'sm:pt-3'
                    )}
                    key={index}
                  >
                    <h3 className="inline-flex items-center gap-x-3">
                      {!!!session.isServiceSession ? (
                        <Button
                          className="!whitespace-normal !text-left text-lg !font-semibold !leading-snug tracking-tight text-primary-1 transition-colors duration-200 hover:text-blue-1 md:text-base"
                          theme="link-primary"
                          onClick={() => handleModalShow(session)}
                        >
                          {session.title}
                        </Button>
                      ) : (
                        <span className="text-lg font-semibold leading-snug tracking-tight text-primary-1 md:text-base">
                          {session.title}
                        </span>
                      )}
                      {session.isPlenumSession && (!!!session.isServiceSession) && calcDuration(session.startsAt, session.endsAt) > 10 &&  (
                        <span className="rounded-full bg-red px-2 py-2 text-xs font-semibold leading-none tracking-tighter text-white sm:hidden">
                          Keynote
                        </span>
                      )}

                    </h3>
                    <div className="mt-auto flex items-center gap-x-4 sm:gap-x-7">
                      {session.speakers && session.speakers.length > 0 && (
                        <ul className="relative inline-flex ml-0 gap-x-5 sm:gap-x-4">
                          {session.speakers.map(({ name, profilePicture }, index) => (
                            <li className="" key={index}>
                              <figure className="flex items-center gap-x-2">
                                <img
                                  className="h-7 w-7 rounded-full"
                                  src={profilePicture}
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

                    <div className="mt-0 flex items-center gap-x-4 sm:gap-x-2">
                    <span className="rounded-full bg-rasin px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-white text-primary-1 md:text-xs">
                        {calcDuration(session.startsAt, session.endsAt)} min
                      </span>
                      {name && (
                        <span className={clsx("rounded-full px-4 py-2 text-xs font-semibold leading-none tracking-tighter text-rasin",
                          {/*
                            'bg-green': name === 'Auditorium',
                            'bg-blue-3': name === 'Lounge',
                            'bg-gray-10': talkLocation === 'HeadQuarters, Valdemarsgade 1A, 8000 Aarhus',
                          */}
                        )}>
                          {name}
                        </span>
                      )}
                    </div>
                  </div>)
                  )}
                </div>
              </li>
            );
          }
          )
          }
        )}
      </ul>
      <Modal
        modalData={modalSession}
        isVisible={isModalVisible}
        isPresentationShow
        onModalHide={handleModalHide}
      />
    </section>
  );
};

export default Schedule;
