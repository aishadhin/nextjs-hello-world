import { useRouter } from 'next/router';
import React from 'react';

const Review = () => {
    const router = useRouter();
    const {productId, review} = router.query;
    return (
      <div>
        <h2>
          {productId}review is {review}
        </h2>
      </div>
    );
};

export default Review;