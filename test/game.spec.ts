import { describe, expect, it } from 'vitest'

describe('game state', () => {
  it('should provide a score which defaults to zero', () => {
    const { score } = useGameState()
    expect(score.value).toBe(0)
  })
  it('should correctly detect whether we need user input', () => {
    // const { needsInput } = useGameState()
    // expect(score.value).toBe(0)
  })
})
