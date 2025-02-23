const data = [
  {
    quote: "menarilah, saat lukamu terbuka. Menarilah saat kamu telah merobek perbannya. Menarilah di tengah pertempuran. Menarilah dalam darahmu. Menarilah pula saat kamu Benar-benar bebas.",
    cite: {
      link: "https://www.youtube.com/@ngajibebrayan",
      label: "Maulana Jalaluddin Rumi",
    }
  },
  {
    quote: "Wahai Dzat yang Maha Membolak-balikkan hati, teguhkanlah hatiku di atas agama-Mu",
    cite: {
      link: "https://rumaysho.com/13301-ini-ceritanya-kenapa-nabi-terus-berdoa-meminta-istiqamah.html",
      label: "rumaysho.com",
    }
  },
  {
    quote: "orang kalau benar mencintai, ia tidak akan peduli dianggap tercela, gila, linglung",
    cite: {
      link: "https://www.youtube.com/@ngajibebrayan",
      label: "YouTube: Ngaji Bebrayan",
    }
  },
  {
    quote: "Teringat kuteringat<br/>Pada janjimu kuterikat<br/>Hanya sekejap ku berdiri<br/>Kulakukan sepenuh hati",
    cite: {
      link: "#",
      label: "Sandaran Hati<br/>Song by Letto ‧ 2005",
    }
  },
  {
    quote: "Akan datang hari<br/>Mulut dikunci<br/>Kata tak ada lagi",
    cite: {
      link: "#",
      label: "Ketika Tangan dan Kaki Berkata<br/>Song by Chrisye ‧ 1997",
    }
  },
  {
    quote: "Malam chaos ini kuterasa sepi<br/>Ku tak mau sendiri, I need you here with me",
    cite: {
      link: "#",
      label: "Garam & Madu",
    }
  },
  {
    quote: "rambut Beliau sedikit kemerahan karena pengaruh minyak wangi",
    cite: {
      link: "#",
      label: "Buku: Pribadi Muhammad by Nizar Abazhah",
    }
  },
  {
    quote: "Beliau sangat menyukai wewangian. Karena itu, rambut dan jenggotnya selalu dilumasi dengan minyak wangi.",
    cite: {
      link: "#",
      label: "Buku: Pribadi Muhammad by Nizar Abazhah",
    }
  },
  {
    quote: "Anda hanya perlu action. Itu saja!",
    cite: {
      link: "#",
      label: "Buku: Creative Writing by A.S. Laksana",
    }
  },
  {
    quote: "Orang yang tidak pernah melakukan kesalahan biasanya tidak menghasilkan apa-apa.",
    cite: {
      link: "#",
      label: "Edward John Pheips (1822-1900)",
    }
  },
];

console.log('jos');

var places = document.querySelectorAll(
  ".item .item"
);

const template = document.querySelector(
  ".template blockquote"
);
console.log(template);
for (let i = 0; i < places.length; i++) {
  const el = places[i];
  const insert = data[i];
  el.append(template.cloneNode(true));
  console.log(el);
  el.querySelector(
    ".quote"
  ).innerHTML = insert.quote; 
  const a = el.querySelector("a");
  a.href = insert.cite.link; 
  a.innerHTML = insert.cite.label;
}
