import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();
    
    const servizi = await db
      .collection('servizi')
      .find({})
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json(servizi);
  } catch (error) {
    console.error('Errore nel recupero dei servizi:', error);
    res.status(500).json({ error: 'Errore nel recupero dei servizi' });
  }
} 