<script setup lang="ts">
import type { Team } from "~/game/types/team.interface";

interface Props {
  team: Team;
}

defineProps<Props>();

const headers = ["Player", "Position", "FG", "FG%", "3P", "FT", "Points"];
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
            <td class="px-2 py-1">{{ player.name }}</td>
            <td class="px-2 py-1">{{ player.position }}</td>
            <td class="px-2 py-1">
              {{ player.stats.fieldGoalsMade }} -
              {{ player.stats.fieldGoalAttempts }} ({{
                player.attributes.twoPointShooting / 10
              }})
            </td>
            <td class="px-2 py-1">
              {{
                (
                  (player.stats.fieldGoalsMade /
                    player.stats.fieldGoalAttempts) *
                  100
                ).toFixed(1)
              }}%
            </td>
            <td class="px-2 py-1">
              {{ player.stats.threePointMakes }} -
              {{ player.stats.threePointAttempts }} ({{
                player.attributes.threePointShooting / 10
              }})
            </td>
            <td class="px-2 py-1">
              {{ player.stats.freeThrowMakes }} -
              {{ player.stats.freeThrowAttempts }} ({{
                player.attributes.freeThrowShooting / 10
              }})
            </td>
            <td class="px-2 py-1">{{ player.stats.points }}</td>
          </tr>
        </template>
      </tbody>
      <tfoot class="bg-slate-800">
        <tr>
          <td class="px-2 py-1">Totals</td>
          <td class="px-2 py-1" />
          <td class="px-2 py-1">
            {{ team.stats.fieldGoalsMade }}
            -
            {{ team.stats.fieldGoalAttempts }}
          </td>
          <td class="px-2 py-1">
            {{
              (
                (team.stats.fieldGoalsMade / team.stats.fieldGoalAttempts) *
                100
              ).toFixed(1)
            }}%
          </td>
          <td class="px-2 py-1">
            {{ team.stats.threePointMakes }}
            -
            {{ team.stats.threePointAttempts }}
          </td>
          <td class="px-2 py-1">
            {{ team.stats.freeThrowMakes }} - {{ team.stats.freeThrowAttempts }}
          </td>
          <td class="px-2 py-1">
            {{ team.stats.points }}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
