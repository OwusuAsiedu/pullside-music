# Pullside Music

Pullside Music is a simple and modern hip-hop video discovery website designed as part of my ALX Front-End Web Development Capstone Project. The platform allows users to explore the latest hip-hop/rap music videos, watch embedded YouTube content, and follow links to stream songs on music platforms like Apple Music and Spotify.

## Features

- **Home Page**: Featured and trending hip-hop videos
- **New Releases**: Latest hip-hop music videos
- **Trending**: Most popular hip-hop videos
- **News**: Hip-hop news and updates
- **Search**: Search for artists or songs
- **Mobile-friendly**: Responsive design for all devices

## Technologies Used

- React
- Vite
- Tailwind CSS
- YouTube Data API v3
- React Router

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Get a YouTube Data API v3 key from [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the YouTube Data API v3
   - Create credentials (API key)
4. Create a `.env` file in the root directory and add your API key: `VITE_YOUTUBE_API_KEY=your_api_key_here`
5. Run the development server: `npm run dev`

**Note**: If you don't have an API key, the app will use backup static data for demonstration purposes.

## Deployment

This project can be deployed to Vercel, Netlify, or any static site host.

## License

This project is part of an educational capstone project.
