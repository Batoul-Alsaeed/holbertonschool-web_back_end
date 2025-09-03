import fs from 'fs/promises';

export async function readDatabase(path) {
  try {
    const content = await fs.readFile(path, 'utf8');

    // Split lines, drop empties
    const lines = content
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    if (lines.length <= 1) {
      // Only header or empty: return empty groups
      return {};
    }

    const header = lines[0].split(',');
    const idxFirst = header.indexOf('firstname');
    const idxField = header.indexOf('field');

    const groups = {}; // { CS: [firstnames...], SWE: [...] }

    for (const line of lines.slice(1)) {
      const cols = line.split(',');
      if (cols.length !== header.length) continue;
      const first = cols[idxFirst];
      const field = cols[idxField];
      if (!groups[field]) groups[field] = [];
      groups[field].push(first);
    }

    return groups;
  } catch (e) {
    throw e;
  }
}
