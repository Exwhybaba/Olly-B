type IconProps = {
  size?: number
  strokeWidth?: number
  className?: string
}

const base = (size = 24, strokeWidth = 2, className?: string) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
  'aria-hidden': true,
})

export function ArrowRight({ size = 24, strokeWidth = 2, className }: IconProps) {
  return <svg {...base(size, strokeWidth, className)}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
}
export function CalendarDays({ size = 24, strokeWidth = 2, className }: IconProps) {
  return <svg {...base(size, strokeWidth, className)}><path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>
}
export function Check({ size = 24, strokeWidth = 2, className }: IconProps) {
  return <svg {...base(size, strokeWidth, className)}><path d="m5 12 4 4L19 6"/></svg>
}
export function ChefHat({ size = 24, strokeWidth = 2, className }: IconProps) {
  return <svg {...base(size, strokeWidth, className)}><path d="M6 13.87A4 4 0 0 1 7.5 6a5 5 0 0 1 9 0A4 4 0 0 1 18 13.87V21H6Z"/><path d="M6 17h12"/></svg>
}
export function Flame({ size = 24, strokeWidth = 2, className }: IconProps) {
  return <svg {...base(size, strokeWidth, className)}><path d="M12 22c4.4 0 7-3.1 7-7.2 0-3.6-2.1-6-5-8.8.2 2.4-1.3 3.9-2.5 4.8C10.7 8.5 9.1 5.9 6.7 4 6.3 7.3 5 9.1 5 12.2 5 17.7 7.8 22 12 22Z"/><path d="M9.5 17.5c0-1.8 1-3 2.5-4.5.2 1.4 1 2.2 1.6 2.8.7.6.9 1.1.9 1.8a2.5 2.5 0 0 1-5 0Z"/></svg>
}
export function MessageCircle({ size = 24, strokeWidth = 2, className }: IconProps) {
  return <svg {...base(size, strokeWidth, className)}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.7-5A8 8 0 1 1 21 15Z"/></svg>
}
export function Phone({ size = 24, strokeWidth = 2, className }: IconProps) {
  return <svg {...base(size, strokeWidth, className)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/></svg>
}
export function Sparkles({ size = 24, strokeWidth = 2, className }: IconProps) {
  return <svg {...base(size, strokeWidth, className)}><path d="m12 3-1.4 3.4L7 8l3.6 1.6L12 13l1.4-3.4L17 8l-3.6-1.6Z"/><path d="m5 14-.9 2.1L2 17l2.1.9L5 20l.9-2.1L8 17l-2.1-.9Z"/><path d="m19 13-.7 1.7-1.8.8 1.8.8L19 18l.7-1.7 1.8-.8-1.8-.8Z"/></svg>
}
export function UtensilsCrossed({ size = 24, strokeWidth = 2, className }: IconProps) {
  return <svg {...base(size, strokeWidth, className)}><path d="m16 2-2 2 6 6 2-2"/><path d="m3 21 7.5-7.5"/><path d="M14 4 4 14a4 4 0 0 0 6 6l10-10"/><path d="M5 3v4M8 3v4M5 7h3c0 2-1 3-3 4"/></svg>
}
