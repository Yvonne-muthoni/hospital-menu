import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="bg-white/90 backdrop-blur-md shadow-sm p-4 flex items-center justify-center gap-3 sticky top-0 z-50">
      <img 
        src={logo} 
        alt="Avenue Healthcare" 
        className="h-12 object-contain"
      />
      <h1 className="text-xl md:text-2xl font-bold text-blue-700">
        Avenue Hospital Menu
      </h1>
    </div>
  );
}

export default Header;