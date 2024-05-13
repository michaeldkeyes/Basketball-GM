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
    <table class="mb-5 w-full">
      <thead class="border-y-2 border-solid border-black">
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
      <tbody class="border-y-2 border-solid border-black">
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
      <tfoot class="bg-slate-800">
        <tr>
          <td class="px-4 py-2">Totals</td>
          <td class="px-4 py-2">
            {{
              team.players.reduce(
                (acc, player) => acc + player.stats.fieldGoalsMade,
                0,
              )
            }}
            -
            {{
              team.players.reduce(
                (acc, player) => acc + player.stats.fieldGoalAttempts,
                0,
              )
            }}
          </td>
          <td class="px-4 py-2">
            {{
              (
                (team.players.reduce(
                  (acc, player) => acc + player.stats.fieldGoalsMade,
                  0,
                ) /
                  team.players.reduce(
                    (acc, player) => acc + player.stats.fieldGoalAttempts,
                    0,
                  )) *
                100
              ).toFixed(1)
            }}%
          </td>
          <td class="px-4 py-2">
            {{
              team.players.reduce(
                (acc, player) => acc + player.stats.threePointMakes,
                0,
              )
            }}
            -
            {{
              team.players.reduce(
                (acc, player) => acc + player.stats.threePointAttempts,
                0,
              )
            }}
          </td>
          <td class="px-4 py-2">
            {{
              team.players.reduce((acc, player) => acc + player.stats.points, 0)
            }}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
