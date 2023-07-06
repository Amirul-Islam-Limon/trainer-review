import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
// alert confarmation
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const AddService = () => {
    const { user } = useContext(AuthContext);

    const MySwal = withReactContent(Swal)
    
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.name.value;
        const imageURL = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const email = form.email.value;
        const description = form.description.value;

        const servicesInfo = {
            serviceName, 
            imageURL,
            price,
            rating,
            email,
            description
        }

        console.log(serviceName, imageURL, price, rating, email, description);

        fetch('http://localhost:5000/addServices', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(servicesInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your service has been added!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            });
        
    }
    
    return (
        <div className='mb-24 mt-10'>
            <h2 className='lg:text-5xl text-center mb-10 font-semibold'><span className='border-b-4 border-yellow-500'>Add S</span><span className='pb-0.5 border-b border-gray-500'>ervice</span></h2>
            <form onSubmit={handleAddService} className='lg:w-1/2 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                        <input type="text" name='name' placeholder="Service name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Image URL</span>
                    </label>
                        <input type="text" name='image' placeholder="imageURL" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                        <input type="text" name='price' placeholder="price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                        <input type="text" name='rating' placeholder="rating" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                        <input type="text" name='email' defaultValue={user?.email} placeholder="enter your email" className="input input-bordered" disabled/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Description</span>
                    </label>
                        <textarea name='description' placeholder="Service Description....." className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
                <div className='flex justify-center mt-5 mb-20'>
                    <button to='/' className="text-center btn px-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-pink-500 hover:to-purple-500 text-white">submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;