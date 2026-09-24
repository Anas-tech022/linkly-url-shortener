# 🔗 Linkly — URL Shortener

Linkly is a simple and easy-to-use URL shortening website designed to turn long URLs into short, clean, and shareable links.

Long URLs can be difficult to copy, share, and remember. **Linkly** solves this problem by converting long URLs into short links that are much easier to use.

Simply enter your long URL, generate a short link, and share it wherever you want — social media, messages, websites, emails, or anywhere else.

## ✨ Features

* 🔗 Shorten long URLs into clean, shareable links
* ⚡ Fast and simple URL shortening
* 📋 Easily copy generated short URLs
* 📱 Responsive design for desktop, tablet, and mobile
* 🎨 Modern and clean UI
* 🗄️ MongoDB database for storing shortened URLs
* 🚀 Built with Next.js
* 💨 Styled with Tailwind CSS
* 🔒 URL validation and error handling

## 🛠️ Tech Stack

| Technology       | Purpose                            |
| ---------------- | ---------------------------------- |
| **Next.js**      | Frontend and application framework |
| **React**        | Building UI components             |
| **MongoDB**      | Database for storing URLs          |
| **Tailwind CSS** | Styling and responsive UI          |
| **JavaScript**   | Application logic                  |


## 🚀 Getting Started

Follow these steps to run Linkly locally.

### 1. Clone the repository

```bash
git clone https://github.com/Anas-tech022/linkly-url-shortener.git
```

### 2. Navigate to the project directory

```bash
cd linkly-url-shortener
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up environment variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
```

Replace the MongoDB connection string with your own MongoDB database URL.

### 5. Start the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## 📁 Project Structure

```text
linkly-url-shortener/
│
├── app/
|   ├──[shrt]/
|   |   └──page.js
|   ├── about/
|   |   └──page.js 
|   ├── api/generate/
|   |        └── route.js
│   ├── components/
|   |     └── Navbar.js 
│   ├── shorten/
|   |    └──page.js 
|   ├── global.css
│   ├── page.js
│   └── layout.js
│
├── lib/
│   └── mongodb.js
├── .env.local
├── .gitignore
├── .package-lock.json
├── package.json
├── postcss.config.mjs
└── README.md
```

## 🔄 How It Works

1. User enters a long URL.
2. Linkly validates the URL.
3. A unique short identifier is generated.
4. The original URL and short identifier are stored in MongoDB.
5. Linkly generates a short URL.
6. The user can copy and share the generated link.
7. When someone visits the short URL, they are redirected to the original URL.

### Example

```text
Original URL:
https://example.com/this-is-a-very-long-url-that-is-difficult-to-share

↓

Linkly:

https://your-domain.com/aB72x

↓

Redirects to the original URL
```

## 🗄️ Database

Linkly uses **MongoDB** to store shortened URL information.

A URL document can contain information such as:

```javascript
{
  url: "https://example.com/this-is-a-very-long-url-that-is-difficult-to-share"
  shorturl: "your-short-url"
  success: true
  createdAt: Date
}
```

## 🔐 Environment Variables

The following environment variables are required:

| Variable               | Description                 |
| ---------------------- | --------------------------- |
| `MONGODB_URI`          | MongoDB connection string   |


## 📦 Available Scripts

Run the development server:

```bash
npm run dev
```

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Run linting:

```bash
npm run lint
```

## 🔮 Future Improvements

Some features that could be added in future versions:

*  QR code generation
*  URL analytics
*  Click tracking
*  User authentication
*  User dashboard
*  Link expiration
*  Link management
*  Dark mode
*  Rate limiting
*  Advanced analytics

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/new-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add new feature"
```

5. Push your branch

```bash
git push origin feature/new-feature
```

6. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**ANAS**

If you found this project useful, consider giving it a ⭐ on GitHub.

---

**Linkly** — Turn long URLs into short, clean, and shareable links. 🔗
