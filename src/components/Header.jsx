import {BookOpen} from "lucide-react";
 
function Header(){
    return (
        <header className="flex items-center gap-3 bg-green-900 p-6 text-white rounded-xl">
        
             <BookOpen className="w-9 h-9 text-yellow-400" size={32}/>
             
             <div>
              <h1 className="text-3xl font-bold">MyBookShelf</h1>
            <p className="text-sm text-gray-200">Your personal book collection</p>
        </div>
        </header>
    );
}
export default Header;