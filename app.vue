<template>
  <header
    class="flex justify-between px-2 py-1"
  >
    <NuxtLink class="flex gap-2 items-center" to="/">
      <span class="i-codicon-robot h-4 w-4 inline-block" />
      <strong class="">
        botornot
      </strong>
    </NuxtLink>
    <TheScoreboard :score="score" />
  </header>
  <hr class="bg-gray-500 h-1px border-0" />
  <main class="py-5 flex flex-col gap-2">
    <TheSelectionScreen v-if="!state.role" />
    <TheBotDetectionScreen v-else />
  </main>
  <hr class="bg-gray-500 h-1px border-0" />
  <footer class="mt-auto p-2 text-center text-sm opacity-75 hover:opacity-100">
    <a
      class="hover:underline"
      href="https://github.com/danielroe/botornot"
    >
      source
    </a>
    &middot;
    made with ❤️ by <a
      class="font-semibold hover:underline"
      href="https://x.com/danielcroe"
    >
      @danielcroe
    </a>
  </footer>
</template>

<script setup>
import '@unocss/reset/tailwind-compat.css'
const { score, state } = useGameState()
</script>
