import { useEffect, useState } from "react";

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
        const response = await fetch("https://sessionize.com/api/v2/ev751er0/view/Speakers");
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

    const fetchGrid = async () => {
        const response = await fetch("https://sessionize.com/api/v2/jl4ktls0/view/Grid");
        const data = await response.json();
        setGrid(data);
    }

    useEffect(() => {
        fetchGrid();
    }, []);

    return {grid};
};
