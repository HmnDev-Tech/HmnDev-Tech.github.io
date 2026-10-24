export function KotlinIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="kt-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7F52FF" />
          <stop offset="50%" stopColor="#C711E1" />
          <stop offset="100%" stopColor="#E4485D" />
        </linearGradient>
      </defs>
      <path d="M24 24H0V0h24L12 12l12 12zM12 12L0 24V0l12 12z" fill="url(#kt-grad)" />
    </svg>
  )
}

export function TypeScriptIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M11.5 10.5H5.5V12h2.2v7h1.6v-7h2.2v-1.5zm5.7 4.2c-.4-.4-.9-.6-1.5-.7-.4-.1-.7-.2-.9-.3-.2-.1-.3-.3-.3-.5 0-.2.1-.4.3-.5.2-.1.5-.2.8-.2.5 0 .9.1 1.2.3.3.2.5.5.6.9l1.4-.8c-.3-.5-.7-.9-1.2-1.2-.5-.3-1.2-.4-1.9-.4-.7 0-1.3.1-1.8.4-.5.3-.9.6-1.2 1.1-.3.5-.4 1-.4 1.6 0 .6.2 1.1.5 1.5.3.4.8.7 1.4.9.4.1.7.2.9.3.2.1.3.3.3.5 0 .3-.1.5-.3.6-.2.1-.6.2-1 .2-.6 0-1.1-.1-1.5-.4-.4-.3-.7-.7-.8-1.2l-1.4.6c.3.8.7 1.4 1.4 1.8.6.4 1.4.7 2.3.7.8 0 1.5-.1 2-.4.6-.3 1-.7 1.3-1.2.3-.5.5-1 .5-1.6 0-.6-.2-1.2-.5-1.6z"
        fill="#ffffff"
      />
    </svg>
  )
}

export function JavaScriptIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M7.5 17.8c.4.3.9.5 1.5.5.7 0 1.2-.3 1.5-.7.3-.4.4-1.1.4-2.1v-5H9v5c0 .6-.1 1-.2 1.2-.2.2-.4.3-.7.3-.3 0-.6-.1-.8-.3l-.7 1.1zm6.2-.2c.6.4 1.3.7 2.1.7 1.2 0 2.1-.6 2.1-1.7 0-.7-.4-1.2-1.3-1.6l-.7-.3c-.6-.2-.9-.5-.9-.9 0-.4.3-.7.8-.7.5 0 .8.2 1.1.5l.8-.9c-.5-.5-1.1-.7-1.9-.7-1.2 0-2 .7-2 1.7 0 .8.5 1.3 1.4 1.7l.7.3c.6.2.9.5.9 1 0 .5-.4.8-1 .8-.6 0-1.1-.3-1.5-.7l-.6 1.3z"
        fill="#000000"
      />
    </svg>
  )
}

export function PythonIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M11.9 2c-3.1 0-5.1 1.4-5.1 3.5v2.6h5.3v.8H4.6C2.6 8.9 1 10.7 1 13.5c0 2.9 1.7 4.5 4.1 4.5h2.1v-2.3c0-1.8 1.5-3.3 3.3-3.3h5.4v-.9c0-2-1.7-3.6-3.8-3.6h-5.2V5.5c0-1.4 1.8-2.6 3.9-2.6h3.4V2h-2.3zm-1.8 1.8c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zm2 18.2c3.1 0 5.1-1.4 5.1-3.5v-2.6h-5.3v-.8h7.5c2 0 3.6-1.8 3.6-4.6 0-2.9-1.7-4.5-4.1-4.5h-2.1v2.3c0 1.8-1.5 3.3-3.3 3.3H8.1v.9c0 2 1.7 3.6 3.8 3.6h5.2v2.4c0 1.4-1.8 2.6-3.9 2.6h-3.4V22h2.3zm1.8-1.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
        fill="url(#py-grad)"
      />
      <defs>
        <linearGradient id="py-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3776AB" />
          <stop offset="100%" stopColor="#FFD43D" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function JavaIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M8.8 17.5s-.8.1-1.2.3c0 0-.2.1-.2.2 0 0 1.5.2 3.8.2 2.7 0 5.1-.3 5.1-.3s-.4-.2-.8-.3c-.9-.2-2.9-.3-4.7-.3-1 0-2 .1-2 .2zm-1.1 1.7s-.7.2-1.1.4c0 0-.1.1-.1.2 0 0 1.7.2 4.4.2 3.1 0 5.8-.3 5.8-.3s-.4-.2-.9-.3c-1-.2-3.3-.3-5.5-.3-1.2 0-2.3.1-2.6.1zm5.7-4.3c.7-.9 1.1-1.8 1.1-2.9 0-.4 0-.8-.1-1.2-.2.4-.4.8-.7 1.2-.7 1-1.2 2-1.2 3.1 0 .5.1 1 .3 1.4.3-.5.5-1.1.6-1.6zm-3.2-3.8c-.2.6-.3 1.2-.3 1.8 0 1 .3 2 1 2.8.4-.7.6-1.5.6-2.3 0-.9-.3-1.6-.7-2.3-.2 0-.4 0-.6 0zm-2.4 9.1s.8.4 2.8.5c2.3.1 5.3 0 7.3-.7 0 0-.5.4-1.7.7-2.2.5-5.9.6-8.4-.5z"
        fill="#EA2D2E"
      />
      <path
        d="M14.6 9.8c.2-.5.4-1.1.4-1.8 0-1.3-.8-2.6-2.1-3.5.5.7.8 1.5.8 2.3 0 .8-.3 1.6-.8 2.3.6.2 1.2.4 1.7.7z"
        fill="#5382A1"
      />
    </svg>
  )
}
