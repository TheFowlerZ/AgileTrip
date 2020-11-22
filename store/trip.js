export const state = () => ({
  destinations: [],
  participants: [],
})

export const mutations = {
  addParticipant: (state, participant) => {
    state.participants.push(participant)
  },
  addDestination: (state, destination) => {
    state.destinations.push(destination)
  },
}

export const actions = {}
