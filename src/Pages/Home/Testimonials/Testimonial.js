import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distributed to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distributed to using Content here, content',
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distributed to using Content here, content',
            location: 'California'
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between items-center mb-16'>
                <div>
                    <h3 className="text-2xl font-semibold text-primary">Testimonial</h3>
                    <h1 className="text-4xl">What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='md:w-48 w-24' src={quote} alt="quote" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    >
                    </ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;