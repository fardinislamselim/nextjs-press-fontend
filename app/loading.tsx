export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="inline-block animate-spin rounded-full border-[4px] border-current border-t-transparent text-blue-600"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
