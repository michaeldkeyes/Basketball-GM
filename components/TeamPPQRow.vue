<script setup lang="ts">
import { defineProps } from "vue";
import type { Team } from "~/game/gameSim";

interface Props {
  team: Team;
}

defineProps<Props>();
</script>

<template>
  <tr class="border-y border-solid border-black">
    <td class="pr-3">{{ team.name }}</td>
    <td v-for="(points, index) in team.stats.pointsPerQuarter" :key="index">
      {{ points }}
    </td>
    <td>{{ team.stats.points }}</td>
  </tr>
</template>
