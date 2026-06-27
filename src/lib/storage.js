const KEYS = {
  salary: 'kasama_salary',
  rightsCache: 'kasama_rights_cache', 
}

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

export function getSalaryEntries() {
  return read(KEYS.salary, [])
}

export function saveSalaryEntries(entries) {
  return write(KEYS.salary, entries)
}

export function addSalaryEntry(entry) {
  const entries = getSalaryEntries()
  const newEntry = { id: makeId(), createdAt: nowIso(), ...entry }
  entries.push(newEntry)
  saveSalaryEntries(entries)
  return newEntry
}

export function deleteSalaryEntry(id) {
  const entries = getSalaryEntries().filter(e => e.id !== id)
  saveSalaryEntries(entries)
  return entries
}

export function getRightsCache() {
  return read(KEYS.rightsCache, null)
}

export function setRightsCache(pages) {
  return write(KEYS.rightsCache, {
    fetchedAt: nowIso(),
    pages,
  })
}

function makeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

function nowIso() {
  return new Date().toISOString()
}
