tailwind.config = {
    theme: {
      extend: {
        fontFamily:{
          dm: ["DM Sans"],
          cv: ["Chivo"],
          mon: ["'Montserrat'"],
          tiro: ["Tiro Bangla"],
          bb: ["Baloo Da 2"],
          bbb: ["Noto Sans Bengali"],
        },
        fontSize:{
            22: "22px",
            56: "56px",
        },
        colors:{
         primary:"#1C1E53",
         secondary:"#43E7Df",
         third:"#645E76",
         fourth:"#FF7364",
         hightlight: "#FDB400",
        },
        spacing:{
          26:"26px",
          42:"42px",
          46:"46px",
          100:"87px",
          291:'291px',
          400:"555px",
          550:"550px",
          780:"690px",
          649:"642px",
        },
        height:{
         300:'380px',
         500:'650px',
         130:'180px',
         16:'16px',
        },
        width:{
         32:'32%',
         130:'180px',
         16:'16px',
        },
        maxWidth:{
         container:"1320px",
         796: "796px",
         350:"350px",
         480:"480px",
         "23%":"23%",
         "48%":"48%",
        },
        minWidth:{
          480: "480px",
          300: "200px",
          90: "80px",
        },
        keyframes: {
         fadeImage: {
           '20%': {opacity:1},
           '40%': {opacity:0},
           '60%': {opacity:0},
           '80%': {opacity:0},
           '100%': {opacity:0},
         },
         fadeImage2: {
           '20%': {opacity:0},
           '40%': {opacity:1},
           '60%': {opacity:0},
           '80%': {opacity:0},
           '100%': {opacity:0},
         },
         fadeImage3: {
           '20%': {opacity:0},
           '40%': {opacity:0},
           '60%': {opacity:1},
           '80%': {opacity:0},
           '100%': {opacity:0},
         },
         fadeImage4: {
           '20%': {opacity:0},
           '40%': {opacity:0},
           '60%': {opacity:0},
           '80%': {opacity:1},
           '100%': {opacity:0},
         },
         fadeImage5: {
           '20%': {opacity:0},
           '40%': {opacity:0},
           '60%': {opacity:0},
           '80%': {opacity:0},
           '100%': {opacity:1},
         },
         
       },
       animation: {
         fadeImage: 'fadeImage 35s linear infinite alternate',
         fadeImage2: 'fadeImage2 35s linear infinite alternate',
         fadeImage3: 'fadeImage3 35s linear infinite alternate',
         fadeImage4: 'fadeImage4 35s linear infinite alternate',
         fadeImage5: 'fadeImage5 35s linear infinite alternate',
 
       },
      },
    },
  };