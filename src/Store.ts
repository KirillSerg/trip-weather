import { atom } from "jotai";
import { Trip } from "./types/common";
import { atomWithStorage } from 'jotai/utils'

const initialTrip = {
  id: "2f54ad2b-a947-4c82-b6c2-ad251866ffdf",
  img: "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
  lat: "47.91",
  lon: "33.39",
  name: "Kryvyi Rih, UA",
  startDate: "2024-02-22",
  endDate: "2024-02-29",
}

export const isCreatTripAtom = atom(false)
export const tripsAtom = atomWithStorage<Trip[]>("TripsList", [initialTrip])
export const selectedTripAtom = atom<Trip | null>(null)
export const addTripAtom = atom(
  null,
  (_get, set, trip: Trip) => {
    set(tripsAtom, (prev) => [...prev, trip])
    set(isCreatTripAtom, false)
  }
)
export const deleteTripAtom = atom(
  null,
  (_get, set, id: string) => {
    set(tripsAtom, (prev) => prev.filter((trip) => !(trip.id === id)))
  }
)