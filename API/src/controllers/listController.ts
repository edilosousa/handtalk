// controllers/collectController.ts
import { Request, Response } from 'express';
import { database  } from '../services/firebaseService';
import { getDatabase, ref, query, orderByKey, limitToLast, get } from 'firebase/database';

/**
 * @swagger
 * /list:
 *   get:
 *     summary: Endpoint para listar dados.
 *     description: Retorna uma lista de dados.
 *     responses:
 *       200:
 *         description: Lista de dados retornada com sucesso.
 */


export const listData = async (req: Request, res: Response) => {
  try {
    // Cria uma referência ao caminho dos dados no Realtime Database
    const dbRef = ref(database, 'extractions');

    // Cria uma consulta para ordenar por chave e limitar a 20 itens mais recentes
    const dbQuery = query(dbRef, orderByKey(), limitToLast(20));

    // Obtém os dados da consulta
    const snapshot = await get(dbQuery);

    if (snapshot.exists()) {
      const data = snapshot.val();
      // Converte os dados para um array de objetos
      const dataList = Object.keys(data).map(key => ({ id: key, ...data[key] }));

      res.status(200).json(dataList);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents: ' });
  }
};