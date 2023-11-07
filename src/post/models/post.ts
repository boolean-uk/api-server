import { Identity } from '../../service/identity';

export interface Post extends Identity {
    title: string
    content: string
    contactId: number
}