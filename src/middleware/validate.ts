import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError } from 'zod';

type ZodErrorsType = Record<string, [] | Record<string, []>>;

const formatErrorPart = (
  part: string,
  errors: ZodErrorsType,
): string[] => {
  const issues: string[] = [];
  if (!errors) {
    return issues;
  }
  const values = Object.values(errors);
  for (const value of values) {
    if (!Array.isArray(value)) {
      const nestedIssues = formatErrorPart(part, value);
      issues.push(...nestedIssues);
      continue;
    }
    const mappedIssues = value.map((issue) => `${part}: ${issue}`);
    issues.push(...mappedIssues);
  }
  return issues;
};

const formatError = (error: ZodError): string[] => {
  const paramsIssues = formatErrorPart(
    'params',
    (error.format() as unknown as {params: ZodErrorsType}).params,
  );
  const bodyIssues = formatErrorPart(
    'body',
    (error.format() as unknown as {body: ZodErrorsType}).body,
  );
  const queryIssues = formatErrorPart(
    'query',
    (error.format() as unknown as {query: ZodErrorsType}).query,
  );
  const issues = [...paramsIssues, ...bodyIssues, ...queryIssues];
  return issues;
};

export const Validate = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        const issues = formatError(error);
        return res.status(400).json({ error: issues });
      }
      return res.status(400).json(error);
    }
  };
};
