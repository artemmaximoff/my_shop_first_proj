import React from "react";

export const Modal = ({ onClose, title, ...props }) => {


    return (
        <>
            <div onClick={onClose} className="fixed bg-black/40 top-0 left-0 right-0 bottom-0">
            </div>
            <div className="w-[500px] p-5 rounded bg-white top-10 fixed left-1/2 -translate-x-1/2">
                <h1 className="text-2xl text-center mb-2">{title}</h1>
                {props.children}
            </div >
        </>
    )


}