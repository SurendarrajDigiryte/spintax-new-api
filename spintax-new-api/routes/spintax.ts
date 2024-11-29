import express, { Request, Response } from 'express';
import { generateSpintax } from '../services/spintax';
import { validateSpintaxInput } from '../models/spintax'; // Zod validation

const router = express.Router();

router.post('/spintax', async (req: Request, res: Response) => {
  try {
    console.log('spintax Initiated', req.body);
    const payload = req.body;
    const validatedInput = validateSpintaxInput(payload);
    console.log('validatedInput', validatedInput);
    
    const result = await generateSpintax(validatedInput.userInput, validatedInput.number);
    console.log('spintax End ts');
    
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

export default router;