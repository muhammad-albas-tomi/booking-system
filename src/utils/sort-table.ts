export function toggleSortColumn(
  current: string | null,
  columnKey: string,
): string {
  if (!current) return `${columnKey}:asc`;

  const parts = current.split(',');

  const index = parts.findIndex((p) => p.startsWith(`${columnKey}:`));
  if (index !== -1) {
    const [_, dir] = parts[index].split(':');
    const newDir = dir === 'asc' ? 'desc' : 'asc';
    parts[index] = `${columnKey}:${newDir}`;
  } else {
    parts.push(`${columnKey}:asc`);
  }

  return parts.join(',');
}
