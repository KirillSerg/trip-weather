import { atom } from "jotai";
import { Trip } from "./types/common";
import { atomWithStorage } from 'jotai/utils'

const initialTrip = {
  id: crypto.randomUUID(),
  img: "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
  lat: "47.91",
  lon: "33.39",
  name: "Kryvyi Rih, UA",
  startDate: "2024-02-22",
  endDate: "2024-02-29",
}

export const isCreatTripAtom = atom(false)
export const searchedTripAtom = atom("")
export const activeTripAtom = atom<Trip | null>(null)
export const upcomingTripAtom = atom<Trip | null>(
  (get) => {
    if (get(filteredTripsAtom).length > 0) {
      return get(filteredTripsAtom)
        .reduce((acc, trip) => Date.parse(trip.startDate) - Date.now() > 0 && Date.parse(trip.startDate) - Date.now() < (Date.parse(acc.startDate) - Date.now()) ? acc = trip : acc)
    }
    return null;
  }
)
export const tripsAtom = atomWithStorage<Trip[]>("Trips", [initialTrip])
export const sortedTripsAtom = atom<Trip[]>(
  (get) => get(tripsAtom).sort((a, b) => Date.parse(b.startDate) - Date.parse(a.startDate))
)
export const filteredTripsAtom = atom<Trip[]>(
  (get) => {
    const search = get(searchedTripAtom).toLowerCase()
    if (search) {
      return get(sortedTripsAtom).filter((trip) => trip.name.toLowerCase().includes(search))
    } else {
      return get(sortedTripsAtom)
    }
  }
)

export const addTripAtom = atom(
  null,
  (_get, set, trip: Trip) => {
    set(tripsAtom, (prev) => [...prev, trip])
    set(isCreatTripAtom, false)
    set(activeTripAtom, trip)
  }
)
export const deleteTripAtom = atom(
  null,
  (get, set, e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
    e.stopPropagation()
    set(tripsAtom, (prev) => prev.filter((trip) => trip.id !== id))
    if (get(activeTripAtom)?.id === id) {
      set(activeTripAtom, null)
    }
  }
)
