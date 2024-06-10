import { Request, Response } from 'express';
import { firestore } from '../services/firebaseService';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export const collectData = async (req: Request, res: Response) => {
  const { device, os, domain, themeChanges } = req.body;
  // const token = req.headers['x-access-token'] as string;

  // const extractionRef = ref(firestore, 'extractions');

  const newExtraction = {
    device,
    os,
    domain,
    themeChanges,
    timestamp: Date.now()
  };

  try {
    const docRef = await addDoc(collection(firestore, 'extractions'), newExtraction);
    res.status(200).json({ message: 'Data collected successfully', id: docRef.id });
  } catch (error) {
    res.status(500).json({ error: 'Error adding document: '});
  }

  // await push(extractionRef, newExtraction);

  // res.status(200).json({ message: 'Data collected successfully' });
};
