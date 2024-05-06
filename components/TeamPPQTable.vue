<script setup lang="ts">
import { defineProps } from "vue";
import type { GameResults } from "~/game/gameSim";

interface Props {
  result: GameResults;
}

defineProps<Props>();
</script>

<template>
  <table class="m-auto mb-5 border-y border-solid border-black text-center">
    <thead>
      <tr class="border-y border-solid border-black">
        <th />
        <th
          v-for="(points, index) in result.homeTeam.stats.pointsPerQuarter"
          :key="index"
        >
          Q{{ index + 1 }}
        </th>
        <th>F</th>
      </tr>
    </thead>
    <tbody>
      <TeamPPQRow :team="result.homeTeam" />
      <TeamPPQRow :team="result.awayTeam" />
    </tbody>
  </table>
</template>
