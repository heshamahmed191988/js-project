var books = [
    {
      title: "The rist and fall",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEo0Y5OvNm-9inrKkoJC-2KDDyVEdKYjaUw&usqp=CAU",
      url: "https://kemeticrecon.com/khensu/Rise-and-Fall-of-Ancient-Egypt-Toby-Wilkinson.pdf"
    },
    {
      title: "Hand booh to life",
      image: "https://0.academia-photos.com/attachment_thumbnails/55173720/mini_magick20190115-23074-1bd2osd.png?1547548215",
      url: "https://www.academia.edu/35313315/Handbook_to_Life_in_Ancient_Egypt_pdf"
    },
    {
        title: "Eygiption modern histoy",
        image: "https://www.noor-book.com/publice/covers_cache_webp/13/b/1/b/9bdf38c675b1bd0c32d6f06359188e51.png.webp",
        url: "https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-%D9%85%D8%B5%D8%B1-%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB-%D9%85%D9%86-1798-1952-%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-%D9%85%D9%88%D8%B1%D9%88-pdf"
      },
      
      {
        title: "History arabs in islam",
        image: "https://www.noor-book.com/publice/covers_cache_webp/13/5/9/9/401b4c12505998465a4d0f7506638dbd.png.webp",
        url: "https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8-%D9%81%D9%8A-%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85-pdf"
     },
     
      {
        title: "History of islamic eygpt",
        image: "https://www.noor-book.com/publice/covers_cache_webp/10/6/7/b/6360fb356167bb8c993fd819c42a2914.png.webp",
        url: "https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-%D9%85%D8%B5%D8%B1-%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D9%87-pdf"
      },

    
     {
        title: "pre-islamic era",
        image: "https://www.noor-book.com/publice/covers_cache_webp/8/d/0/5/1a45cebf9ad056fdb8af8a69f244f029.png.webp",
        url: "https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8-%D8%B9%D8%B5%D8%B1-%D9%85%D8%A7-%D9%82%D8%A8%D9%84-%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85-%D9%85%D8%AD%D9%85%D8%AF-%D9%85%D8%A8%D8%B1%D9%88%D9%83-%D9%86%D8%A7%D9%81%D8%B9-pdf"
      },
      
  ];
  
   var b;

  function createBookElement() {
    var bookElement = document.createElement("div");
    bookElement.className = "book";
    
    var linkElement = document.createElement("a");
    linkElement.href = b.url;
    linkElement.target = "_blank"; 
    bookElement.appendChild(linkElement);
    
    var imageElement = document.createElement("img");
    imageElement.src = b.image;
    imageElement.alt = b.title;
    linkElement.appendChild(imageElement);
   
    return bookElement;
  }
  
  var bookContainer = document.getElementById("bo");
  
  for (var i = 0; i < books.length; i++) {
     b = books[i];  
     bookElement = createBookElement();
    bookContainer.appendChild(bookElement);
  }