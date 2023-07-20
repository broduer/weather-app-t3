import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = ''; //Enter visualcrossing weather API token here.
  if (req.method === 'GET') {
    try {
      const prompt = req.query.prompt as string;
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${prompt}?unitGroup=metric&key=${token}&contentType=json`;
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
