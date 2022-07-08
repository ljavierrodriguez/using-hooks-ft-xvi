import React, { useRef, useState } from 'react';
import ImageCard from './components/ImageCard';

import { FaSearch } from 'react-icons/fa';

const initialState = [
    { id: 1, src: 'https://images.unsplash.com/photo-1657226250237-7fc5989b4d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
    { id: 2, src: 'https://images.unsplash.com/photo-1657092587144-23934fd6784d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
    { id: 3, src: 'https://images.unsplash.com/photo-1657247882823-955a21e2f18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' },
    { id: 4, src: 'https://images.unsplash.com/photo-1657227809471-58837a22ba46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
]

const Gallery = () => {

    const [images] = useState(initialState);
    //const [imgSelected, setImgSelected] = useState(null);

    let imgRef = useRef(null);
    const searchRef = useRef(null);

    const setImgSelected = ({ src }) => {
        //imgRef.current.src = src;
        imgRef.src = src;
/*         imgRef.style.height = '400px';
        imgRef.onclick=(e) => alert(e.target.alt) */
    }

    return (
        <>
            <h1>Gallery App React</h1>
            <div className="container">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" ref={searchRef} />
                    <button className='btn btn-info btn-sm' onClick={() => {
                        alert(`Iniciando busqueda de: ${searchRef.current.value}`)
                    }}><FaSearch /></button>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        images.length > 0 &&
                        images.map((img) => (
                            <div className='col' key={img.id}>
                                <ImageCard src={img.src} alt={`Image ${img.id}`} setImgSelected={setImgSelected} />
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <img ref={(t) => imgRef = t} alt="Default" className='img-fluid' id="imgModal" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery;