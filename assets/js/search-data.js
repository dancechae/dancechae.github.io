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
  },{id: "nav-works",
          title: "works",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/works/";
          },
        },{id: "nav-",
          title: "",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-2011년-제41회-동아무용콩쿠르-한국창작무용부문-일반부-금상-동아일보",
          title: '2011년 제41회 동아무용콩쿠르 한국창작무용부문 일반부 금상(동아일보)',
          description: "",
          section: "News",},{id: "news-asia-지도자상-국제춤축제연맹-fidaf-federation-of-international-dance-festivals",
          title: 'ASIA 지도자상(국제춤축제연맹, FIDAF - Federation of International Dance Festivals)',
          description: "",
          section: "News",},{id: "news-asia-안무자상-국제춤축제연맹-fidaf-federation-of-international-dance-festivals",
          title: 'ASIA 안무자상(국제춤축제연맹, FIDAF - Federation of International Dance Festivals)',
          description: "",
          section: "News",},{id: "news-올해의-신인전통무용가상-사단법인-보훈무용예술협회",
          title: '올해의 신인전통무용가상(사단법인 보훈무용예술협회)',
          description: "",
          section: "News",},{id: "news-2025년-신진예술-지원사업-선정-세종시문화관광재단",
          title: '2025년 신진예술 지원사업 선정(세종시문화관광재단)',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-화선무",
          title: '화선무',
          description: "(꽃 花, 부채 扇) 기본 춤을 바탕으로 짜여 진 즉흥적인 춤",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},];
