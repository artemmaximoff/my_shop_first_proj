
export const ConfirmDelete = ({ deleteHere, onClose }) => {


    return (
        <div className="flex justify-center">

            <div><button onClick={() => { deleteHere(); onClose() }} className="mx-1 px-8 py-4 rounded bg-yellow-500">Yes</button></div>
            <div><button onClick={() => onClose()} className="mx-1 px-8 py-4 rounded bg-blue-400">No</button></div>
        </div >
    )
}
