<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Pendidikan</template>
   <li>SMK Taruna Bhakti</li>
   <li>Tahun 2020-2023</li>
   <li>Web Devolover</li>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Keahlian</template>
   <li>Desain</li>
   <li>Html</li>
   <li>CSS</li>
  </WelcomeItem>
 
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Projek</template>
   <li> Wedding Desain</li>
   <li>Aplikasi Desain</li>
   <li>RS Desain</li>
   <li>Foot Delivery Desain</li>
   <li>School Desain</li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Language</template>
    <li>Indonesia</li>
    <li>English</li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Contact</template>

    <li>https://github.com/ShinWolf21</li>
    <li>08986031744</li>
    <li>novamoojk@gmail.com</li>
  </WelcomeItem>
</template>
