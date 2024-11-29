import { z } from 'zod';

// Define the Zod schema for spintax input validation
const spintaxSchema = z.object({
  userInput: z.string().min(1, "User  input is required"),
  number: z.number().int().positive("Number must be a positive integer"),
});

// Validation function that parses and validates the input data
const validateSpintaxInput = (data: unknown): { userInput: string; number: number } => {
  return spintaxSchema.parse(data);
};

export { validateSpintaxInput };