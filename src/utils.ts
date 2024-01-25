export function getRandom (): number {
  return Math.floor(Math.random() * 100)
}

export function getRandomString (): string {
  return getRandom().toString()
}
