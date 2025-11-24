// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/pizzhaw.github.io/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/pizzhaw.github.io/blog/";
          },
        },{id: "post-ctf-write-up-template",
        
          title: "CTF Write-Up Template",
        
        description: "How to structure a clear and effective CTF write-up",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/pizzhaw.github.io/blog/2025/WriteUpTemplate/";
          
        },
      },{id: "news-launch-of-the-zhaw-ctf-team-website",
          title: 'Launch of the ZHAW CTF Team Website',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/pizzhaw.github.io/news/2025-11-22-Launch/";
            },},{id: "news-new-swag-available",
          title: 'New Swag Available!',
          description: "Exciting new swag for ZHAW CTF team members",
          section: "News",handler: () => {
              window.location.href = "/pizzhaw.github.io/news/2025-11-23-Swag/";
            },},{id: "news-sponsors-wanted",
          title: 'Sponsors Wanted!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/pizzhaw.github.io/news/2025-11-24-Sponsors/";
            },},{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/EXQGezaeaQ", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%75%74%68@%7A%68%61%77.%63%68", "_blank");
        },
      },{
        id: 'social-ZHAW_CyberSec',
        title: 'Zhaw_cybersec',
        section: 'Socials',
        handler: () => {
          window.open("https://www.zhaw.ch/en/engineering/institutes-centres/init/cybersecurity-at-zhaw", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
