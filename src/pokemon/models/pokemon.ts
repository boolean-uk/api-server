import { Identity } from '../../service/identity';

export interface Pokemon extends Identity {
    name: string
    image: string
    liked: boolean
}