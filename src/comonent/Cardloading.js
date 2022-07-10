import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Cardloading = () => {
    return (
        <>
            <div className='col-md-2'>
                <div className='card'>
                    <div className='card-body'>
                        <Skeleton height={100} width={100} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cardloading
