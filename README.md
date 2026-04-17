# 🖼️ Image API Gallery (Load More Feature)

A modern and responsive **Image Gallery App** built using **HTML, CSS, and JavaScript**.  
It fetches images from an external API and includes a **Load More** feature to dynamically load additional images.

---

## 🚀 Features

- Fetch images from an external API
- Load more images dynamically
- Responsive grid layout
- Smooth and clean UI
- Simple and beginner-friendly JavaScript project
- Fast image rendering

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Image API (e.g., Unsplash / Pexels API)

---

## 📁 Project Structure

```

image-api-gallery/
│── index.html
│── style.css
│── app.js
│── images/ (optional for UI assets)
│── README.md

````id="structure_imageapi01"

---

## 🖼️ Screenshots

### Gallery View
![Gallery View](images/screenshot1.png)

### Load More Feature
![Load More](images/screenshot2.png)

---

## 🌐 API Used

This project uses an external image API to fetch images dynamically.

Example APIs:
- Unsplash API
- Pexels API

---

## 🔑 API Setup

To run this project, you need an API key.

Add your API key inside `app.js`:

```javascript id="apikeyimageapi01"
const apiKey = "YOUR_API_KEY_HERE";
````

---

## ▶️ How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/image-api-gallery.git
   ```

2. Navigate to project folder:

   ```bash
   cd image-api-gallery
   ```

3. Open `index.html` in your browser.

---

## 💡 How It Works

* App sends request to image API
* API returns a list of images
* Images are displayed in a grid
* Clicking **Load More** fetches next set of images

Example flow:

```javascript id="loadmorelogic01"
let page = 1;

async function getImages() {
    const response = await fetch(`https://api.example.com/photos?page=${page}`);
    const data = await response.json();

    displayImages(data);
}

document.getElementById("loadMore").addEventListener("click", () => {
    page++;
    getImages();
});
```

---

## 🎯 Future Improvements

* Search images by keyword
* Infinite scroll instead of load button
* Image download option
* Lightbox preview
* Favorite/save images feature

---

## ⚠️ Note

Do not expose your API key in public repositories. Use environment variables if deploying.

---

## 👨‍💻 Author

Built with ❤️ using HTML, CSS, and JavaScript.

---

## 📜 License

This project is open-source and free to use.
