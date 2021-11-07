

export default function Interview({title, items}) {

    return (
        <>
            <h3> {title} </h3>

            {items.map((item,i) => (
                <div key={i} style={{marginLeft: '20px'}}>
                    <p>
                        <strong> Q: </strong>
                        <span>{item.q}</span>
                    </p>

                    <p>
                        <strong> A: </strong>
                        <span>{item.a}</span>
                    </p>
                </div>
                
            ))}
        </>
    )
}