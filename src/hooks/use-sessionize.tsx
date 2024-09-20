import { useEffect, useState } from "react";

export interface Speaker {
    id: string;
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
}
