

export interface IsavedUsers {
    users: Array<Iuser>
}

export interface Iuser {
    isLoading: boolean
    gender: string
    email: string
    name : {
        title: string
        first: string
        last: string
    }
    location: {
        street: {
            number: number | string
            name: string
        }
        city: string
        state: string
        country: string
        postcode: number | string
        coordinates: {
            latitude: string
            longitude: string
        }
        timezone: {
            offset: string 
            description: string
        }
    }
    picture: {
        large: string
        medium: string
        thumbnail: string
    }
}
