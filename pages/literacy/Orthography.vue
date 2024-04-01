<script setup lang="ts"></script>

<template>
  <div>
    <h1>Orthography</h1>
    <div class="grid md:grid-cols-2 gap-4 md:gap-8">
      <div>
        <p>
          The first Cicipu orthography workshop was held in Sakaba on Saturday
          3rd April 2010, hosted by the Sarkinƙasa (the secular chief) of the
          Acipu of Kebbi State. Over 170 people responded to the Sarkinƙasa's
          invitation to discuss options for writing the language.
        </p>
        <p>
          The meeting was a success and a preliminary agreement was reached on
          all the major issues discussed in the orthography proposal.
        </p>
        <p>
          This agreement has been the basis for the materials produced by the
          Cicipu Language Project and others. In practice the writing system is
          a "work in progress", with refinements necessary as more material is
          produced in the language.
        </p>
        <p>
          In particular, a second orthography workshop was held at Tungan Kaɗe
          from 11th-14th April 2016, attended by Bible translators, literacy
          workers, and others. Sixteen advanced principles of writing Cicipu
          were agreed.
        </p>
      </div>
      <div class="flex flex-col gap-8">
        <div class="flex flex-col rounded-lg border border-primary-500 group">
          <NuxtImg
            src="/img/ortho_proposal1.jpg"
            class="rounded-t-lg"
          ></NuxtImg>
          <UDivider></UDivider>
          <div class="p-4 flex flex-col gap-4">
            <div>Initial orthography proposal</div>
            <div class="flex gap-4">
              <NuxtLink
                to="/literacy/2010-03-13_orthography_proposal_v20.pdf"
                target="_blank"
                external
              >
                <UButton class="">English</UButton>
              </NuxtLink>
              <NuxtLink
                to="/literacy/2010-03-13_orthography_proposal_v20_hausa.pdf"
                target="_blank"
                external
              >
                <UButton color="cyan">Hausa</UButton>
              </NuxtLink>
              <NuxtLink to="/photos" class="ml-auto">
                <UButton>Workshop photos</UButton>
              </NuxtLink>
            </div>
          </div>
        </div>
        <NuxtLink
          to="/literacy/2010-03-13_orthography_proposal_v20.pdf"
          target="_blank"
          external
          class="literacy-card"
        >
          <NuxtImg
            src="/img/ortho_proposal1.jpg"
            class="rounded-t-lg"
          ></NuxtImg>
          <UDivider></UDivider>
          <div class="p-4">Initial orthography proposal</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
