import {  NextResponse } from 'next/server';
import { tmdbRequest } from '@/lib/tmdb';
import { TVShow } from '@/entities/TVShow';

export async function GET() {
    const data:TVShow[] = await tmdbRequest('/tv/top_rated');
    if (data.length>0){
    return NextResponse.json({ message: 'success',data }, { status: 200 })
    }
    else{
        return NextResponse.json({ message: 'error',data }, { status: 404 })
    }
}