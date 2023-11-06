import { Identity } from '../../service/identity';

export interface Contact extends Identity {
    firstName: string
    lastName: string
    gender: string | null | undefined
    email: string | null | undefined
    street: string
    city: string
    latitude: number | null | undefined
    longitude: number | null | undefined
    jobTitle: string | null | undefined
}