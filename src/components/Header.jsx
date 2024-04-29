const Header = () => {

  return(
    <header className="flex justify-between p-5 bg-sky-950 text-gray-300">
      <span className="text-3xl font-extrabold hover:text-slate-500 transition ease-out delay-150 hover:-translate-y-1 hover:cursor-pointer mx-10">Graficos</span>
      <nav className="flex justify-between  font-semibold mx-10">
        <ul className="px-2 hover:text-slate-500 transition ease-out delay-150 hover:-translate-y-0.5 hover:cursor-pointer"><li>Inicio</li></ul>
        <ul className="px-2 hover:text-slate-500 transition ease-out delay-150 hover:-translate-y-0.5 hover:cursor-pointer"><li>Barra</li></ul>
        <ul className="px-2 hover:text-slate-500 transition ease-out delay-150 hover:-translate-y-0.5 hover:cursor-pointer"><li>Torta</li></ul>
        </nav>
    </header>
  )
}

export default Header