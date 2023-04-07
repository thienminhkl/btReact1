import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className='container pb-5'>
                <div className="row justify-content-center">
                    <div className="col-lg-3" style={{ width: "18rem" }}>
                        <div className="card bg-light border-1 h-100">
                            <img src="..." className="card-img-top" alt="..." />

                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection" /></div>
                                <h2 className="fs-4 fw-bold">Card title</h2>
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora tenetur deserunt consectetur!</p>
                                <button className='btn btn-primary'>Find Out More!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3" style={{ width: "18rem" }}>
                        <div className="card bg-light border-1 h-100">
                        <img src="..." className="card-img-top" alt="..." />

                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-cloud-download" /></div>
                                <h2 className="fs-4 fw-bold">Card title</h2>
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora tenetur deserunt consectetur!</p>
                                <button className='btn btn-primary'>Find Out More!</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3" style={{ width: "18rem" }}>
                        <div className="card bg-light border-1 h-100">
                        <img src="..." className="card-img-top" alt="..." />

                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-card-heading" /></div>
                                <h2 className="fs-4 fw-bold">Card title</h2>
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora tenetur deserunt consectetur!</p>
                                <button className='btn btn-primary'>Find Out More!</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3" style={{ width: "18rem" }}>
                        <div className="card bg-light border-1 h-100">
                        <img src="..." className="card-img-top" alt="..." />

                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-bootstrap" /></div>
                                <h2 className="fs-4 fw-bold">Card title</h2>
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora tenetur deserunt consectetur!</p>
                                <button className='btn btn-primary'>Find Out More!</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
