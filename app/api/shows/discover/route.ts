import {  NextResponse } from 'next/server';
import { tmdbRequest } from '@/lib/tmdb';
import { TVShow } from '@/app/entities/TVShow';


export async function GET() {
    const data:TVShow[] = await tmdbRequest('/discover/tv');
    if (data.length>0){
    return NextResponse.json(data , { status: 200 })
    }
    else{
        return NextResponse.json(data , { status: 404 })
    }
}