interface Rocket {
    rocket_name: string;
    rocket_type: string;
}

interface Links {
    mission_patch_small: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
}

export interface Mission {
    flight_number: number;
    mission_name: string;
    launch_year: number;
    details: string;
    rocket: Rocket;
    links: Links;
}