interface Reservation {
    from: Date,
    to: Date,
    destination: string
}

// 1 вариант
type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
    (destination: string): Reservation
}

const reserve: Reserve = (fromOrDestination: any, toOrDestination?: any, destination?: any) => {
    return {
        from: new Date(),
        to: new Date(),
        destination: 'destination'
    }
}

// 2 вариант
function newReserve(from: Date, to: Date, destination: string): Reservation;
function newReserve(from: Date, destination: string): Reservation;
function newReserve(destination: string): Reservation;
function newReserve(fromOrDestination: any, toOrDestination?: any, destination?: any): Reservation {
    return {
        from: new Date(),
        to: new Date(),
        destination: 'destination'
    }
}