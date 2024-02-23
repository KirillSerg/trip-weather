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

export const sortedTripsAtom = atom<Trip[]>((get) => get(tripsAtom).sort((a, b) => Date.parse(a.startDate) - Date.parse(b.startDate)))

export const selectedTripAtom = atom<Trip | null>(null)
export const onSelectTripAtom = atom(
  (get) => get(selectedTripAtom),
  (_get, set, trip: Trip | null) => {
    set(selectedTripAtom, trip)
    set(onSearchTripAtom, "")
  }
)

export const searchedTripAtom = atom("")
export const onSearchTripAtom = atom(
  (get) => get(searchedTripAtom),
  (_get, set, filter: string) => {
    set(searchedTripAtom, filter)
    set(onFilterTripsAtom, filter)
  }
)

export const filteredTripsAtom = atom<Trip[]>([])
export const onFilterTripsAtom = atom(
  (get) => {
    if (get(searchedTripAtom)) {
      return get(filteredTripsAtom)
    } else {
      return get(sortedTripsAtom)
    }
  },
  (get, set, filter: string) => {
    if (filter) {
      const filteredTrips = get(sortedTripsAtom).filter(
        (trip) => trip.name.toLowerCase().includes(filter.toLowerCase())
      )
      set(filteredTripsAtom, filteredTrips)
      set(onSelectTripAtom, null)
    } else {
      set(filteredTripsAtom, get(sortedTripsAtom))
    }
  }
)

export const addTripAtom = atom(
  null,
  (_get, set, trip: Trip) => {
    set(tripsAtom, (prev) => [...prev, trip])
    set(isCreatTripAtom, false)
    set(selectedTripAtom, trip)
  }
)

export const deleteTripAtom = atom(
  null,
  (get, set, id: string) => {
    set(tripsAtom, (prev) => prev.filter((trip) => !(trip.id === id)))
    set(onSelectTripAtom, get(onFilterTripsAtom)[1])
    // set(selectedTripAtom, null)
  }
)
