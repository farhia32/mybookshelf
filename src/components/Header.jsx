import {BookOpen} from "lucide-react";
 
function Header(){
    return (
        <header className="bg-white shadow-sm px-4 py-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-3" >
            <div className="bg-green-100 p-2 rounded-lg">
             <BookOpen className="w-9 h-9 text-yellow-400" size={32}/>
</div>
             <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">MyBookShelf</h1>
            <p className="text-xs sm:texy-sm text-gray-500">Your personal book collection</p>
        </div>
       </div>
        </header>
    );
}
export default Header;