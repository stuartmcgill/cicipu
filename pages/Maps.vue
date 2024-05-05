<script setup lang="ts"></script>

<template>
  <div>
    <h1>Maps</h1>
    <p class="mb-8">
      The Cicipu heartland straddles the boundary of Kebbi and Niger States in
      Nigeria, and speakers can also be found in the southwest of Niger State
      where farmland is plentiful. Violence in recent years has led to a lot of
      displacement.
    </p>
    <div class="grid sm:grid-cols-2 gap-8">
      <NuxtLink class="literacy-card" to="/maps/dialects">
        <div class="p-4 flex flex-wrap items-center">
          <h2>Cicipu dialects</h2>
          <div>Native speakers identify seven dialect areas</div>
        </div>
        <UDivider />
        <NuxtImg
          src="/img/maps/maps_dialects.jpg"
          class="h-full rounded-b-lg object-cover"
        />
      </NuxtLink>
      <NuxtLink class="literacy-card" to="/maps/languages">
        <div class="p-4 flex flex-wrap items-center">
          <h2>Surrounding languages</h2>
          <div>Cicipu is one of many Kainji languages in northwest Nigeria</div>
        </div>
        <UDivider />
        <NuxtImg
          src="/img/maps/maps_ethnologue.jpg"
          class="h-full rounded-b-lg object-cover"
        />
      </NuxtLink>
    </div>
  </div>
</template>
