<script setup>
import { ref } from 'vue';
import { useAppStore } from '@/stores';

import AppMatrix from '@/components/AppMatrix.vue';

import BriefcaseIcon from '@/components/icons/BriefcaseIcon.vue';
import MapMarkerIcon from '@/components/icons/MapMarkerIcon.vue';
import FacebookIcon from '@/components/icons/FacebookIcon.vue';
import InstagramIcon from '@/components/icons/InstagramIcon.vue';
import TelegramIcon from '@/components/icons/TelegramIcon.vue';
import GithubIcon from '@/components/icons/GithubIcon.vue';
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue';

const store = useAppStore();
</script>

<template>
  <AppMatrix />
  <div class="max-w-xl flex items-center h-auto flex-wrap mx-auto my-40 z-10">
    <div class="w-full bg-gray-900 rounded-lg shadow-2xl opacity-75 mx-6">
      <div class="p-12 text-center">
        <img
          width="200"
          height="200"
          class="block rounded-full shadow mx-auto -mt-16 bg-cover bg-center"
          src="/img/profile-image.webp"
        />
        <h1 class="text-3xl font-bold pt-8">{{ $t(store.author) }}</h1>
        <div class="mx-auto w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
        <p class="pt-4 text-base font-bold flex items-center justify-center">
          <BriefcaseIcon />
          {{ $t('Fullstack Developer') }}
        </p>
        <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center">
          <MapMarkerIcon />
          {{ $t('Kyiv - 50.4504° N, 30.5245° E') }}
        </p>
        <p class="pt-8 text-sm">
          {{
            $t(
              'JavaScript developer with a passion for learning.'
            )
          }}
        </p>
        <div class="mt-6 pb-16 lg:pb-0 w-4/5 mx-auto flex flex-wrap items-center justify-between">
          <a
            class="link"
            target="_blank"
            :href="link.href"
            :data-tippy-content="link.title"
            v-for="link in store.socialLinks"
            :key="link.title"
          >
            <component :is="link.component" />
          </a>
        </div>
        <p class="pt-8 text-xs text-gray-600">
          {{ $t(store.copyright) }}
        </p>
      </div>
    </div>
  </div>
  <AppToggleTheme />
</template>
