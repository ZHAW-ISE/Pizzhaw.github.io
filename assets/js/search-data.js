// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-aitu-ctf-2026-quals-fast-amp-foodious-web",
        
          title: "AITU CTF 2026 Quals - Fast &amp; Foodious (Web)",
        
        description: "Privilege escalation and skip of a security test",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/AITU-CTF-2026-Fast-and-Foodious/";
          
        },
      },{id: "post-redfox-ctf-2026-magni-39-s-oversight-forensics",
        
          title: "Redfox CTF 2026 - Magni&#39;s Oversight (Forensics)",
        
        description: "How the &quot;Magni&#39;s Oversight&quot; challenge was solved at the Redfox CTF 2026 event.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Redfox-CTF-2026-Magnis-Oversight/";
          
        },
      },{id: "post-utctf-2026-hour-of-joy-pwn",
        
          title: "UTCTF 2026 - Hour of Joy (PWN)",
        
        description: "Exploiting a format string vulnerability to leak a stack variable and bypass a secret code check.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/UTCTF2026-hour-of-joy-Nevos/";
          
        },
      },{id: "post-utctf-2026-half-awake-forensics",
        
          title: "UTCTF 2026 - Half Awake (Forensics)",
        
        description: "How the &quot;Half Awake&quot; challenge was solved at the UTCTF 2026 event.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/UTCTF2026-Half-Awake/";
          
        },
      },{id: "post-apoorvctf-2026-days-of-future-past-web",
        
          title: "ApoorvCTF 2026 - Days of Future Past (Web)",
        
        description: "How the &quot;Days of Future Past&quot; challenge was solved at the ApoorvCTF 2026 event.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ApoorvCTF2026-Days-of-Future-Past/";
          
        },
      },{id: "post-apoorv-ctf-2026-routine-checks-forensics",
        
          title: "Apoorv CTF 2026 - Routine Checks (Forensics)",
        
        description: "Extracting a hidden flag from a JPEG image concealed inside a PCAP capture using Wireshark and steghide",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ApoorvCTF-Nevos/";
          
        },
      },{id: "post-cryptonite-ctf-2026-mustard-and-mangoes-steganography",
        
          title: "CryptoNite CTF 2026 - Mustard and Mangoes (Steganography)",
        
        description: "Recovering a hidden flag from a PNG with a tampered IHDR height, encoded as 6s and 7s in a text file",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/CryptoNiteCTF-Nevos/";
          
        },
      },{id: "post-ara-ctf-7-0-ended-of-justify-lylera-secret-web",
        
          title: "ARA CTF 7.0 - Ended of Justify Lylera Secret (WEB)",
        
        description: "Exploiting an EJS Server-Side Template Injection behind a heavy blacklist.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ARACTF7.0-Nevos/";
          
        },
      },{id: "post-ehax-ctf-2026-borderline-personality-web",
        
          title: "EHAX CTF 2026 - Borderline Personality (Web)",
        
        description: "How the &quot;Borderline Personality&quot; challenge was solved at the EHAX CTF 2026 event.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/EHAX-CTF-Borderline-Personality/";
          
        },
      },{id: "post-srdnlen-ctf-2026-double-shop-web",
        
          title: "Srdnlen CTF 2026 - Double Shop (WEB)",
        
        description: "How the &quot;Double Shop&quot; challenge was solved at the Srdnlen CTF 2026 Quals event.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/SrdnlenCTF2026-Nevos/";
          
        },
      },{id: "post-ehax-ctf-2026-womp-womp-pwn",
        
          title: "EHAX CTF 2026 - Womp Womp (PWN)",
        
        description: "How the &quot;Womp Womp&quot; challenge was solved at the EHAX CTF 2026 event.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/EHAXCTF2026-Nevos/";
          
        },
      },{id: "post-univsthreats-26-quals-ctf-nightmare-customer-web",
        
          title: "UniVsThreats 26 Quals CTF - Nightmare Customer (Web)",
        
        description: "How the &quot;Nightmare Customer&quot; challenge was solved at the UVT CTF event.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/UniVsThreats26-Nevos/";
          
        },
      },{id: "post-ctf-write-up-template",
        
          title: "CTF Write-Up Template",
        
        description: "How to structure a clear and effective CTF write-up",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/WriteUpTemplate/";
          
        },
      },{id: "news-launch-of-the-zhaw-ctf-team-website",
          title: 'Launch of the ZHAW CTF Team Website',
          description: "We are excited to announce the launch of our new website for the ZHAW Capture the Flag (CTF) Team, providing updates, events, and resources for cybersecurity enthusiasts at ZHAW.",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-22-Launch/";
            },},{id: "news-new-swag-available",
          title: 'New Swag Available!',
          description: "Exciting new swag for ZHAW CTF team members. Check out our latest collection of coffee mugs, sponsored by the Institute of Computer Science at ZHAW.",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-23-Swag/";
            },},{id: "news-sponsors-wanted",
          title: 'Sponsors Wanted!',
          description: "We are looking for sponsors to support our ZHAW CTF Team as we prepare for upcoming competitions and events. Sponsorships help us cover costs for event participation, equipment, training resources, and team swag.",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-24-Sponsors/";
            },},{id: "news-master-of-science-in-engineering-ethical-hacking-course",
          title: 'Master of Science in Engineering - Ethical Hacking Course',
          description: "Our Master of Engineering program now includes a comprehensive Ethical Hacking course, designed to equip students with the skills and knowledge needed to identify and mitigate cybersecurity threats effectively.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-12-03-Ethical-Hacking-Course/";
            },},{id: "news-pizza-hacking-night-spring-2026-edition",
          title: 'Pizza Hacking Night - Spring 2026 Edition',
          description: "Join us for an evening of CTF challenges, expert talks, networking, and free pizza.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-12-03-Pizza-Hacking-Night-Spring26/";
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
