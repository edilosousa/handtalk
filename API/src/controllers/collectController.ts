import { Request, Response } from 'express';
import { getDatabase, ref, push } from 'firebase/database';
import { database } from '../services/firebaseService';

/**
 * @swagger
 * /collect:
 *   post:
 *     summary: Endpoint para coletar dados.
 *     description: Coleta dados da requisição.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               device:
 *                 type: string
 *                 description: Dispositivo usado para coleta de dados.
 *               os:
 *                 type: string
 *                 description: Sistema operacional do dispositivo.
 *               domain:
 *                 type: string
 *                 description: Domínio associado à coleta de dados.
 *               themeChanges:
 *                 type: number
 *                 description: Lista de alterações de tema.
 *     responses:
 *       200:
 *         description: Dados coletados com sucesso.
 *       401:
 *         description: Não autorizado.
 */

export const collectData = async (req: Request, res: Response) => {
  const { device, os, domain, themeChanges } = req.body;

  const newExtraction = {
    device,
    os,
    domain,
    themeChanges,
    timestamp: Date.now()
  };

  try {
    // Cria uma referência ao caminho dos dados no Realtime Database
    const extractionRef = ref(database, 'extractions');

    // Adiciona os novos dados à referência
    const newRef = await push(extractionRef, newExtraction);

    res.status(200).json({ message: 'Data collected successfully', id: newRef.key });
  } catch (error) {
    res.status(500).json({ error: 'Error adding document: ' });
  }
};
