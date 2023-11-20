export interface CreateContactDto {
    firstName: string
    lastName: string
    gender: string | null | undefined
    email: string | null | undefined
    street: string
    city: string
    latitude: number | null | undefined
    longitude: number | null | undefined
    jobTitle: string | null | undefined
    favouriteColour: string | null | undefined
    profileImage: string | null | undefined
}