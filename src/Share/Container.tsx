"use client "
import { ReactNode } from "react";

interface ShareProps {
  children: ReactNode;
}

const Container: React.FC<ShareProps> = ({children}) =>{
    return(
        <div className="max-w-screen-xl mx-auto px-5">
            {children}
        </div>
    )
}

export default Container;
