import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import FacebookIcon from '@/components/icons/FacebookIcon.vue';
import InstagramIcon from '@/components/icons/InstagramIcon.vue';
import TelegramIcon from '@/components/icons/TelegramIcon.vue';
import GithubIcon from '@/components/icons/GithubIcon.vue';
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue';

export const useAppStore = defineStore('application', () => {
  const author = ref('Pavlo Yamchinsky');

  const copyright = computed(
    () => `Copyright © ${new Date().getFullYear()} Pavlo Yamchinsky. All rights reserved.`
  );

  const socialLinks = ref([
    {
      title: 'Facebook',
      component: FacebookIcon,
      href: 'https://www.facebook.com/profile.php?id=1073624017'
    },
    {
      title: 'Instagram',
      component: InstagramIcon,
      href: 'https://www.instagram.com/paveliamchinskii?igsh=eGJsN250bnkzdXk5'
    },
    {
      title: 'Github',
      component: GithubIcon,
      href: 'https://github.com/yamchinsky/'
    },
    {
      title: 'Linkedin',
      component: LinkedinIcon,
      href: 'https://www.linkedin.com/in/pavlo-yamchynskyi-27375b83/'
    },
    {
      title: 'Telegram',
      component: TelegramIcon,
      href: 'https://t.me/PavloIamchynskyi/'
    }
  ]);

  return { author, copyright, socialLinks };
});
