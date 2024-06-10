// controllers/collectController.ts
import { Request, Response } from 'express';
import { firestore } from '../services/firebaseService';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';


export const listData = async (req: Request, res: Response) => {
  try {
    const q = query(collection(firestore, 'extractions'), orderBy('timestamp', 'desc'), limit(20));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents: '});
  }
};