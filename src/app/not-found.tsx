export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="text-xl text-white/60">Page not found</p>
        <a href="/" className="mt-4 inline-block underline underline-offset-4">
          Return Home
        </a>
      </div>
    </div>
  );
}
