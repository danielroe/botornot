<script setup lang="ts">
const props = defineProps({
  score: {
    type: Number,
    default: 3000,
  },
})
const formatter = new Intl.NumberFormat()
const formattedScore = computed(() => formatter.format(props.score))
</script>

<template>
  <span class="flex flex-row gap-1 items-baseline">
    <span class="tabular-nums text-3xl font-semibold">
      {{ formattedScore }}
    </span>
    <span>points</span>
  </span>
</template>

