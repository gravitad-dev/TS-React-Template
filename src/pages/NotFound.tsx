export const NotFound = () => {
  return (
    <body className="flex flex-col h-screen justify-center items-center bg-white">
      <div className="flex flex-col items-center">
        <h1 className="text-[120px] font-extrabold text-gray-700">404</h1>
        <p className="text-2xl font-medium text-gray-600 mb-6">
          Page Not Found
        </p>
        <a href="/">
          <button type="button">Go Home</button>
        </a>
      </div>
    </body>
  )
}
