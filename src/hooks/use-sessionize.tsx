import { useEffect, useState } from "react";

const SESSIONIZE_ID = "ev751er0"; // TEST ID: jl4ktls0 

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

export const useSessionizeSpeakers = () => {
    const [speakers,setSpeakers] = useState<Speaker[]>([]);

    const fetchSpeakers = async () => {
        const response = await fetch(`https://sessionize.com/api/v2/${SESSIONIZE_ID}/view/Speakers`);
        const data = await response.json();
        setSpeakers(data);
    };

    useEffect(() => {
        fetchSpeakers();
    }, []);

    return {speakers};
};

export const useSessionizeSchedule = () => {
    const [grid,setGrid] = useState<GridEntry[]>([]);
    const [speakers,setSpeakers] = useState<Speaker[]>([]);
    const [schedule,setSchedule] = useState<GridEntry[]>([]);

    const fetchGrid = async () => {
        const response = await fetch(`https://sessionize.com/api/v2/${SESSIONIZE_ID}/view/Grid`);
        const data = await response.json();
        setGrid(data);
    }

    const fetchSpeakers = async () => {
        const response = await fetch(`https://sessionize.com/api/v2/${SESSIONIZE_ID}/view/Speakers`);
        const data = await response.json();
        setSpeakers(data);
    };

    useEffect(() => {
        fetchGrid();
    }, []);
    useEffect(() => {
        fetchSpeakers();
    }, []);
    useEffect(() => {
        if (grid.length === 0 || speakers.length === 0) return;
        const schedule = grid.map((entry) => {
            const timeSlots = entry.timeSlots.map((timeSlot) => {
                const rooms = timeSlot.rooms.map((room) => {
                    const sessionSpeakers = room.session.speakers.map((speaker) => {
                        return speakers.find((s) => s.id === speaker.id);
                    });
                    room.session.speakers = sessionSpeakers;
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
    }, [grid,speakers]);


    return {schedule};
};
