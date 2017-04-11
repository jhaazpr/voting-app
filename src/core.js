export function setEntries(state, entries) {
    return state.set('entries', List(entries));
}
