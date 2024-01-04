<script setup lang="ts">
import conversations from '~/data/conversations.json'

const [{ user, response }] = conversations
</script>

<template>
  <article class="px-2 flex flex-row-reverse gap-2">
    <img src="https://unavatar.io/danielroe" class="rounded-full h-12 w-12" height="16px" width="16px" />
    <span class="rounded-4 bg-blue filter-saturate-40 px-3 py-2 leading-snug">{{ user }}</span>
  </article>
  <article class="px-2 pb-5 flex flex-row gap-2">
    <div class="inline flex h-12 w-12 rounded-full bg-gray flex-shrink-0 items-center justify-center">
      <span class="i-codicon-robot  h-8 w-8 inline-block" />
    </div>
    <span class="rounded-4 bg-blue px-3 py-2 leading-snug">{{ response }}</span>
  </article>
  <hr class="bg-gray-500 h-1px border-0" />
  <form class="pt-2 flex flex-row gap-2 justify-right">
    <button class="border-blue border-2 rounded-4 px-3 py-1 hover:bg-blue focus:bg-blue transition">you're a bot</button>
    <button class="border-blue border-2 rounded-4 px-3 py-1 hover:bg-blue focus:bg-blue transition">hi human</button>
  </form>
</template>

