import PartySocket from "partysocket"

export default defineNuxtPlugin(() => {
  const state = useState<GameState>('game', () => ({
    conversation: [],
  }))

  const ws = import.meta.client && new PartySocket({
    host: "127.0.0.1:1999", // or localhost:1999 in dev
    room: "my-room",
  })

  return {
    provide: {
      game: {
        state
      }
    }
  }
})


interface GameState {
  role?: 'trickster' | 'guesser'
  needsInput?: Ref<boolean>
  conversation: string[]
}
