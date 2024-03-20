import React from 'react'

const Footer = () => {
    return (
        <div style={{ marginBottom: '3rem' }} >
            <div class="container text-center">
                <div style={{ marginTop: '3rem' }} class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div class="col">
                        <p className='my-1' style={{ fontSize: '21px', fontWeight: 700 }}>Phone</p>
                        <p>+91 9623548002</p>
                    </div>
                    <div class="col">
                        <p className='my-1' style={{ fontSize: '21px', fontWeight: 700 }}>Email</p>
                        <a>omkumar7828@gmail.com</a>
                    </div>
                    <div class="col">
                        <p className='my-1' style={{ fontSize: '21px', fontWeight: 700 }}>Follow me</p>
                        <a href="https://https://github.com/Rushikesh2912" target="_blank" rel="noopener noreferrer">
                            <i style={{ fontSize: '23px', cursor: 'pointer', color: 'black' }} className="fa-brands fa-github mx-2"></i>
                        </a>
                        <a href="https://www.instagram.com/rushikesh_shinde_828" target="_blank" rel="noopener noreferrer">
                            <i style={{ fontSize: '23px', cursor: 'pointer', color: 'black' }} className="fa-brands fa-instagram mx-2"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/rushikeshshinde7828" target="_blank" rel="noopener noreferrer">
                            <i style={{ fontSize: '23px', cursor: 'pointer', color: 'black' }} className="fab fa-linkedin-in mx-2"></i>
                        </a>
                        <a href="https://twitter.com/Rushike32313211" target="_blank" rel="noopener noreferrer">
                            <i style={{ fontSize: '23px', cursor: 'pointer', color: 'black' }} className="fa-brands fa-x-twitter"></i>
                        </a>
                    </div>
                    <div style={{ marginTop: '1rem' }} class="col">
                        <i class="fa-regular fa-copyright"></i> 2024 By Rushikesh Shinde.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
