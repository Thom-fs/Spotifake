export async function urlVerification(track, isValidTimestamp, fetchNewUrl) {
  let newTrack = track;
  const urlValid = isValidTimestamp(track.expiration);
  if (!urlValid) {
    newTrack = await fetchNewUrl(track.id);
  }

  return newTrack;
}
