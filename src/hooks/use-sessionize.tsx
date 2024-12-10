import { useEffect, useState } from 'react';

const SESSIONIZE_ID = 'ev751er0'; // TEST ID: jl4ktls0

export interface Speaker {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  fullName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  isTopSpeaker: boolean;
  sessions: Session[];
}

export interface Session {
  id: string;
  name: string;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: Speaker[];
  roomId: number;
  room: string;
  questionAnswers: QuestionAnswer[];
  slideDeck: string;
}

export interface QuestionAnswer {
  id: number;
  answer: string;
}

export interface GridEntry {
  date: string;
  rooms: Room[];
  timeSlots: TimeSlot[];
}

export interface Room {
  id: number;
  name: string;
  sessions: Session[];
  session: Session;
}

export interface TimeSlot {
  slotStart: string;
  rooms: Room[];
}

export interface SessionList {
  sessions: Session[];
}

export const useSessionizeSpeakers = () => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);

  const fetchSpeakers = async () => {
    const response = await fetch(`https://sessionize.com/api/v2/${SESSIONIZE_ID}/view/Speakers`);
    const data = await response.json();
    setSpeakers(data);
  };

  useEffect(() => {
    fetchSpeakers();
  }, []);

  return { speakers };
};

export const useSessionizeSchedule = () => {
  const [grid, setGrid] = useState<GridEntry[]>([]);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [schedule, setSchedule] = useState<GridEntry[]>([]);
  const [sessions, setSessions] = useState<SessionList[]>([]);

  const fetchGrid = async () => {
    const response = await fetch(`https://sessionize.com/api/v2/${SESSIONIZE_ID}/view/Grid`);
    const data = await response.json();
    setGrid(data);
  };

  const fetchSpeakers = async () => {
    const response = await fetch(`https://sessionize.com/api/v2/${SESSIONIZE_ID}/view/Speakers`);
    const data = await response.json();
    setSpeakers(data);
  };

  const fetchSessions = async () => {
    const response = await fetch(`https://sessionize.com/api/v2/${SESSIONIZE_ID}/view/Sessions`);
    const data = await response.json();
    setSessions(data);
  };

  useEffect(() => {
    fetchGrid();
  }, []);
  useEffect(() => {
    fetchSpeakers();
  }, []);
  useEffect(() => {
    fetchSessions();
  }, []);
  useEffect(() => {
    if (grid.length === 0 || speakers.length === 0 || sessions.length === 0) return;
    const schedule = grid.map((entry) => {
      const timeSlots = entry.timeSlots.map((timeSlot) => {
        const rooms = timeSlot.rooms.map((room) => {
          const sessionSpeakers = room.session.speakers.map((speaker) => {
            return speakers.find((s) => s.id === speaker.id);
          });
          room.session.speakers = sessionSpeakers;

          const session = sessions[0].sessions.find((s) => room.session.id === s.id);
          if (session !== undefined) {
            const qa = session.questionAnswers.find((q) => q.id === 88726);
            if (qa !== undefined) {
              room.session.slideDeck = qa.answer;
            }
          }

          return room;
        });
        return {
          ...timeSlot,
          rooms,
        };
      });
      return {
        ...entry,
        timeSlots,
      };
    });
    setSchedule(schedule);
  }, [grid, speakers, sessions]);

  return { schedule };
};
