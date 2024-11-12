import fetch from 'node-fetch';
import cheerio from 'cheerio';

async function scrapeWTARankings() {
  const response = await fetch('https://www.wtatennis.com/rankings/singles');
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const rankings = [];
  $('.rankings-table__row').each((i, elem) => {
    if (i < 10) { // Get top 10 players
      rankings.push({
        rank: $(elem).find('.rankings-table__rank').text().trim(),
        name: $(elem).find('.rankings-table__player-name').text().trim(),
        points: $(elem).find('.rankings-table__points').text().trim()
      });
    }
  });
  
  return rankings;
}

async function scrapeATPRankings() {
  const response = await fetch('https://www.atptour.com/en/rankings/singles');
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const rankings = [];
  $('.table-rankings-wrapper tbody tr').each((i, elem) => {
    if (i < 10) { // Get top 10 players
      rankings.push({
        rank: $(elem).find('.rank-cell').text().trim(),
        name: $(elem).find('.player-cell').text().trim(),
        points: $(elem).find('.points-cell').text().trim()
      });
    }
  });
  
  return rankings;
}

async function main() {
  try {
    const wtaRankings = await scrapeWTARankings();
    const atpRankings = await scrapeATPRankings();
    
    console.log('WTA Rankings:', wtaRankings);
    console.log('ATP Rankings:', atpRankings);
    
    // Here you would typically save this data to a database
  } catch (error) {
    console.error('Error:', error);
  }
}

main();