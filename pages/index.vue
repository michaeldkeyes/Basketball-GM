<script setup lang="ts">
import { simulateGame, type GameResults } from "@/game/gameSim";

function simulate(): void {
  result.value = simulateGame();
}

const result = ref<GameResults | null>(null);
</script>

<template>
  <div class="bg-slate-800 text-white">
    <div>
      <ul>
        <li class="flex">
          <input type="checkbox" />
          <p>Create a table component</p>
        </li>
        <li class="flex">
          <input type="checkbox" />
          <p>Add FGA / FGM</p>
        </li>
        <li class="flex">
          <input type="checkbox" />
          <p>Gametime & shotclock</p>
        </li>
        <li class="flex">
          <input type="checkbox" />
          <p>Team points scored per quarter table</p>
        </li>
        <li class="flex">
          <input type="checkbox" />
          <p>Overtime</p>
        </li>
        <li class="flex">
          <input type="checkbox" />
          <p>Player positions</p>
        </li>
        <li class="flex">
          <input type="checkbox" />
          <p>Shot selection</p>
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
        <h2>{{ result.team1.name }} &nbsp;</h2>
        <h2>{{ result.team1.stats.points }} &nbsp;</h2>
        <span> - &nbsp; </span>
        <h2>{{ result.team2.name }} &nbsp;</h2>
        <h2>{{ result.team2.stats.points }}</h2>
      </div>
    </div>

    <div v-if="result !== null" class="m-auto w-11/12 text-center">
      <StatsTable :team="result.team1" />

      <StatsTable :team="result.team2" />
    </div>
  </div>
</template>
