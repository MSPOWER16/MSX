

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**:
```bash
git clone https://github.com/your-username/terabox-downloader.git
cd terabox-downloader
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Run the development server**:
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser** and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 🔧 API Reference

### POST `/api/terabox-download`

Converts a TeraBox sharing link to a direct download link.

**Request Body:**
```json
{
  "url": "https://exmaple.com/s/1234567890"
}
```

**Response:**
```json
{
  "data": {
    "title": "filename.mp4",
    "size": "125.4 MB",
    "thumbnail": "https://thumbnail-url.jpg",
    "download_link": "https://direct-download-link.com/file.mp4"
  }
}
```

**Error Response:**
```json
{
  "error": "Invalid URL"
}
```

## 🌐 Multi-Language Support

The application supports multiple languages through i18n:
- English (default)
- Chinese (zh)
- More languages can be added easily

## 📱 Responsive Design

Fully responsive and works seamlessly across all devices:
- **Desktop**: Full-featured interface with optimal spacing
- **Tablet**: Adapted layout for medium screens
- **Mobile**: Touch-friendly interface with compact design

## 🔒 Privacy & Security

- **No Data Storage**: We don't store your files or personal information
- **Secure Processing**: All requests are processed securely
- **No Tracking**: We don't track your downloads or usage patterns
- **HTTPS Only**: All communication is encrypted

## 📊 Performance

- **Link Generation**: < 3 seconds average
- **Uptime**: 99.9% availability
- **Supported Formats**: All file types
- **Browser Support**: All modern browsers
- **Mobile Optimization**: Fully responsive design

