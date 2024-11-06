import {  NextResponse } from 'next/server';
import { tmdbRequest } from '@/lib/tmdb';
import { Movie } from '@/app/entities/Movie';


export async function GET() {
    const data:Movie[] = await tmdbRequest('/discover/movie');
    if (data.length>0){
    return NextResponse.json({ message: 'success',data }, { status: 200 })
    }
    else{
        return NextResponse.json({ message: 'error',data }, { status: 404 })
    }
}