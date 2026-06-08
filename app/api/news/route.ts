import Parser from 'rss-parser';
import { NextResponse } from 'next/server';

const parser = new Parser();

export async function GET() {
  try {
    // Cointelegraph RSS Feed එක
    const feed = await parser.parseURL('https://cointelegraph.com/rss');
    
    // අවශ්‍ය News ටික විතරක් ගන්න
    const news = feed.items.slice(0, 5).map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
    }));

    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}