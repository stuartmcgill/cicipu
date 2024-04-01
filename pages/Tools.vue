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
      <ToolsLink
        label="Documentation"
        link="/keyboards/cicipu_keyboard_documentation_v1.2.pdf"
        icon="i-heroicons-document-text"
      />
      <ToolsLink
        label="UK keyboard"
        link="/keyboards/cipu_uk.zip"
        icon="i-twemoji-flag-united-kingdom"
      />
      <ToolsLink
        label="US keyboard"
        link="/keyboards/cipu_us.zip"
        icon="i-twemoji-flag-united-states"
      />
    </div>
  </div>
</template>
