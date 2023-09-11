export type UserSkill = {
    id: number;
    skill_name: string;
};

export type UserGoal = {
    id: number;
    goal_name: string;
};

export type UserRole = {
    id: number;
    role_name: string;
};

export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    internal_role: string;
    level: number;
    tg_username: string;
    graduation_year: string;
    image_url: string | undefined;
    skills: UserSkill[];
    roles: UserRole[];
    goals: UserGoal[];
};

export type Tag = {
    id: number;
    tag: string;
};

export type Hackathon = {
    id: number;
    title: string;
    registration_start: string;
    registration_finish: string;
    registration_url: string | null;
    team_minimum_size: 1;
    team_maximum_size: 5;
    prize_type: string;
    money_prize: number;
    start_date: string;
    end_date: string;
    description: string;
    is_offline: boolean;
    place: string;
    image: string;
    tags: Tag[];
};

export type ApiResponse = {
    id: number;
    leader_id: number;
    required_roles: UserRole[];
    hackathon_id: number;
    title: string;
    description: string;
    required_members: number;
};
