export const useGameState = () => {
  const state = useNuxtApp().$game.state
  const score = import.meta.server ? ref(0) : useLocalStorage('score', 0)

  const needsInput = computed(() => {
    if (!state.value.role) { return false }
    if (state.value.role === 'trickster') {
      return state.value.conversation.length === 1
    }
    if (state.value.role === 'guesser') {
      return state.value.conversation.length === 0
    }
  })

  return {
    score,
    state,
    needsInput
  }
}

