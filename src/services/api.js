// src/services/api.js

// Static data import (works on GitHub Pages)
import db from '../data/db.json';

// ✅ Fetch profile
export async function fetchProfile() {
  return Promise.resolve(db.profile);
}

// ✅ Fetch projects
export async function fetchProjects() {
  // If projects are inside profile
  if (db.profile?.projects) {
    return Promise.resolve(db.profile.projects);
  }

  // If projects are top-level in db.json
  if (db.projects) {
    return Promise.resolve(db.projects);
  }

  return Promise.resolve([]);
}

// ✅ Fetch right navbar items
export async function fetchRightNavItems() {
  return Promise.resolve(db.profile?.rightNavItems || []);
}