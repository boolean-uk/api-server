import { Identity } from '../../service/identity';

export interface Art extends Identity {
    title: string
    artist: string
    imageURL: string
    publicationHistory: string[]
}