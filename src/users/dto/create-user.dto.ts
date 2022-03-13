interface Contact {
    
}

export interface CreateUserDto {
    name: string;
    surname: string;
    username: string;
    email: string;
    phone: string;
    contacts: Contact[];
    password: string;
    date_of_birth: Date;
    created_at: Date;
    updated_at: Date;
}
