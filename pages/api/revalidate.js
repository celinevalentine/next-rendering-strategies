export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  const { photoId } = req.query;
  console.log("req", req.query);
  try {
    await res.unstable_revalidate(`/photos-on-demand-isr/${photoId}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
