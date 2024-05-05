<script setup lang="ts"></script>

<template>
  <div>
    <h1>External links</h1>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <LinkCard
        link="https://www.azaahaacipu.com/en/home"
        image="/img/wonderful-plan.png"
        title="Aza haAcipu"
        text="A site profiling the work of the Cicipu Language Development Project"
      />
      <LinkCard
        link="https://www.youtube.com/user/cicipuvideo/videos?app=desktop"
        image="/img/gallery/kezzeme_07.jpg"
        title="Cicipu Youtube channel"
        text="Various videos recorded by Stuart McGill"
      />
      <LinkCard
        link="https://www.elararchive.org/dk0052/"
        icon="i-heroicons-archive-box"
        title="Endangered Languages Archive"
        text="Annotated texts and audiovisual material in the Cicipu language"
      />
      <LinkCard
        link="https://app.box.com/s/jt71nt5o3w0p81siw6tpscxfb3o9lbnd"
        image="img/toolbox.png"
        title="Toolbox project"
        text="Annotated Cicipu corpus (50,000 words), lexicon, metadata, and field notes"
      />
      <LinkCard
        link="https://www.ethnologue.com/language/awc/"
        image="https://www.ethnologue.com/img/logo-monogram-color.svg"
        title="The Ethnologue"
        text="The Ethnologue record for Cicipu"
      />
      <LinkCard
        link="https://en.wikipedia.org/wiki/Cipu_language"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/225px-Wikipedia-logo-v2.svg.png"
        title="Wikipedia"
        text="The Cicipu entry"
      />
      <LinkCard
        link="https://rogerblench.info/Language/Niger-Congo/BC/Kainji/KOP.htm"
        image="https://rogerblench.info/RBOP_files/image002.jpg"
        title="Roger Blench's Kainji site"
        text="A wealth of information on Kainji languages"
      />
      <LinkCard
        link="https://www.zotero.org/groups/2548758/nw_kainji_bibliography/"
        icon="i-heroicons-link"
        title="NW Kainji Bibliography"
        text="Comprehensive list of academic and indigenous literature"
      />
    </div>
  </div>
</template>
