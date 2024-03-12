

export function ReviewsPreview({review}){
console.log('review:', review)

return <section className="card-review">
<span>Name: {review.fullName}</span>
<span>Rating: {review.rating}</span>
<span>Read At: {review.readAt}</span>
</section>
}