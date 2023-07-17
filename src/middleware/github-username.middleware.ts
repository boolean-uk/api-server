import { Response, NextFunction } from 'express';
import { Octokit } from 'octokit';
import { Context } from './context';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const orgName = process.env.GITHUB_ORG || '';

export const GithubUser = async (
  req: Context,
  res: Response,
  next: NextFunction,
) => {
  const { username } = req.params;
  req.context = {
    username: username,
  };
  try {
    await octokit.rest.orgs.getMembershipForUser({
      org: orgName,
      username: username,
    });
    next();
  } catch (e) {
    return res.status(401).json({
      error: `you must be part of the ${orgName} organisation to use this api`,
    });
  }
};
