<script setup lang="ts">
const sections = [
  {
    label: 'Published works',
    size: 'xl',
    class: 'font-bold font-heading',
    icon: 'i-heroicons-book-open',
    defaultOpen: true,
    slot: 'published'
  }
]
</script>

<template>
  <div>
    <div class="my-8 text-lg">Anthropology</div>

    <UAccordion
      :items="sections"
      :ui="{
        wrapper: 'w-full flex flex-col',
        container: 'w-full flex flex-col',
        item: {
          base: '',
          size: '',
          color: '',
          padding: 'pt-1.5 pb-3',
          icon: 'ms-auto transform transition-transform duration-200'
        },
        transition: {
          enterActiveClass:
            'overflow-hidden transition-[height] duration-200 ease-out',
          leaveActiveClass:
            'overflow-hidden transition-[height] duration-200 ease-out'
        },
        default: {
          openIcon: 'i-heroicons-chevron-down-20-solid',
          closeIcon: '',
          class: 'mb-1.5 w-full',
          variant: 'soft'
        }
      }"
    >
      <template #published>
        <ul class="references"></ul>
      </template>
    </UAccordion>
  </div>
</template>
