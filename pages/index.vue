<script setup lang="ts">
import { simulateGame, type GameResults } from "@/game/gameSim";

function simulate(): void {
  result.value = simulateGame();
}

const result = ref<GameResults | null>(null);
</script>

<template>
  <div class="h-screen bg-slate-800 text-white">
    <div>
      <ul>
        <li class="flex">
          <input type="checkbox" />
          <p>Player positions & Shot selection</p>
        </li>
        <li class="flex">
          <input type="checkbox" />
          <p>Show team totals at bottom of table</p>
        </li>
        <li class="flex">
          <input type="checkbox" />
          <p>Choose shooter based on best overall scorer</p>
        </li>
        <li class="flex">
          <input type="checkbox" />
          <p>Rebounding</p>
        </li>
        <li class="flex">
          <input type="checkbox" />
          <p>Fouls and Free Throws</p>
        </li>
        <li class="flex">
          <input type="checkbox" />
          <p>Substitutions and Minutes Played</p>
        </li>
      </ul>
    </div>

    <div>
      <p>Click the button below to simulate a game</p>
      <button
        class="rounded bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700"
        @click="simulate"
      >
        Simulate Game
      </button>
    </div>

    <div class="mb-3">
      <p v-if="result === null">No games have been simulated yet</p>
      <div v-else class="flex justify-center">
        <h2>{{ result.homeTeam.name }} &nbsp;</h2>
        <h2>{{ result.homeTeam.stats.points }} &nbsp;</h2>
        <span> - &nbsp; </span>
        <h2>{{ result.awayTeam.name }} &nbsp;</h2>
        <h2>{{ result.awayTeam.stats.points }}</h2>
      </div>
    </div>

    <div v-if="result !== null">
      <TeamPPQTable :result="result" />
    </div>

    <div v-if="result !== null" class="m-auto w-11/12 text-center">
      <StatsTable :team="result.homeTeam" />

      <StatsTable :team="result.awayTeam" />
    </div>
  </div>
</template>
