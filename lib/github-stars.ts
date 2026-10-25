const REVALIDATE_SECONDS = 60 * 60;

type GithubRepo = {
  fork: boolean;
  stargazers_count: number;
};

function isGithubRepo(value: unknown): value is GithubRepo {
  if (!value || typeof value !== 'object') return false;
  const record = value as { fork?: unknown; stargazers_count?: unknown };
  return typeof record.fork === 'boolean' && typeof record.stargazers_count === 'number';
}

/** Sum of stars on the user's public, non-fork repositories. Returns null when the request fails. */
export async function getGithubStars(username: string): Promise<number | null> {
  try {
    let total = 0;

    for (let page = 1; page <= 10; page += 1) {
      const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&page=${page}&type=owner`,
        {
          headers: {
            Accept: 'application/vnd.github+json',
            'User-Agent': 'timliu-personal-homepage',
            'X-GitHub-Api-Version': '2022-11-28',
          },
          next: { revalidate: REVALIDATE_SECONDS },
        },
      );

      if (!response.ok) return null;

      const repos: unknown = await response.json();
      if (!Array.isArray(repos)) return null;

      for (const repo of repos) {
        if (!isGithubRepo(repo)) return null;
        if (!repo.fork) total += repo.stargazers_count;
      }

      if (repos.length < 100) return total;
    }

    return total;
  } catch {
    return null;
  }
}
