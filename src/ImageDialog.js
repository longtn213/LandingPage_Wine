import React, { useState } from 'react';
import ReactPageFlip from 'react-flip-page';
import './ImageDialog.css';
import anh1 from './image/anh1.jpg'
import anh2 from './image/anh2.jpg'
import anh3 from './image/anh3.jpg'
const images = [
    anh1,
    anh2,
    anh3,
    // Thêm đường dẫn đến các hình ảnh khác ở đây
];

function ImageDialog() {
    const [currentPage, setCurrentPage] = useState(0);


    return (
        <div className="image-dialog-container">
            <div className="overlay-background">
                <ReactPageFlip
                    width={1370}
                    height={929}
                    pageIndex={currentPage}
                    onFlip={setCurrentPage}
                    orientation ="horizontal"
                    showTouchHint ={true}
                >
                    {images.map((image, index) => (
                        <div key={index} className="page">
                            <img src={image} alt={`Image ${index + 1}`} className="image-flip" />
                        </div>
                    ))}
                </ReactPageFlip>
            </div>

        </div>
    );
}

export default ImageDialog;
