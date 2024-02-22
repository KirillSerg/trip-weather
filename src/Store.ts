import { atom } from "jotai";
import { Trip } from "./types/common";
import { atomWithStorage } from 'jotai/utils'

export const isCreatTripAtom = atom(false)

export const tripsAtom = atomWithStorage<Trip[]>("TripsList", [])

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