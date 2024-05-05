<script setup lang="ts">
import { defineProps } from "vue";
import type { Team } from "@/game/gameSim";

interface Props {
  team: Team;
}

defineProps<Props>();
</script>

<template>
  <div>
    <h2>{{ team.name }}</h2>
    <table class="w-full border-2 border-solid border-black">
      <thead class="border-b border-solid border-black">
        <tr>
          <th class="bg-gray-800 px-4 py-2">Player</th>
          <th class="bg-gray-800 px-4 py-2">FG</th>
          <th class="bg-gray-800 px-4 py-2">FGA</th>
          <th class="bg-gray-800 px-4 py-2">FG%</th>
          <th class="bg-gray-800 px-4 py-2">Points</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(player, index) in team.players" :key="index">
          <tr :class="index % 2 === 0 ? 'bg-slate-900' : 'bg-gray-800'">
            <td class="px-4 py-2">{{ player.name }}</td>
            <td class="px-4 py-2">{{ player.stats.fieldGoalsMade }}</td>
            <td class="px-4 py-2">{{ player.stats.fieldGoalAttempts }}</td>
            <td class="px-4 py-2">
              {{
                (
                  (player.stats.fieldGoalsMade /
                    player.stats.fieldGoalAttempts) *
                  100
                ).toFixed(1)
              }}%
            </td>
            <td class="px-4 py-2">{{ player.stats.points }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
