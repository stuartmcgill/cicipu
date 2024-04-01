<script setup lang="ts"></script>

<template>
  <h1>Tools</h1>
  <div class="flex flex-col sm:flex-row gap-4 sm:gap-12 max-w-2xl">
    <div>
      <p>
        The Cicipu alphabet has some special characters that are not found in
        English and other European alphabets (implosives, nasal vowels, and
        vowels with tone marks).
      </p>
      <p>
        Two Cicipu Windows keyboards are available, one based on a UK layout and
        the other on a US layout. These keyboards were created using
        <NuxtLink
          to="https://www.microsoft.com/en-us/download/details.aspx?id=102134"
          >Microsoft Keyboard Layout Creator</NuxtLink
        >.
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <NuxtLink
        to="/keyboards/cicipu_keyboard_documentation_v1.2.pdf"
        external
        target="_blank"
        class="flex items-center gap-4"
      >
        <UIcon name="i-heroicons-document-text"></UIcon>
        <div>Documentation</div>
      </NuxtLink>
      <NuxtLink
        to="/keyboards/cipu_uk.zip"
        class="flex items-center gap-4"
        external
      >
        <UIcon name="i-twemoji-flag-united-kingdom"></UIcon>
        <div>UK keyboard</div>
      </NuxtLink>
      <NuxtLink
        to="/keyboards/cipu_us.zip"
        external
        class="flex items-center gap-4"
      >
        <UIcon name="i-twemoji-flag-united-states"></UIcon>
        <div>US keyboard</div>
      </NuxtLink>
    </div>
  </div>
</template>
