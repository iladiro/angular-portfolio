interface PersonalProjectButtons {
    label: string;
    url: string;
}

export interface PersonalProject {
    id: string;
    title: string;
    image: string;
    description: string;
    technologies: string[];
    buttons?: PersonalProjectButtons[]
}