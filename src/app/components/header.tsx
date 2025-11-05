export default function Header() {
  return (
    <header className="w-full bg-gray shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-bold text-xl">KUTravelGuide</span>
        </div>

        <nav className="hidden md:flex gap-6 text-gray-700">
          <a href="#" className="hover:text-blue-600 transition-colors">Главная</a>
          <a href="#" className="hover:text-blue-600 transition-colors">О нас</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Контакты</a>
        </nav>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
          Войти
        </button>
      </div>
    </header>
  );
}
