const settings = {
   name: "fronty",
   state: {
      frontity: {
         url: "https://dev-openlearnx.pantheonsite.io",
         title: "Test Frontity Blog",
         description: "WordPress installation for Frontity development",
      },
   },
   packages: [
   {
      name: "curriki-theme",
      state: {
         theme: {
            menu: [
               ["Home", "/"],
               ["Nature", "/category/nature/"],
               ["Travel", "/category/travel/"],
               ["Japan", "/tag/japan/"],
               ["About Us", "/about-us/"],
            ],
            featured: {
               showOnList: false,
               showOnPost: false,
            },
         },
      }
   },
   {
      name: "@frontity/wp-source",
      state: {
         source: {
            url: "https://dev-openlearnx.pantheonsite.io",
         },
      },
   },
   "@frontity/tiny-router",
   "@frontity/html2react",
   ],
};

export default settings;
