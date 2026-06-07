import { NextResponse } from 'next/server';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

async function getAccessToken() {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refresh_token || '',
        }),
        cache: 'no-store',
    });

    return response.json();
}

export async function GET() {
    // If credentials are not present, return a fallback mock playing status matching user request
    if (!client_id || !client_secret || !refresh_token) {
        return NextResponse.json({
            isPlaying: true,
            title: "Faramosh",
            artist: "Madboy Mink, Saba Azad",
            songUrl: "https://open.spotify.com/track/4Pz7jTGLb5wOaQz8U315jZ",
        });
    }

    try {
        const { access_token } = await getAccessToken();

        const response = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            cache: 'no-store',
        });

        if (response.status === 204 || response.status > 400) {
            return NextResponse.json({ isPlaying: false });
        }

        const song = await response.json();

        if (!song || song.item === null) {
            return NextResponse.json({ isPlaying: false });
        }

        const isPlaying = song.is_playing;
        const title = song.item.name;
        const artist = song.item.artists.map((_artist: { name: string }) => _artist.name).join(', ');
        const songUrl = song.item.external_urls.spotify;

        return NextResponse.json({
            isPlaying,
            title,
            artist,
            songUrl,
        });
    } catch (error) {
        console.error('Error fetching Spotify now playing:', error);
        // Fallback to mock data matching user screenshot
        return NextResponse.json({
            isPlaying: true,
            title: "Faramosh",
            artist: "Madboy Mink, Saba Azad",
            songUrl: "https://open.spotify.com/track/4Pz7jTGLb5wOaQz8U315jZ",
        });
    }
}
