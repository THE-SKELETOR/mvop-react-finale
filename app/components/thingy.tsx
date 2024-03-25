import React from "react";



export default function GridThingy({ stuff }: { stuff: string }) {
    
    return (
            <div className="w-1/2 lg:w-1/4 p-4">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-green-400 rounded-lg mb-2"></div>
                    <p className="text-sm text-center">{stuff}</p>
                </div>
            </div>
    )
}