<script setup lang="ts"></script>

<template>
  <h1>Literacy and language development</h1>
  <div class="grid sm:grid-cols-2 gap-8">
    <LiteracyCard
      text="How to read and write in Cicipu for those who can already read Hausa"
      image="/img/primer.jpg"
      link="/literacy/hausa_cicipu_transition_primer_a5.pdf"
      :external="true"
    ></LiteracyCard>
    <LiteracyCard
      text="How to read and write in Cicipu for those who can already read Hausa"
      image="/img/orthography1.jpg"
      link="/literacy/orthography"
    ></LiteracyCard>
  </div>
</template>
