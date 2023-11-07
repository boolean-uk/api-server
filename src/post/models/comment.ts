import { Identity } from '../../service/identity';

export interface Comment extends Identity {
    postId: number
    content: string
    contactId: number
}