

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

The TeraBox downloader is fully responsive and works seamlessly across all devices:
- **Desktop**: Full-featured interface with optimal spacing
- **Tablet**: Adapted layout for medium screens
- **Mobile**: Touch-friendly interface with compact design

## 🔒 Privacy & Security

- **No Data Storage**: We don't store your files or personal information
- **Secure Processing**: All requests are processed securely
- **No Tracking**: We don't track your downloads or usage patterns
- **HTTPS Only**: All communication is encrypted

## ❓ Frequently Asked Questions

### What is TeraBox Downloader?
TeraBox Downloader is a free online tool that converts TeraBox sharing links into direct download links, allowing you to download files without needing a TeraBox account.

### Is it really free?
Yes, completely free with no hidden charges or subscription fees. You can use it unlimited times.

### Do I need to create an account?
No registration or account creation required. Just paste your link and download.

### What file types are supported?
All file types available on TeraBox including videos, documents, images, archives, and more.

### Are there any download limits?
No, there are no download limits or speed restrictions on our service.

### Is my data safe?
Yes, we don't store any of your files or personal information. All processing is done in real-time.

### How fast is the download process?
Links are generated instantly, usually within 2-3 seconds.

### Does it work on mobile devices?
Yes, the downloader is fully optimized for mobile devices and works in all modern browsers.


## 🔄 Updates & Changelog

### Latest Updates
- Enhanced mobile responsiveness
- Improved error handling
- Added support for more TeraBox URL formats
- Optimized download speed
- Added multi-language support

## 🌟 Why Choose Our TeraBox Downloader?

1. **No Account Required**: Unlike TeraBox's official app, you don't need to sign up
2. **No App Installation**: Works directly in your browser
3. **No Speed Limits**: Download at full speed without restrictions
4. **All Devices**: Works on computers, tablets, and phones
5. **Always Free**: No premium features or hidden costs
6. **Secure**: Your privacy and data are protected
7. **Fast**: Instant link generation and downloads
8. **Reliable**: High uptime and consistent performance

## 📊 Performance

- **Link Generation**: < 3 seconds average
- **Uptime**: 99.9% availability
- **Supported Formats**: All TeraBox file types
- **Browser Support**: All modern browsers
- **Mobile Optimization**: Fully responsive design

