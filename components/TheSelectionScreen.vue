<script setup lang="ts">
const { state } = useGameState()

function pick(role: 'trickster' | 'guesser') {
  console.log('picking', role)
  state.value.role = role
}
</script>

<template>
  <div class="py-2 px-3 flex flex-col gap-2">
    How do you want to play the game?
    <div class="flex gap-2">
      <button @click="() => pick('trickster')" class="border-2 border-black flex gap-2 items-center p-4 hover:bg-blue focus:bg-blue transition"><span class="i-codicon-robot h-16 w-16 inline-block" /> Trickster</button>
      <button @click="() => pick('guesser')" class="border-2 border-black flex gap-2 items-center p-4 hover:bg-blue focus:bg-blue transition"><span class="i-codicon-person h-16 w-16 inline-block" /> Guesser</button>
    </div>
  </div>
</template>

