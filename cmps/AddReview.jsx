

export function AddReview() {
    console.log('hay');

    function onAddReview() {

    }


    return <section className = "add-review">
        <form id="frmReview" onSubmit={onAddReview}>

            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" required name="fullName" placeholder="First and last name" />
            <select className="rating">
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
            <label htmlFor="readAt">Read at:</label>
            <input type="date" id="readAt" name="readAt" />
            <button className ="btn-add-review">Add</button>

        </form>
    </section>
}