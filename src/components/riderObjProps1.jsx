const RiderObjProps1 = (objProps) => {
    const { nombre, apellido } = objProps
    return (
        <>
            <button className =
                "bg-yellow-500 px-6 py-2 text-white">
                {nombre} {apellido}
            </button>
        </>
    )
}

export default RiderObjProps1;