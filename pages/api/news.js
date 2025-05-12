import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();
    
    const news = await db
      .collection('news')
      .find({})
      .sort({ pubblicazione: -1 })
      .toArray();

    res.status(200).json(news);
  } catch (error) {
    console.error('Errore nel recupero delle news:', error);
    res.status(500).json({ error: 'Errore nel recupero delle news' });
  }
} 