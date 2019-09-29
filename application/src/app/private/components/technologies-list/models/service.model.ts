export interface ServiceResponseModel {
    technologies: TechnologyApiModel[];
    projects: ProjectApiModel[];
}

export interface TechnologyApiModel {
    name: string;
    rating: number;
}

export interface ProjectApiModel {
    name: string;
    company: string;
}
