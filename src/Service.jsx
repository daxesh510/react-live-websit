import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './Card'
import Sdata from './Sdata'


const Service = () => {

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'> Our Service</h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gt-5'>
                            {Sdata.map((val, index) => {
                                return <Card key={index} src={val.imgsrc} title={val.title} btn='Go Here' alt="home_1" />
                            })
                            }
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default Service