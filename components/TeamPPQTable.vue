<script setup lang="ts">
import { defineProps } from "vue";
import type { GameResults } from "~/game/gameSim";

interface Props {
  result: GameResults;
}

defineProps<Props>();

const tableHeaders = ["", "Q1", "Q2", "Q3", "Q4", "F"];
</script>

<template>
  <table class="m-auto mb-5 border-y border-solid border-black text-center">
    <thead>
      <tr class="border-y border-solid border-black">
        <th v-for="(header, index) in tableHeaders" :key="index">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <TeamPPQRow :team="result.homeTeam" />
      <TeamPPQRow :team="result.awayTeam" />
    </tbody>
  </table>
</template>
