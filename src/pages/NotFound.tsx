export const NotFound = () => {
  return (
    <body className="flex flex-col h-screen mt-40 items-center bg-white">
      <div className="flex flex-col items-center">
        <h1 className="text-[120px] font-extrabold text-gray-700">404</h1>
        <p className="text-2xl font-medium text-gray-600 mb-6">
          Page Not Found
        </p>
        <a href="/">
          <button
            type="button"
            className="bg-primary text-white font-inter px-6 py-2 rounded-xl hover:bg-opacity-80 shadow-sm shadow-black active:shadow-none"
          >
            Go Home
          </button>
        </a>
      </div>
    </body>
  )
}
