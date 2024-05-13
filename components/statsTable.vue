<script setup lang="ts">
import type { Team } from "@/game/gameSim";

interface Props {
  team: Team;
}

defineProps<Props>();

const headers = ["Player", "FG", "FG%", "3P", "Points"];
</script>

<template>
  <div>
    <h2>{{ team.name }}</h2>
    <table class="w-full border-2 border-solid border-black">
      <thead class="border-b border-solid border-black">
        <tr>
          <th
            v-for="header in headers"
            :key="header"
            class="bg-gray-800 px-4 py-2"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(player, index) in team.players" :key="index">
          <tr :class="index % 2 === 0 ? 'bg-slate-900' : 'bg-gray-800'">
            <td class="px-4 py-2">{{ player.name }}</td>
            <td class="px-4 py-2">
              {{ player.stats.fieldGoalsMade }} -
              {{ player.stats.fieldGoalAttempts }}
            </td>
            <td class="px-4 py-2">
              {{
                (
                  (player.stats.fieldGoalsMade /
                    player.stats.fieldGoalAttempts) *
                  100
                ).toFixed(1)
              }}%
            </td>
            <td class="px-4 py-2">
              {{ player.stats.threePointMakes }} -
              {{ player.stats.threePointAttempts }}
            </td>
            <td class="px-4 py-2">{{ player.stats.points }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
