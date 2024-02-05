import { ReactNode } from "react";

interface ShareProps{
    children: ReactNode;
}

const Container: React.FC<ShareProps> = ({children}) =>{
    return(
        <div className="max-w-screen-xl mx-auto px-4">
            {children}
        </div>
    )
}

export default Container;