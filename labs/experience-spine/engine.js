// Evaluate every target from the current document position, including after restoration.
export const clamp = x => Math.max(0, Math.min(1, x));
export function ease(x) {
  const t = clamp(x);
  return t * t * (3 - 2 * t);
}
export function track(frames, phase) {
  const i = Math.min(Math.floor(phase), frames.length - 2);
  return frames[i].map((a, k) => a + (frames[i + 1][k] - a) * ease(phase - i));
}
export function mount(render) {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let queued = false;
  function paint() {
    queued = false;
    document.body.classList.toggle('live', !motion.matches);
    const range = document.documentElement.scrollHeight - innerHeight;
    render(motion.matches ? 1 : clamp(scrollY / Math.max(1, range)), motion.matches);
  }
  function schedule() {
    if (!queued) requestAnimationFrame(paint);
    queued = true;
  }
  for (const event of ['scroll','resize','pageshow']) addEventListener(event, schedule, {passive:true});
  motion.addEventListener('change', schedule);
  paint();
}
